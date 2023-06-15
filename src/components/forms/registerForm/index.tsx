import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react"
import { TRegisterData, registerFormSchema } from "./registerFormSchema";
import "./style.sass";
import { UserContext } from "src/contexts/userContext";
import { Tooltip } from "react-tooltip";

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const { register, handleSubmit, formState: { errors } } = useForm<TRegisterData>({
    resolver: zodResolver(registerFormSchema),
  });

  const submit: SubmitHandler<TRegisterData> = (userData) => {
    userRegister(userData);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      
      <h1 className="heading-5-500">Cadastro</h1>
      <h4 className="body-2-500">Infomações pessoais</h4>

      <div className="input_box">
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
        <Tooltip id="name-tooltip" />
      </div>

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
        <Tooltip id="cpf-tooltip" />
      </div>

      <div className="input_box">
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
        <Tooltip id="phone-tooltip" />
      </div>

      <div className="input_box">
        <label htmlFor="birthday">Data de nascimento</label>
        <input 
        type="text" 
        placeholder="00/00/00" 
        id="birthday"
        autoComplete="given-birthday"
        {...register("birthday")}
        data-tooltip-id="birthday-tooltip"
        data-tooltip-content={errors.birthday ? errors.birthday.message : ""}
        data-tooltip-place="top"
        data-tooltip-float={true} 
        />
        <Tooltip id="birthday-tooltip" />
      </div>

      <div className="input_box">
        <label htmlFor="description">Descrição</label>
        <textarea placeholder="Digitar descrição" />
      </div>

      <h4 className="body-2-500">Infomações de endereço</h4>

      <div className="input_box">
        <label htmlFor="cep">CEP</label>
        <input
        type="text"
        placeholder="00000.000" 
        id="cep"
        autoComplete="given-cep"
        {...register("cep")}
        data-tooltip-id="cep-tooltip"
        data-tooltip-content={errors.cep ? errors.cep.message : ""}
        data-tooltip-place="top"
        data-tooltip-float={true} 
        />
        <Tooltip id="cep-tooltip" />
      </div>

      <div className="input_box">
        <div className="input_box_container">
          <div>
            <label htmlFor="state">Estado</label>
            <input
            type="text"
            placeholder="Digitar Estado" 
            id="state"
            autoComplete="given-state"
            {...register("state")}
            data-tooltip-id="state-tooltip"
            data-tooltip-content={errors.state ? errors.state.message : ""}
            data-tooltip-place="top"
            data-tooltip-float={true} 
            />
            <Tooltip id="state-tooltip" />
          </div>

          <div>
            <label htmlFor="city">Cidade</label>
            <input
            type="text"
            placeholder="Digitar Cidade" 
            id="city"
            autoComplete="given-city"
            {...register("city")}
            data-tooltip-id="city-tooltip"
            data-tooltip-content={errors.city ? errors.city.message : ""}
            data-tooltip-place="top"
            data-tooltip-float={true} 
            />
            <Tooltip id="city-tooltip" />
          </div>
        </div>
      </div>

      <div className="input_box">
        <label htmlFor="street">Rua</label>
        <input
        type="text"
        placeholder="Digitar Rua" 
        id="street"
        autoComplete="given-street"
        {...register("street")}
        data-tooltip-id="street-tooltip"
        data-tooltip-content={errors.street ? errors.street.message : ""}
        data-tooltip-place="top"
        data-tooltip-float={true} 
        />
        <Tooltip id="street-tooltip" />
      </div>

      <div className="input_box">
        <div className="input_box_container">
          <div>
            <label htmlFor="number">Número</label>
            <input 
            type="text"
            placeholder="Digitar número" 
            id="number"
            autoComplete="given-number"
            {...register("number")}
            data-tooltip-id="number-tooltip"
            data-tooltip-content={errors.number ? errors.number.message : ""}
            data-tooltip-place="top"
            data-tooltip-float={true} 
            />
            <Tooltip id="number-tooltip" />
          </div>

          <div>
            <label htmlFor="complement">Complemento</label>
            <input placeholder="Ex: apart 307" />
          </div>
        </div>
      </div>

      <div className="input_box">
        <label htmlFor="tipoConta">Tipo de Conta</label>
        <div className="input_box_container">
          <button className="btn_comprador">Comprador</button>
          <button className="btn_anunciante">Anunciante</button>
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
        data-tooltip-id="password-tooltip"
        data-tooltip-content={errors.password ? errors.password.message : ""}
        data-tooltip-place="top"
        data-tooltip-float={true} 
        />
        <Tooltip id="password-tooltip" />
      </div>

      <div className="input_box">
        <label htmlFor="password_confirm">Confirmar Senha</label>
        <input
        type="text"
        placeholder="Digitar senha"
        id="password_confirm"
        autoComplete="given-password_confirm"
        {...register("password_confirm")}
        data-tooltip-id="password_confirm-tooltip"
        data-tooltip-content={errors.password_confirm ? errors.password_confirm.message : ""}
        data-tooltip-place="top"
        data-tooltip-float={true} 
        />
        <Tooltip id="password_confirm-tooltip" />
      </div>

      <button className="btn_submit" type="submit">Finalizar cadastro</button>
    </form>
  );
};

export default RegisterForm;
