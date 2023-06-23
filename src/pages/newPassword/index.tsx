import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "src/contexts/userContext";
import { Tooltip } from "react-tooltip";
import { TNewPass, newPassSchema } from "./newPasswordSchema";

import styles from "./newPassword.module.sass";

const NewPasswordPage = () => {
  const { updatePassword } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm<TNewPass>({
    resolver: zodResolver(newPassSchema),
  });

  const submitNewPass: SubmitHandler<TNewPass> = (newPassData) => {
    updatePassword(newPassData);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(submitNewPass)}>
        <h1 className="heading-5-500">Alteração de Senha</h1>

        <div className={styles.inputBox}>
          <label htmlFor="newPass">Nova Senha</label>
          <input
            type="text"
            placeholder="Digite uma nova senha aqui"
            id="newPass"
            autoComplete="given-newPass"
            {...register("newPass")}
            data-tooltip-id="newPass-tooltip"
            data-tooltip-content={errors.newPass ? errors.newPass.message : ""}
            data-tooltip-place="top"
            data-tooltip-float={true}
          />
          <Tooltip id="newPass-tooltip" />
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="confirmNewPass">Confirmar nova senha</label>
          <input
            type="text"
            placeholder="Repita a senha aqui"
            id="confirmNewPass"
            autoComplete="given-confirmNewPass"
            {...register("confirmNewPass")}
            data-tooltip-id="confirmNewPass-tooltip"
            data-tooltip-content={
              errors.confirmNewPass ? errors.confirmNewPass.message : ""
            }
            data-tooltip-place="top"
            data-tooltip-float={true}
          />
          <Tooltip id="confirmNewPass-tooltip" />
        </div>

        <button type="submit" className={styles.btnUpdate}>
          Alterar
        </button>
      </form>
    </main>
  );
};

export default NewPasswordPage;
