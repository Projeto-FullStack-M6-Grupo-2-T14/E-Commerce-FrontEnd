import style from './modalUpdateAddress.module.sass';
import styles from '../modalCreate/modalCreate.module.sass';
import { Dispatch, SetStateAction, useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { iUpdateAddress, updateAddressSchema } from './modalUpdateAddress.schema';
import { AddressContext } from 'src/contexts/addressContext';


interface iModalUpdateAddress {
    close_modal: Dispatch<SetStateAction<boolean>>,
    userId: number | null
}

const ModalUpdateAddress = ({ close_modal, userId }: iModalUpdateAddress) => {
    const { updateAddress } = useContext(AddressContext)

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if (target.className.includes('container_modal')) {
            close_modal(false)
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<iUpdateAddress>({
        resolver: zodResolver(updateAddressSchema),
    });

    const submitUpdateAddress: SubmitHandler<iUpdateAddress> = (addressData: iUpdateAddress) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const data = Object.fromEntries(Object.entries(addressData).filter(([_, v]) => v != null && v !== ""))
        updateAddress(data, userId)
        close_modal(false)
    };

    return (
        <div className={styles.container_modal} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => closeModal(event)}>
            <div className={styles.modal}>
                <div className={styles.container}>

                    <div className={styles.box_title}>
                        <h2 className='heading-6-600'>Editar endereço</h2>

                        <figure onClick={() => close_modal(false)}>
                            <AiOutlineClose size='30' className={styles.icon} />
                        </figure>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(submitUpdateAddress)}>
                        <h3 className='heading-7-600'>Informações de endereço</h3>

                        <div className={styles.box_input_med}>
                            <label htmlFor="zipcode" className={`heading-7-500 ${styles.label_med}`}>CEP</label>
                            <input type="text" placeholder="88888.888" id="zipcode" className={`${styles.input_med} heading-7-500`} {...register('zipcode')} />
                            {errors.zipcode?.message ? <span className={styles.span_error}>{errors.zipcode.message}</span> : null}
                        </div>


                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="state" className='heading-7-500'>Estado</label>
                                <input type="text" placeholder="Paraná" id="state" className='heading-7-500' {...register('state')} />
                                {errors.state?.message ? <span className={styles.span_error}>{errors.state.message}</span> : null}
                            </div>
                            <div className={styles.box_input_small}>
                                <label htmlFor="city" className='heading-7-500'>Cidade</label>
                                <input type="text" placeholder="Curitiba" id="city" className='heading-7-500' {...register('city')} />
                                {errors.city?.message ? <span className={styles.span_error}>{errors.city.message}</span> : null}
                            </div>
                        </div>

                        <div className={styles.box_input_med}>
                            <label htmlFor="street" className={`heading-7-500 ${styles.label_med}`}>Rua</label>
                            <input type="text" placeholder="Rua do paraná" id="street" className={`${styles.input_med} heading-7-500`} {...register('street')} />
                            {errors.street?.message ? <span className={styles.span_error}>{errors.street.message}</span> : null}
                        </div>


                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="number" className='heading-7-500'>Número</label>
                                <input type="text" placeholder="1029" id="number" className='heading-7-500' {...register('number')} />
                                {errors.number?.message ? <span className={styles.span_error}>{errors.number.message}</span> : null}
                            </div>
                            <div className={styles.box_input_small}>
                                <label htmlFor="complement" className='heading-7-500'>Complemento</label>
                                <input type="text" placeholder="Apart 12" id="complement" className='heading-7-500' {...register('complement')} />
                                {errors.complement?.message ? <span className={styles.span_error}>{errors.complement.message}</span> : null}
                            </div>
                        </div>

                        <div className={style.box_btns} style={{ gap: '15px', display: 'flex', justifyContent: 'flex-end', marginTop: '5%' }}>
                            <button className={`${style.btn_exit} body-2-500`} onClick={() => close_modal(false)}>Cancelar</button>
                            <button className={`${style.btn_save} body-2-500`} type='submit'>Salvar alterações</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>)
}

export default ModalUpdateAddress