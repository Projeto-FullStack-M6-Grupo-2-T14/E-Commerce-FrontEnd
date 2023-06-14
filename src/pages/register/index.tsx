import { useState } from "react";
import Header from "src/components/home/header"
import "./style.sass"


const RegisterPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    return (
        <>
        <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <main>

            <form>
                <h1 className="heading-5-500">Cadastro</h1>
                <h4 className="body-2-500">Infomações pessoais</h4>

                <div className="input_box">
                    <label htmlFor="name">Nome</label>
                    <input type="text" placeholder="Ex: Samuel Leão"/>
                </div>
                <div className="input_box">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Ex: samuel@kenzie.com.br"/>
                </div>
                <div className="input_box">
                    <label htmlFor="cpf">CPF</label>
                    <input type="text" placeholder="000.000.000-00"/>
                </div>
                <div className="input_box">
                    <label htmlFor="phone">Celular</label>
                    <input type="text" placeholder="(DDD) 90000-0000"/>
                </div>
                <div className="input_box">
                    <label htmlFor="birthdate">Data de nascimento</label>
                    <input type="text" placeholder="00/00/00"/>
                </div>
                <div className="input_box">
                    <label htmlFor="description">Descrição</label>
                    <textarea placeholder="Digitar descrição"/>
                </div>

                <h4 className="body-2-500">Infomações de endereço</h4>

                <div className="input_box">
                    <label htmlFor="cep">CEP</label>
                    <input placeholder="00000.000"/>
                </div>

                <div className="input_box">
                    <div className="input_box_container">
                        <div>
                            <label htmlFor="state">Estado</label>
                            <input placeholder="Digitar Estado"/>
                        </div>
                        <div>
                            <label htmlFor="city">Cidade</label>
                            <input placeholder="Digitar Cidade"/>
                        </div>
                    </div>
                </div>

                <div className="input_box">
                    <label htmlFor="street">Rua</label>
                    <input placeholder="Digitar Rua"/>
                </div>

                <div className="input_box">
                    <div className="input_box_container">
                        <div>
                            <label htmlFor="number">Número</label>
                            <input placeholder="Digitar número"/>
                        </div>
                        <div>
                            <label htmlFor="complement">Complemento</label>
                            <input placeholder="Ex: apart 307"/>
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
                    <input placeholder="Digitar senha"/>
                </div>

                <div className="input_box">
                    <label htmlFor="confirm_password">Confirmar Senha</label>
                    <input placeholder="Digitar senha"/>
                </div>

                <button className="btn_submit">Finalizar cadastro</button>
            </form>

        </main>
        </>
    )
}

export default RegisterPage