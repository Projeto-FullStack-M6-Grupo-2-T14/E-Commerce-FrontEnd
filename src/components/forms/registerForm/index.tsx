import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Tooltip } from "react-tooltip";
import { UserContext } from "src/contexts/userContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiEye, FiEyeOff } from "react-icons/fi";

import styles from "./registerForm.module.sass";
import { TRegisterData, registerFormSchema } from "./registerFormSchema";


const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);
  const [isSeller, setIsSeller] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<TRegisterData>({
    resolver: zodResolver(registerFormSchema),
  });

  const submitRegister: SubmitHandler<TRegisterData> = (userData) => {
    userData.is_seller = isSeller;
    userRegister(userData);
  };

  return (
    <form onSubmit={handleSubmit(submitRegister)}>
      <h1 className="heading-5-500">Cadastro</h1>
      <h4 className="body-2-500">Infomações pessoais</h4>

      <div className={styles.inputBox}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Ex: Samuel Leão"
          id="name"
          autoComplete="given-name"
          {...register("name")}
          data-tooltip-id="name-tooltip"
          data-tooltip-content={errors.name ? errors.name.message : ""}
          data-tooltip-place="top"
          data-tooltip-float={true}
        />
        <Tooltip id="name-tooltip" className={styles.tooltip}/>
      </div>

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
        <Tooltip id="email-tooltip" className={styles.tooltip}/>
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          placeholder="000.000.000-00"
          id="cpf"
          autoComplete="given-cpf"
          {...register("cpf")}
          data-tooltip-id="cpf-tooltip"
          data-tooltip-content={errors.cpf ? errors.cpf.message : ""}
          data-tooltip-place="top"
          data-tooltip-float={true}
        />
        <Tooltip id="cpf-tooltip" className={styles.tooltip}/>
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="phone">Celular</label>
        <input
          type="text"
          placeholder="(DDD) 90000-0000"
          id="phone"
          autoComplete="given-phone"
          {...register("phone")}
          data-tooltip-id="phone-tooltip"
          data-tooltip-content={errors.phone ? errors.phone.message : ""}
          data-tooltip-place="top"
          data-tooltip-float={true}
        />
        <Tooltip id="phone-tooltip" className={styles.tooltip}/>
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="birthday">Data de nascimento</label>
        <input
          type="date"
          placeholder="00/00/00"
          id="birthday"
          autoComplete="given-birthday"
          {...register("birthday")}
          data-tooltip-id="birthday-tooltip"
          data-tooltip-content={errors.birthday ? errors.birthday.message : ""}
          data-tooltip-place="top"
          data-tooltip-float={true}
        />
        <Tooltip id="birthday-tooltip" className={styles.tooltip}/>
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="description">Descrição</label>
        <textarea
          placeholder="Digitar descrição"
          {...register("description")}
        />
      </div>

      <h4 className="body-2-500">Infomações de endereço</h4>

      <div className={styles.inputBox}>
        <label htmlFor="zipcode">CEP</label>
        <input
          type="text"
          placeholder="00000.000"
          id="zipcode"
          autoComplete="given-zipcode"
          {...register("address.zipcode")}
          data-tooltip-id="zipcode-tooltip"
          data-tooltip-content={
            errors.address?.zipcode ? errors.address.zipcode.message : ""
          }
          data-tooltip-place="top"
          data-tooltip-float={true}
        />
        <Tooltip id="zipcode-tooltip" className={styles.tooltip}/>
      </div>

      <div className={styles.inputBox}>
        <div className={styles.inputBoxContainer}>
          <div>
            <label htmlFor="state">Estado</label>
            <input
              type="text"
              placeholder="Digitar Estado"
              id="state"
              autoComplete="given-state"
              {...register("address.state")}
              data-tooltip-id="state-tooltip"
              data-tooltip-content={
                errors.address?.state ? errors.address.state.message : ""
              }
              data-tooltip-place="top"
              data-tooltip-float={true}
            />
            <Tooltip id="state-tooltip" className={styles.tooltip}/>
          </div>

          <div>
            <label htmlFor="city">Cidade</label>
            <input
              type="text"
              placeholder="Digitar Cidade"
              id="city"
              autoComplete="given-city"
              {...register("address.city")}
              data-tooltip-id="city-tooltip"
              data-tooltip-content={
                errors.address?.city ? errors.address.city.message : ""
              }
              data-tooltip-place="top"
              data-tooltip-float={true}
            />
            <Tooltip id="city-tooltip" className={styles.tooltip}/>
          </div>
        </div>
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="street">Rua</label>
        <input
          type="text"
          placeholder="Digitar Rua"
          id="street"
          autoComplete="given-street"
          {...register("address.street")}
          data-tooltip-id="street-tooltip"
          data-tooltip-content={
            errors.address?.street ? errors.address.street.message : ""
          }
          data-tooltip-place="top"
          data-tooltip-float={true}
        />
        <Tooltip id="street-tooltip" className={styles.tooltip}/>
      </div>

      <div className={styles.inputBox}>
        <div className={styles.inputBoxContainer}>
          <div>
            <label htmlFor="number">Número</label>
            <input
              type="text"
              placeholder="Digitar número"
              id="number"
              autoComplete="given-number"
              {...register("address.number")}
              data-tooltip-id="number-tooltip"
              data-tooltip-content={
                errors.address?.number ? errors.address.number.message : ""
              }
              data-tooltip-place="top"
              data-tooltip-float={true}
            />
            <Tooltip id="number-tooltip" className={styles.tooltip}/>
          </div>

          <div>
            <label htmlFor="complement">Complemento</label>
            <input
              placeholder="Ex: apart 307"
              {...register("address.complement")}
            />
          </div>
        </div>
      </div>

      <div className={styles.inputBox}>
        <label htmlFor="tipoConta">Tipo de Conta</label>
        <div className={styles.inputBoxContainer}>
          <button
            className={`${styles.btnComprador} ${isSeller === false ? styles.selected : ""}`}
            onClick={() => setIsSeller(false)}
            type="button"
          >
            Comprador
          </button>
          <button
            className={`${styles.btnAnunciante} ${isSeller === true ? styles.selected : ""}`}
            onClick={() => setIsSeller(true)}
            type="button"
          >
            Anunciante
          </button>
        </div >
      </div >

      <div className={styles.inputBox}>
        <label htmlFor="password">Senha</label>
        <div className={styles.passwordInputRegister}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Digitar senha"
            id="password"
            autoComplete="given-password"
            {...register("password")}
            data-tooltip-id="password-tooltip"
            data-tooltip-content={
              errors.password ? errors.password.message : ""
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
        <Tooltip id="password-tooltip" className={styles.tooltip}/>
      </div >

      <div className={styles.inputBox}>
        <label htmlFor="password_confirm">Confirmar Senha</label>
        <div className={styles.passwordInputRegister}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Digitar senha"
            id="password_confirm"
            autoComplete="given-password_confirm"
            {...register("password_confirm")}
            data-tooltip-id="password_confirm-tooltip"
            data-tooltip-content={
              errors.password_confirm ? errors.password_confirm.message : ""
            }
            data-tooltip-place="top"
            data-tooltip-float={true}
          />
          <Tooltip id="password_confirm-tooltip" className={styles.tooltip}/>
          {showConfirmPassword ? (
            <FiEyeOff onClick={() => setShowConfirmPassword(false)} />
          ) : (
            <FiEye onClick={() => setShowConfirmPassword(true)} />
          )}
        </div>
        <Tooltip id="password_confirm-tooltip" className={styles.tooltip}/>
      </div>
      <button className={styles.btnRegister} type="submit">
        Finalizar cadastro
      </button>
    </form >
  );
};

export default RegisterForm;
