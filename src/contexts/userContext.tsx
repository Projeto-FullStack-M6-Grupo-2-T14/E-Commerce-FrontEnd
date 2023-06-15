import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { TLoginData } from "src/components/forms/loginForm/loginFormSchema";
import { TRegisterData } from "src/components/forms/registerForm/registerFormSchema";
import Api from "src/services/Api";

interface IUserProviderProps {
    children: React.ReactNode;
  }

interface IUserContext { 
    userRegister: (userData: TRegisterData) => Promise<void>
    login: (loginData: TLoginData) => Promise<void>
 }

interface IUser {
    id: number
    name: string;
    email: string;
    password: string;
    cpf: string;
    phone: string;
    birthday: string;
    description: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
    is_seller: boolean;
  }

  interface ILoginResponse {
    user: IUser
    token: string;
  }

  export const UserContext = createContext({} as IUserContext);

  const UserProvider = ({ children }: IUserProviderProps) => {
    const navigate = useNavigate();

    const userRegister = async (userData: TRegisterData): Promise<void> => {
        try {
          await Api.post<IUser>("/users", userData);
        } catch (error) {
          console.log(error)
        } finally {
          navigate("/login")
        }
      };

    const login =async (loginData:TLoginData): Promise<void> => {
      try {
        const response = await Api.post<ILoginResponse>("/login", loginData);
        localStorage.setItem("@TOKEN", response.data.token);
      } catch (error) {
        console.log(error)
      } finally {
        navigate("/dashboard", { replace: true })
      }
    };

    return (
        <UserContext.Provider value={{ userRegister, login }}>
          {children}
        </UserContext.Provider>
      );
  }

export default UserProvider