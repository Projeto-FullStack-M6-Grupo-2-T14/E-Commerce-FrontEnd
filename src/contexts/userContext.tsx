import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { TRegisterData } from "src/components/register/registerForm/registerFormSchema";
import Api from "src/services/Api";

interface IUserProviderProps {
    children: React.ReactNode;
  }

interface IUserContext { 
    userRegister: (userData: TRegisterData) => Promise<void>
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

    return (
        <UserContext.Provider value={{ userRegister }}>
          {children}
        </UserContext.Provider>
      );
  }

export default UserProvider