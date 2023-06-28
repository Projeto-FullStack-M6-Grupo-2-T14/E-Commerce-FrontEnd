import style from './modalUpdateUser.module.sass';
import styles from '../modalCreate/modalCreate.module.sass';
import { Dispatch, SetStateAction, useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserContext } from 'src/contexts/userContext';
import { iUpdateUser, updateUserSchema } from './modalUpdateUser.schema';
import { useNavigate } from "react-router-dom";


interface iModalUpdateUser {
    close_modal: Dispatch<SetStateAction<boolean>>,
    open_modal: Dispatch<SetStateAction<boolean>>,
    userId: string
}

const ModalUpdateUser = ({close_modal, open_modal, userId}: iModalUpdateUser) => {
    const { updateUser, excludeUser } = useContext(UserContext)
    const navigate = useNavigate()

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if(target.className.includes('container_modal')) {
            close_modal(false)
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<iUpdateUser>({
        resolver: zodResolver(updateUserSchema),
    });

    const submitUpdateUser: SubmitHandler<iUpdateUser> = (userData: iUpdateUser) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const data = Object.fromEntries(Object.entries(userData).filter(([_, v]) => v != null && v !== ""))
        updateUser(data, userId)
        close_modal(false)
    };

    const submitDeleteUser = () => {
        localStorage.removeItem("@TOKEN")
        localStorage.removeItem("@USER_ID")       
        excludeUser(userId)
        close_modal(false)
        navigate("/")
    }

    return (
        <div className={styles.container_modal} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => closeModal(event)}>
            <div className={styles.modal}>
                <div className={styles.container}>

                    <div className={styles.box_title}>
                        <h2 className='heading-6-600'>Editar perfil</h2>

                        <figure onClick={() => close_modal(false)}>
                            <AiOutlineClose size='30' className={styles.icon}/>
                        </figure>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(submitUpdateUser)}>
                        <h3 className='heading-7-600'>Informações pessoais</h3>

                        <div className={styles.box_input_med}>
                            <label htmlFor="name" className={`heading-7-500 ${styles.label_med}`}>Nome</label>
                            <input type="text" placeholder="Junior Santos" id="name" className={`${styles.input_med} heading-7-500`} {...register('name')}/>
                            { errors.name?.message ? <span className={styles.span_error}>{ errors.name.message }</span> : null }
                        </div>

                        <div className={styles.box_input_med}>
                            <label htmlFor="email" className={`heading-7-500 ${styles.label_med}`}>Email</label>
                            <input type="email" placeholder="junior@mail.com" id="email" className={`${styles.input_med} heading-7-500`} {...register('email')}/>
                            { errors.email?.message ? <span className={styles.span_error}>{ errors.email.message }</span> : null }
                        </div>

                        <div className={styles.box_input_med}>
                            <label htmlFor="cpf" className={`heading-7-500 ${styles.label_med}`}>CPF</label>
                            <input type="text" placeholder="900.880.090-00" id="cpf" className={`${styles.input_med} heading-7-500`} {...register('cpf')}/>
                        </div>

                        <div className={styles.box_text}>
                            <label htmlFor="description" className='heading-7-500'>Descrição</label>
                            <textarea id="description" placeholder='Descrição do usuário' className='heading-7-500' {...register('description')}></textarea>
                            { errors.description?.message ? <span className={styles.span_error}>{ errors.description.message }</span> : null }
                        </div>

                        <button className={`${style.btn_add} body-2-500`} style={{fontWeight: 600}} type='button' onClick={() => {
                            close_modal(false)
                            open_modal(true)
                        }}>Editar endereço</button>

                        <div className={style.box_btns}>
                            <button className={`${style.btn_exit} body-2-500`} onClick={() => close_modal(false)}>Cancelar</button>
                            <button className={`${style.btn_exclude} body-2-500`} onClick={() => submitDeleteUser()}>Excluir perfil</button>
                            <button className={`${style.btn_save} body-2-500`} type='submit'>Salvar alterações</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>    )
}

export default ModalUpdateUser