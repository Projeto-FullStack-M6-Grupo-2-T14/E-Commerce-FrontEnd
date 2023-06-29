import style from './modalUpdate.module.sass';
import styles from '../modalCreate/modalCreate.module.sass';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import InputImg from '../modalCreate/inputImg';
import { iUpdatePoster, updatePosterSchema } from './modalUpdate.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PosterContext } from 'src/contexts/posterContext';

interface iModalUpdate {
    close_modal: Dispatch<SetStateAction<boolean>>,
    open_modal: Dispatch<SetStateAction<boolean>>,
    open_exclude: Dispatch<SetStateAction<boolean>>,
    cardId: string
}

const ModalUpdate = ({close_modal, open_modal, open_exclude, cardId}: iModalUpdate) => {
    const [countImg, setCountImg] = useState(2)
    const [activePubButton, setActivePubButton] = useState(true)
    const { updatePosterAndImgs } = useContext(PosterContext)

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if(target.className.includes('container_modal')) {
            close_modal(false)
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<iUpdatePoster>({
        resolver: zodResolver(updatePosterSchema),
    });

    const submitUpdatePoster: SubmitHandler<iUpdatePoster> = (posterData: iUpdatePoster) => {
        posterData.is_active = !activePubButton
        updatePosterAndImgs(posterData, cardId)
        close_modal(true)
        open_modal(false)      
    };

    return (
        <div className={styles.container_modal} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => closeModal(event)}>
            <div className={styles.modal}>
                <div className={styles.container}>

                    <div className={styles.box_title}>
                        <h2 className='heading-6-600'>Editar anúncio</h2>

                        <figure onClick={() => close_modal(false)}>
                            <AiOutlineClose size='30' className={styles.icon}/>
                        </figure>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(submitUpdatePoster)}>
                        <h3 className='heading-7-600'>Informações do veículo</h3>

                        <div className={styles.box_input_med}>
                            <label htmlFor="brand" className={`heading-7-500 ${styles.label_med}`}>Marca</label>
                            <input type="text" placeholder="Mercedes Benz" id="brand" className={`${styles.input_med} heading-7-500`} {...register('brand')}/>
                            { errors.brand?.message ? <span className={styles.span_error}>{ errors.brand.message }</span> : null }
                        </div>

                        <div className={styles.box_input_med}>
                            <label htmlFor="model" className={`heading-7-500 ${styles.label_med}`}>Modelo</label>
                            <input type="text" placeholder="A 200 CGI ADVANCE SEDAN" id="model" className={`${styles.input_med} heading-7-500`} {...register('model')}/>
                            { errors.model?.message ? <span className={styles.span_error}>{ errors.model.message }</span> : null }
                        </div>

                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="year" className='heading-7-500'>Ano</label>
                                <input type="text" placeholder="2018" id="year" className='heading-7-500' {...register('year')}/>
                                { errors.year?.message ? <span className={styles.span_error}>{ errors.year.message }</span> : null }
                            </div>
                            <div className={styles.box_input_small}>
                                <label htmlFor="fuel" className='heading-7-500'>Combustível</label>
                                <input type="text" placeholder="Gasolina / Etanol" id="fuel" className='heading-7-500' {...register('fuel')}/>
                                { errors.fuel?.message ? <span className={styles.span_error}>{ errors.fuel.message }</span> : null }
                            </div>
                        </div>


                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="mileage" className='heading-7-500'>Quilometragem</label>
                                <input type="text" placeholder="30.000" id="mileage" className='heading-7-500' {...register('mileage')}/>                               
                                { errors.mileage?.message ? <span className={styles.span_error}>{ errors.mileage.message }</span> : null }
                            </div>

                            <div className={styles.box_input_small}>
                                <label htmlFor="color" className='heading-7-500'>Cor</label>
                                <input type="text" placeholder="Branco" id="color" className='heading-7-500' {...register('color')}/>
                                { errors.color?.message ? <span className={styles.span_error}>{ errors.color.message }</span> : null }
                            </div>
                        </div>

                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="priceFIPE" className='heading-7-500'>Preço tabela FIPE</label>
                                <input type="text" placeholder="R$ 48.000,00" id="priceFIPE" className='heading-7-500' {...register('fipe_price')}/>
                                { errors.fipe_price?.message ? <span className={styles.span_error}>{ errors.fipe_price.message }</span> : null }
                            </div>
                            <div className={styles.box_input_small}>
                                <label htmlFor="price" className='heading-7-500'>Preço</label>
                                <input type="text" placeholder="Branco" id="price" className='heading-7-500' {...register('price')}/>
                                { errors.price?.message ? <span className={styles.span_error}>{ errors.price.message }</span> : null }
                            </div>
                        </div>

                        <div className={styles.box_text}>
                            <label htmlFor="description" className='heading-7-500'>Descrição</label>
                            <textarea id="description" placeholder='Descrição do veículo' className='heading-7-500' {...register('description')}></textarea>
                            { errors.description?.message ? <span className={styles.span_error}>{ errors.description.message }</span> : null }
                        </div>

                        <div className={style.box_pub}>
                            <h4 className='heading-7-600'>Publicado</h4>

                            <div>
                                <button onClick={() => setActivePubButton(false)} className={`${style.btn_yes} body-2-500`} type='button' style={activePubButton === false ? {backgroundColor: '#4529E6', color: 'white', border: '2px solid #4529E6'} : {}}>Sim</button>
                                <button onClick={() => setActivePubButton(true)} className={`${style.btn_not}`} type='button' style={activePubButton === true ? {backgroundColor: '#4529E6', color: 'white', border: '2px solid #4529E6'} : {}}>Não</button>
                            </div>
                        </div>

                        <div className={styles.box_input_med}>
                            <label htmlFor="img_cover" className={`heading-7-500 ${styles.label_med}`}>Imagem da capa</label>
                            <input type="text" placeholder="https://image.com" id="img_cover" className={`${styles.input_med} heading-7-500`} {...register('cover_image')}/>
                        </div>

                        <div className={styles.box_imgs}>
                            <InputImg number={1} str='image_one' registerImg={register}/>
                            { errors.image_one?.message ? <span className={styles.span_error}>{ errors.image_one.message }</span> : null }
                            <InputImg number={2} str='image_two' registerImg={register}/>
                            { errors.image_two?.message ? <span className={styles.span_error}>{ errors.image_two.message }</span> : null }
                            { countImg > 2 ? <InputImg number={3} str='image_three' registerImg={register}/> : null }
                            { countImg > 3 ? <InputImg number={4} str='image_four' registerImg={register}/> : null }
                            { countImg > 4 ? <InputImg number={5} str='image_five' registerImg={register}/> : null }
                            { countImg > 5 ? <InputImg number={6} str='image_six' registerImg={register}/> : null }
                            { countImg > 6 ? <InputImg number={7} str='image_seven' registerImg={register}/> : null }
                            { countImg > 7 ? <InputImg number={8} str='image_eigth' registerImg={register}/> : null }
                            { countImg > 8 ? <InputImg number={9} str='image_nine' registerImg={register}/> : null }
                            { countImg > 9 ? <InputImg number={10} str='image_ten' registerImg={register}/> : null }
                        </div>

                        <button className={`${styles.btn_add} body-2-500`} type='button' onClick={() => countImg < 10 ? setCountImg(countImg + 1) : setCountImg(10)}>Adicionar campo para imagem da galeria</button>

                        <div className={style.box_btns}>
                            <button className={`${style.btn_exclude} body-2-500`} onClick={() => {
                                close_modal(false)
                                open_exclude(true)
                                }}>
                                    Excluir anúncio</button>
                            <button className={`${style.btn_save} body-2-500`} type='submit'>Salvar alterações</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>    )
}

export default ModalUpdate