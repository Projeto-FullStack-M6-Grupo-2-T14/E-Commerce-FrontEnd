import { Link } from "react-router-dom"
import { IoMdClose } from "react-icons/io"

import styles from "./successModal.module.sass"

const SuccessfullyCreatedModal = ({ closeModal }: { closeModal: () => void }) => {
    return (
        <div className={styles.background}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2 className="heading-7-500">Sucesso!</h2>
                    <IoMdClose onClick={closeModal} />
                </div>
                <h1 className="heading-7-500">Sua conta foi criada com sucesso!</h1>
                <span className="body-1-400">Agora você poderá ver seus negócios crescendo em grande escala</span>
                <Link to={"/login"}> <button>Ir para o login</button> </Link>
            </div>
        </div>
    )
}

export default SuccessfullyCreatedModal