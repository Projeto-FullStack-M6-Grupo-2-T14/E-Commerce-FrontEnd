import { Link } from "react-router-dom"
import "./style.sass"
import { IoMdClose } from "react-icons/io"

const SuccessfullyCreatedModal = ({ closeModal }: { closeModal: () => void }) => {

    return (
        <div className="background">
            <div className="modal">
                <div className="header">
                    <h2 className="heading-7-500">Sucesso!</h2>
                    <IoMdClose onClick={closeModal}/>
                </div>
                <h1 className="heading-7-500">Sua conta foi criada com sucesso!</h1>
                <span className="body-1-400">Agora você poderá ver seus negócios crescendo em grande escala</span>
                <Link to={"/login"}> <button>Ir para o login</button> </Link>
            </div>
        </div>
    )
}

export default SuccessfullyCreatedModal