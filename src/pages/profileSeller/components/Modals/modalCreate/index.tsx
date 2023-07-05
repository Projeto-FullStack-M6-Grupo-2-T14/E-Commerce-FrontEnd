import { Dispatch, SetStateAction, useContext, useState} from 'react';
import styles from './modalCreate.module.sass';
// import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import InputImg from './inputImg';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createPosterSchema, iCreatePoster } from './modalCreate.schema';
import { PosterContext } from 'src/contexts/posterContext';

interface iModalCreatePoster {
    close_modal: Dispatch<SetStateAction<boolean>>,
    open_modal: Dispatch<SetStateAction<boolean>>,
}

const ModalCreatePoster = ({close_modal, open_modal}: iModalCreatePoster) => {
    const [countImg, setCountImg] = useState(2)
    const { createPosterAndImgs } = useContext(PosterContext)

    function closeModal(element: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const target = element.target as HTMLDivElement

        if(target.className.includes('container_modal')) {
            close_modal(false)
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm<iCreatePoster>({
        resolver: zodResolver(createPosterSchema),
    });

    const submitRegisterPoster: SubmitHandler<iCreatePoster> = (posterData: iCreatePoster) => {
        createPosterAndImgs(posterData)
        close_modal(true)
        open_modal(false)      
    };

    return (
        <div className={styles.container_modal} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>  closeModal(event)}>
            <div className={styles.modal}>
                <div className={styles.container}>

                    <div className={styles.box_title}>
                        <h2 className='heading-6-600'>Criar anúncio</h2>

                        <figure onClick={() => close_modal(false)}>
                            <AiOutlineClose size='30' className={styles.icon}/>
                        </figure>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit(submitRegisterPoster)}>
                        <h3 className='heading-7-600'>Informações do veículo</h3>

                        <div className={styles.box_input_med}>
                            <label htmlFor="brand" className={`heading-7-500 ${styles.label_med}`}>Marca</label>
                            <input type="text" placeholder="Mercedes Benz" id="brand" className={`${styles.input_med} heading-7-500`} {...register("brand")}/>
                            { errors.brand?.message ? <span className={styles.span_error}>{ errors.brand.message }</span> : null }
                        </div>

                        <div className={styles.box_input_med}>
                            <label htmlFor="model" className={`heading-7-500 ${styles.label_med}`}>Modelo</label>
                            <input type="text" placeholder="A 200 CGI ADVANCE SEDAN" id="model" className={`${styles.input_med} heading-7-500`} {...register("model")}/>
                            { errors.model?.message ? <span className={styles.span_error}>{ errors.model.message }</span> : null }
                        </div>

                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="year" className='heading-7-500'>Ano</label>
                                <input type="text" placeholder="2018" id="year" className='heading-7-500' {...register("year")}/>
                                { errors.year?.message ? <span className={styles.span_error}>{ errors.year.message }</span> : null }
                            </div>
                            <div className={styles.box_input_small}>
                                <label htmlFor="fuel" className='heading-7-500'>Combustível</label>
                                <input type="text" placeholder="Gasolina / Etanol" id="fuel" className='heading-7-500' {...register("fuel")}/>
                                { errors.fuel?.message ? <span className={styles.span_error}>{ errors.fuel.message }</span> : null }
                            </div>
                        </div>


                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="mileage" className='heading-7-500'>Quilometragem</label>
                                <input type="text" placeholder="30.000" id="mileage" className='heading-7-500' {...register("mileage")}/>                               
                                { errors.mileage?.message ? <span className={styles.span_error}>{ errors.mileage.message }</span> : null }
                            </div>

                            <div className={styles.box_input_small}>
                                <label htmlFor="color" className='heading-7-500'>Cor</label>
                                <input type="text" placeholder="Branco" id="color" className='heading-7-500' {...register("color")}/>
                                { errors.color?.message ? <span className={styles.span_error}>{ errors.color.message }</span> : null }
                            </div>
                        </div>

                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="priceFIPE" className='heading-7-500'>Preço tabela FIPE</label>
                                <input type="text" placeholder="R$ 48.000,00" id="priceFIPE" className='heading-7-500' {...register("fipe_price")}/>
                                { errors.fipe_price?.message ? <span className={styles.span_error}>{ errors.fipe_price.message }</span> : null }
                            </div>
                            <div className={styles.box_input_small}>
                                <label htmlFor="color" className='heading-7-500'>Preço</label>
                                <input type="text" placeholder="Branco" id="color" className='heading-7-500' {...register("price")}/>
                                { errors.price?.message ? <span className={styles.span_error}>{ errors.price.message }</span> : null }
                            </div>
                        </div>

                        <div className={styles.box_text}>
                            <label htmlFor="description" className='heading-7-500'>Descrição</label>
                            <textarea id="description" placeholder='Descrição do veículo' className='heading-7-500' {...register("description")}></textarea>
                            { errors.description?.message ? <span className={styles.span_error}>{ errors.description.message }</span> : null }
                        </div>

                        <div className={styles.box_input_med}>
                            <label htmlFor="img_cover" className={`heading-7-500 ${styles.label_med}`}>Imagem da capa</label>
                            <input type="text" placeholder="https://image.com" id="img_cover" className={`${styles.input_med} heading-7-500`} {...register("cover_image")}/>
                        </div>

                        <div className={styles.box_imgs}>
                            <InputImg number={1} registerImg={register} str='image_one'/>
                            { errors.image_one?.message ? <span className={styles.span_error}>{ errors.image_one.message }</span> : null }
                            <InputImg number={2} registerImg={register} str='image_two'/>
                            { errors.image_two?.message ? <span className={styles.span_error}>{ errors.image_two.message }</span> : null }
                            { countImg > 2 ? <InputImg number={3} registerImg={register} str='image_three'/> : null }
                            { countImg > 3 ? <InputImg number={4} registerImg={register} str='image_four'/> : null }
                            { countImg > 4 ? <InputImg number={5} registerImg={register} str='image_five'/> : null }
                            { countImg > 5 ? <InputImg number={6} registerImg={register} str='image_six'/> : null }
                            { countImg > 6 ? <InputImg number={7} registerImg={register} str='image_seven'/> : null }
                            { countImg > 7 ? <InputImg number={8} registerImg={register} str='image_eigth'/> : null }
                            { countImg > 8 ? <InputImg number={9} registerImg={register} str='image_nine'/> : null }
                            { countImg > 9 ? <InputImg number={10} registerImg={register} str='image_ten'/> : null }
                        </div>

                        <button className={`${styles.btn_add} body-2-500`} type='button' onClick={() => countImg < 10 ? setCountImg(countImg + 1) : setCountImg(10)}>Adicionar campo para imagem da galeria</button>

                        <div className={styles.box_btns}>
                            <button className='body-2-500' onClick={() => close_modal(false)}>Cancelar</button>
                            <button type='submit' className='body-2-500'>Criar anúncio</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ModalCreatePoster