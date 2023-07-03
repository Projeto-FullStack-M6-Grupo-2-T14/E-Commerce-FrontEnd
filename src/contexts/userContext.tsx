import { AxiosError } from "axios";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { TLoginData } from "src/components/forms/loginForm/loginFormSchema";
import { TRegisterData } from "src/components/forms/registerForm/registerFormSchema";
import { TNewPass } from "src/pages/newPassword/newPasswordSchema";
import { ApiShop } from "src/services/Api";
import jwt_decode from "jwt-decode";
import { TSendEmail } from "src/pages/sendEmail/sendEmailSchema";
import { iUpdateUser } from "src/components/profile/Modals/modalUpdateUser/modalUpdateUser.schema";
import { toast } from "react-toastify";
import { PosterContext } from "./posterContext";

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  userRegister: (userData: TRegisterData) => Promise<void>;
  login: (loginData: TLoginData) => Promise<void>;
  sellerProfile: () => Promise<any>;
  isSeller: boolean;
  successfullyCreated: boolean;
  setSuccessfullyCreated: Dispatch<SetStateAction<boolean>>;
  sendEmail: (email: TSendEmail) => Promise<void>;
  updatePassword: (newPassData: TNewPass) => Promise<void>;
  userLogout: () => void;
  user: IUser | null;
  seller: any | null;
  getInitials: (name: string | undefined) => string;
  excludeUser: (id: number | null) => void;
  updateUser: (data: iUpdateUser, idUser: number | null) => void
}

export interface IUser {
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


export const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [seller, setSeller] = useState<any | null>(null)
  const [isSeller, setIsSeller] = useState(false);
  const [successfullyCreated, setSuccessfullyCreated] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const storedUserId = localStorage.getItem("@USER_ID");
    const token = localStorage.getItem("@TOKEN");
    const userId = storedUserId ? parseInt(storedUserId) : null;


    if (userId && token) {
      retrieveUser(userId);
    }
  }, []);


  const userRegister = async (userData: TRegisterData): Promise<void> => {
    try {
      await ApiShop.post<IUser>("/users", userData);
      setSuccessfullyCreated(true);
    } catch (error) {
      const axiosError = error as AxiosError;
      toast.error(`Ops, algo deu errado! ${axiosError.message}`)
      console.log(axiosError.message);
    }
  };

  const retrieveUser = async (userId: number) => {
    try {
      const response = await ApiShop.get(`/users/${userId}`);
      const userData = response.data;

      return userData

    } catch (error) {
      console.log(error);
    }
  };

  const login = async (loginData: TLoginData): Promise<void> => {
    try {
      const response = await ApiShop.post<ILoginResponse>("/login", loginData);
      const { token } = response.data;

      const decodedToken = jwt_decode<{ id: number, is_seller: boolean }>(token)
      const userId = decodedToken.id;

      setIsSeller(decodedToken.is_seller)
      const userData = await retrieveUser(userId)
      setUser(userData);

      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@USER_ID", String(userId));

    } catch (error) {
      const axiosError = error as AxiosError;
      toast.error(`Ops, algo deu errado! ${axiosError.message}`)
      console.log(axiosError.message);
    } finally {
      toast.success("Login realizado com sucesso!")
      navigate("/", { replace: true });
    }
  };

  const sellerProfile = async (): Promise<void> => {
    try {
      const sellerId = searchParams.get('seller_id')

      if (sellerId) {
        const sellerRes = await retrieveUser(parseInt(sellerId))

        const allUsersPosters = await ApiShop.get(`/users/posters/${sellerId}`)

        setSeller({ ...sellerRes, posters: [...allUsersPosters.data] })
      } else {
        const allUsersPosters = await ApiShop.get(`/users/posters/${user?.id}`)

        setSeller({ ...user, posters: [...allUsersPosters.data] })
      }


    } catch (error) {
      console.log(error);
    }
    finally {
      // navigate("/", { replace: true });
    }
  };

  const updatePassword = async (newPassData: TNewPass): Promise<void> => {
    try {
      const reset_token = searchParams.get('reset_token')
      !reset_token && navigate("/", { replace: true });

      await ApiShop.post<TNewPass>(`/users/resetpassword?reset_token=${reset_token}`, newPassData)
    } catch (error) {
      console.log(error);
    }
    finally {
      navigate("/", { replace: true });
    }
  };

  const sendEmail = async (emailData: TSendEmail): Promise<void> => {
    try {
      await ApiShop.post<TSendEmail>("/users/sendemail", emailData);

    } catch (error) {
      console.log(error);
    }
    finally {
      navigate("/", { replace: true });
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER_ID");
    localStorage.removeItem("@USER_NAME");
    setIsSeller(false)
    setUser(null)
    navigate("/");
  };

  const getInitials = (name: string | undefined): string => {
    if (!name) return "";

    const names = name.split(" ");
    const initials = names.map((name) => name.charAt(0));
    return initials.join("");
  };

  const excludeUser = async (id: number | null) => {
    const token = localStorage.getItem("@TOKEN")

    await ApiShop.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  const updateUser = async (data: iUpdateUser, idUser: number | null) => {
    const token = localStorage.getItem("@TOKEN")

    await ApiShop.patch(`/users/${idUser}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  return (
    <UserContext.Provider
      value={{
        userRegister,
        login,
        sellerProfile,
        seller,
        isSeller,
        successfullyCreated,
        setSuccessfullyCreated,
        sendEmail,
        updatePassword,
        userLogout,
        user,
        getInitials,
        excludeUser,
        updateUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
