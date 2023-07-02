import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "src/contexts/userContext";
import { Tooltip } from "react-tooltip";
import { TNewPass, newPassSchema } from "./newPasswordSchema";

import styles from "./newPassword.module.sass";
import { FiEye, FiEyeOff } from "react-icons/fi";

const NewPasswordPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { updatePassword } = useContext(UserContext)

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
          <div className={styles.passwordInput}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digitar senha"
              id="newPass"
              autoComplete="given-newPass"
              {...register("newPass")}
              data-tooltip-id="newPass-tooltip"
              data-tooltip-content={
                errors.newPass ? errors.newPass.message : ""
              }
              data-tooltip-place="top"
              data-tooltip-float={true}
            />
            {showPassword ? (
              <FiEyeOff onClick={() => setShowPassword(false)} />
            ) : (
              <FiEye onClick={() => setShowPassword(true)} />
            )}
          </div>
          <Tooltip id="newPass-tooltip" className={styles.tooltip} />
        </div>

        <div className={styles.inputBox}>
          <label htmlFor="confirmNewPass">Confirmar nova senha</label>
          <div className={styles.passwordInput}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Digitar senha"
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
            <Tooltip id="confirmNewPass-tooltip" className={styles.tooltip} />
            {showConfirmPassword ? (
              <FiEyeOff onClick={() => setShowConfirmPassword(false)} />
            ) : (
              <FiEye onClick={() => setShowConfirmPassword(true)} />
            )}
          </div>
          <Tooltip id="confirmNewPass-tooltip" className={styles.tooltip} />
        </div>

        <button type="submit" className={styles.btnUpdate}>
          Alterar
        </button>
      </form>
    </main >
  );
};

export default NewPasswordPage;
