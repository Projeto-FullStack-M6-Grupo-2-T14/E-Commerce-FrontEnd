import styles from '../modalConfCreate/modalConfCreate.module.sass';
import style from '../modalCreate/modalCreate.module.sass'
import { AiOutlineClose } from 'react-icons/ai';
import { Dispatch, SetStateAction } from 'react';

interface iModalConfCreate {
    close_modal: Dispatch<SetStateAction<boolean>>,
}

const ModalConfUpdate = ({close_modal}: iModalConfCreate) => {
    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if(target.className.includes('container_modal')) {
            close_modal(false)
        }
    }

    return (
        <div className={style.container_modal} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => closeModal(event)}>
            <div className={styles.modal}>
                <div className={styles.container}>

                    <div className={styles.box_title}>
                        <h3 className='heading-6-600'>Sucesso!</h3>

                        <figure onClick={() => close_modal(false)}>
                            <AiOutlineClose size='30' className={styles.icon}/>
                        </figure>
                    </div>

                    <h2 className='heading-5-600'>Seu anúncio foi atualizado com sucesso!</h2>
                    <p className='heading-7-500'>Agora você poderá ver seus negócios crescendo em grande escala</p>

                </div>
            </div>
        </div>
    )
}

export default ModalConfUpdate