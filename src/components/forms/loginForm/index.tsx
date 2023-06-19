import { useContext } from "react"
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { TLoginData, loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "src/contexts/userContext";
import { Tooltip } from "react-tooltip";

import styles from "./loginForm.module.sass";

const LoginForm = () => {
  const { login } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm<TLoginData>({
    resolver: zodResolver(loginFormSchema),
  });

  const submitLogin: SubmitHandler<TLoginData> = (loginData) => {
    login(loginData);
  };

  return (
    <form onSubmit={handleSubmit(submitLogin)}>

      <h1 className="heading-5-500">Login</h1>


      <div className={styles.inputBox}>
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


      <div className={styles.inputBox}>
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

      <button className={styles.btnRegister} type="submit">Entrar</button>

      <p>Ainda não possui conta?</p>

      <Link to="/register">Cadastrar</Link>

    </form>
  );
};

export default LoginForm;
