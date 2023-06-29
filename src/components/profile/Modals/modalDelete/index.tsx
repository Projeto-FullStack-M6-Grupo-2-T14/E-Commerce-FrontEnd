import { Dispatch, SetStateAction, useContext } from "react"
import styles from '../modalCreate/modalCreate.module.sass';
import style from './modalDelete.module.sass'
import { AiOutlineClose } from "react-icons/ai";
import { PosterContext } from "src/contexts/posterContext";

interface iModalDelete {
    close_modal: Dispatch<SetStateAction<boolean>>,
    cardId: string,
}

const ModalDelete = ({close_modal, cardId}: iModalDelete) => {
    const { excludePoster } = useContext(PosterContext)

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if(target.className.includes('container_modal')) {
            close_modal(false)
        }
    }

    function confExclude() {
        excludePoster(cardId)
        close_modal(false)
    }

    return (
        <div className={styles.container_modal} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => closeModal(event)}>
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
                        <button id="150" className={`${style.btn_conf} body-2-500`} onClick={() => confExclude()}>Sim, excluir anúncio</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete