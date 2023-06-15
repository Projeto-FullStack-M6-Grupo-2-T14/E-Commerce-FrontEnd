import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react"
import "./style.sass";
import { UserContext } from "src/contexts/userContext";
import { Tooltip } from "react-tooltip";
import { TLoginData, loginFormSchema } from "./loginFormSchema";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { login } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm<TLoginData>({
    resolver: zodResolver(loginFormSchema),
  });

  const submit: SubmitHandler<TLoginData> = (loginData) => {
    login(loginData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      
      <h1 className="heading-5-500">Login</h1>


      <div className="input_box">
        <label htmlFor="email">Email</label>
        <input
        type="text"
        placeholder="Ex: samuel@kenzie.com.br"
        id="email"
        autoComplete="given-email"
        {...register("email")}
        data-tooltip-id="email-tooltip"
        data-tooltip-content={errors.email ? errors.email.message : ""}
        data-tooltip-place="top"
        data-tooltip-float={true} 
        />
        <Tooltip id="email-tooltip" />
      </div>


      <div className="input_box">
        <label htmlFor="password">Senha</label>
        <input
        type="text"
        placeholder="Digitar senha"
        id="password"
        autoComplete="given-password"
        {...register("password")}
        data-tooltip-id="password-tooltip"
        data-tooltip-content={errors.password ? errors.password.message : ""}
        data-tooltip-place="top"
        data-tooltip-float={true} 
        />
        <Tooltip id="password-tooltip" />
        <span>Esqueci minha senha</span>
      </div>

      <button className="btn_submit" type="submit">Entrar</button>

      <p>Ainda não possui conta?</p>

      <Link to="/register">Cadastrar</Link>

    </form>
  );
};

export default LoginForm;
