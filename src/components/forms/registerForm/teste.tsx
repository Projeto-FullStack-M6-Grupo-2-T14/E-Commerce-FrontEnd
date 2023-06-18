import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginData } from "../loginForm/loginFormSchema";

export const TesteRegister = () => {
    const [isSeller, setIsSeller] = useState(false);
  
    const { register, handleSubmit } = useForm<TLoginData>({
      
    });
  
    const submitRegister: SubmitHandler<TLoginData> = (userData) => {
      console.log(userData)
      console.log(isSeller)
    };
  
    return (
      <form onSubmit={handleSubmit(submitRegister)}>
        <h1 className="heading-5-500">Cadastro</h1>
        <h4 className="body-2-500">Infomações pessoais</h4>
  
  
        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Ex: samuel@kenzie.com.br"
            id="email"
            autoComplete="given-email"
            {...register("email")}
          />
        </div>
  
        <div className="input_box">
          <label htmlFor="tipoConta">Tipo de Conta</label>
          <div className="input_box_container">
            <button
              className={`btn_comprador ${isSeller === false ? "selected" : ""}`}
              onClick={() => setIsSeller(false)}
              type="button"
            >
              Comprador
            </button>
            <button
              className={`btn_anunciante ${isSeller === true ? "selected" : ""}`}
              onClick={() => setIsSeller(true)}
              type="button"
            >
              Anunciante
            </button>
          </div>
        </div>
  
        <div className="input_box">
          <label htmlFor="password">Senha</label>
          <input
            type="text"
            placeholder="Digitar senha"
            id="password"
            autoComplete="given-password"
            {...register("password")}
          />
        </div>
  
  
        <button className="btn_register" type="submit">
          Finalizar cadastro
        </button>
      </form>
    );
  };
  