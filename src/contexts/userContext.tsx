import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { TAnuncioData } from "src/components/anuncio/anuncioFormSchema";
import { TLoginData } from "src/components/forms/loginForm/loginFormSchema";
import { TRegisterData } from "src/components/forms/registerForm/registerFormSchema";
import Api from "src/services/Api";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userRegister: (userData: TRegisterData) => Promise<void>
  login: (loginData: TLoginData) => Promise<void>
  anuncio: (anuncioData: TAnuncioData) => Promise<void>
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

interface IAnuncioResponse {
  marca: string;
  modelo: string;
  ano: string;
  combustivel: string;
  quilometragem: string;
  cor: string;
  precoFipe: string;
  preco: string;
  descricao: string;
  imagemCapa: string;
  imagemGaleria: string;
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

  const login = async (loginData: TLoginData): Promise<void> => {
    try {
      const response = await Api.post<ILoginResponse>("/login", loginData);
      localStorage.setItem("@TOKEN", response.data.token);
    } catch (error) {
      console.log(error)
    } finally {
      navigate("/dashboard", { replace: true })
    }
  };

  const anuncio = async (anuncioData: TAnuncioData): Promise<void> => {
    try {
      console.log(anuncioData)
    } catch (error) {
      console.log(error)
    } finally {
      navigate("/dashboard", { replace: true })
    }
  };

  return (
    <UserContext.Provider value={{ userRegister, login, anuncio }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider