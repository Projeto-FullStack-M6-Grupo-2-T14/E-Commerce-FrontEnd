import { Dispatch, SetStateAction } from "react"
import styles from '../modalCreate/modalCreate.module.sass';
import style from './modalDelete.module.sass'
import { AiOutlineClose } from "react-icons/ai";

interface iModalDelete {
    close_modal: Dispatch<SetStateAction<boolean>>,
}

const ModalDelete = ({close_modal}: iModalDelete) => {
    function closeModal(element: string) {
        if(element.includes('container_modal')) {
            close_modal(false)
        }
    }

    return (
        <div className={styles.container_modal} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => closeModal(event.currentTarget.className)}>
            <div className={`${styles.modal} ${style.modal}`}>
                <div className={styles.container}>

                    <div className={styles.box_title}>
                        <h2 className='heading-6-600'>Excluir anúncio</h2>

                        <figure onClick={() => close_modal(false)}>
                            <AiOutlineClose size='30' className={styles.icon}/>
                        </figure>
                    </div>

                    <h3 className={`heading-7-600 ${style.title_conf}`}>Tem certeza que deseja remover este anúncio?</h3>
                    <p className={`heading-7-500 ${style.paragraph}`}>Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores.</p>

                    <div className={style.box_btns}>
                        <button className={`${style.btn_exit} body-2-500`} onClick={() => close_modal(false)}>Cancelar</button>
                        <button className={`${style.btn_conf} body-2-500`} onClick={() => close_modal(false)}>Sim, excluir anúncio</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete