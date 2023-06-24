import { AxiosError } from "axios";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TAnuncioData } from "src/components/anuncio/posterFormSchema";
import { TLoginData } from "src/components/forms/loginForm/loginFormSchema";
import { TRegisterData } from "src/components/forms/registerForm/registerFormSchema";
import { TNewPass } from "src/pages/newPassword/newPasswordSchema";
import { ApiShop } from "src/services/Api";
import jwt_decode from "jwt-decode";


interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userRegister: (userData: TRegisterData) => Promise<void>;
  login: (loginData: TLoginData) => Promise<void>;
  anuncio: (anuncioData: TAnuncioData) => Promise<void>;
  isSeller: boolean;
  successfullyCreated: boolean;
  setSuccessfullyCreated: Dispatch<SetStateAction<boolean>>;
  updatePassword: (newPassData: TNewPass) => Promise<void>
  userLogout: () => void
}

interface IUser {
  id: number;
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
  const [isSeller, setIsSeller] = useState(false);
  const [successfullyCreated, setSuccessfullyCreated] = useState(false);
  const navigate = useNavigate();

  const userRegister = async (userData: TRegisterData): Promise<void> => {
    try {
      await ApiShop.post<IUser>("/users", userData);
      setSuccessfullyCreated(true);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError.message);
    }
  };

  const login = async (loginData: TLoginData): Promise<void> => {
    try {
      const response = await ApiShop.post<ILoginResponse>("/login", loginData);
      const { token } = response.data;
      const decodedToken = jwt_decode<{ userId: number, userName: string, userIsSeller: boolean }>(token)
      const userId = decodedToken.userId; 
      const userName = decodedToken.userName;
      setIsSeller(decodedToken.userIsSeller)
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USER_ID", String(userId));
      localStorage.setItem("@USER_NAME", userName);      
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/user", { replace: true });
    }
  };

  const anuncio = async (anuncioData: TAnuncioData): Promise<void> => {
    try {
      console.log(anuncioData);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/dashboard", { replace: true });
    }
  };

  const updatePassword = async (newPassData: TNewPass): Promise<void> => {
    try {
      console.log(newPassData);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/dashboard", { replace: true });
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER_ID");
    localStorage.removeItem("@USER_NAME");
    setIsSeller(false)
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        userRegister,
        login,
        anuncio,
        isSeller,
        successfullyCreated,
        setSuccessfullyCreated,
        updatePassword,
        userLogout
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
