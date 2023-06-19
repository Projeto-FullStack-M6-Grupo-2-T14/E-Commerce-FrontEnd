import { AxiosError } from "axios";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TAnuncioData } from "src/components/anuncio/posterFormSchema";
import { TLoginData } from "src/components/forms/loginForm/loginFormSchema";
import { TRegisterData } from "src/components/forms/registerForm/registerFormSchema";
import { ApiShop } from "src/services/Api";


interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userRegister: (userData: TRegisterData) => Promise<void>
  login: (loginData: TLoginData) => Promise<void>
  anuncio: (anuncioData: TAnuncioData) => Promise<void>
  userData: IUser | null
  setUserData: Dispatch<SetStateAction<IUser | null>>
  successfullyCreated: boolean
  setSuccessfullyCreated: Dispatch<SetStateAction<boolean>>
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
  is_seller: boolean;
  address: IAddress;
}

interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
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
  const [userData, setUserData] = useState<IUser | null>(null);
  const [successfullyCreated, setSuccessfullyCreated] = useState(false)
  const navigate = useNavigate();

  const userRegister = async (userData: TRegisterData): Promise<void> => {
    try {
      const response = await ApiShop.post<IUser>("/users", userData);
      setUserData(response.data)
      setSuccessfullyCreated(true)
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError.message)
    }
  };

  const login = async (loginData: TLoginData): Promise<void> => {
    try {
      const response = await ApiShop.post<ILoginResponse>("/login", loginData);
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/", { replace: true })
    } catch (error) {
      console.log(error)
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
    <UserContext.Provider value={{ userRegister, login, anuncio, userData, setUserData, successfullyCreated, setSuccessfullyCreated }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider