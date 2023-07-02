import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { Tooltip } from "react-tooltip";
import { TSendEmail, sendEmailSchema } from "./sendEmailSchema";
import styles from "./sendEmail.module.sass";

import { useContext } from "react";
import { UserContext } from "src/contexts/userContext";


const SendEmailPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<TSendEmail>({
    resolver: zodResolver(sendEmailSchema),
  });

  const { sendEmail } = useContext(UserContext)
  const submit: SubmitHandler<TSendEmail> = (emailData) => {
    sendEmail(emailData)

  };

  return (
    <main>
      <form onSubmit={handleSubmit(submit)}>
        <h1 className="heading-5-500">Alteração de Senha</h1>
        <div className={styles.inputBox}>
          <label htmlFor="email">Ensira seu email de cadastro</label>
          <input
            type="text"
            placeholder="Digite seu email cadastrado aqui"
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

        <button type="submit" className={styles.btnUpdate}>
          Enviar
        </button>
      </form>
    </main>
  );
};

export default SendEmailPage;
