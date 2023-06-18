import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { UserContext } from "src/contexts/userContext";
import { Tooltip } from "react-tooltip";
import { TLoginData, loginFormSchema } from "./loginFormSchema";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./style.sass";

const LoginForm = () => {
  const { login } = useContext(UserContext);
  const [showPassword, setShowPassword ] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<TLoginData>({
    resolver: zodResolver(loginFormSchema),
  });

  const submitLogin: SubmitHandler<TLoginData> = (loginData) => {
    login(loginData);
  };

  return (
    <form onSubmit={handleSubmit(submitLogin)}>

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
        <div className="password_input">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Digitar senha"
            id="password"
            autoComplete="given-password"
            {...register("password")}
            data-tooltip-id="password-tooltip"
            data-tooltip-content={errors.password ? errors.password.message : ""}
            data-tooltip-place="top"
            data-tooltip-float={true}
          />
          {showPassword ? (
            <FiEyeOff onClick={() => setShowPassword(false)} />
          ) : (
            <FiEye onClick={() => setShowPassword(true)} />
          )}
        </div>
      </div>

      <button className="btn_register" type="submit">Entrar</button>

      <p>Ainda não possui conta?</p>

      <Link to="/register">Cadastrar</Link>

    </form>
  );
};

export default LoginForm;
