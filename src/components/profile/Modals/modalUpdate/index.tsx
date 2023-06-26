import style from './modalUpdate.module.sass';
import styles from '../modalCreate/modalCreate.module.sass';
import { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import InputImg from '../modalCreate/inputImg';

interface iModalUpdate {
    close_modal: Dispatch<SetStateAction<boolean>>,
    open_modal: Dispatch<SetStateAction<boolean>>,
    open_exclude: Dispatch<SetStateAction<boolean>>,
}

const ModalUpdate = ({close_modal, open_modal, open_exclude}: iModalUpdate) => {
    const [countImg, setCountImg] = useState(2)
    const [activePubButton, setActivePubButton] = useState(true)

    function closeModal(element: string) {
        if(element.includes('container_modal')) {
            close_modal(false)
        }
    }

    return (
        <div className={styles.container_modal} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => closeModal(event.currentTarget.className)}>
            <div className={styles.modal}>
                <div className={styles.container}>

                    <div className={styles.box_title}>
                        <h2 className='heading-6-600'>Editar anúncio</h2>

                        <figure onClick={() => close_modal(false)}>
                            <AiOutlineClose size='30' className={styles.icon}/>
                        </figure>
                    </div>

                    <form className={styles.form}>
                        <h3 className='heading-7-600'>Informações do veículo</h3>

                        <div className={styles.box_input_med}>
                            <label htmlFor="brand" className={`heading-7-500 ${styles.label_med}`}>Marca</label>
                            <input type="text" placeholder="Mercedes Benz" id="brand" className={`${styles.input_med} heading-7-500`}/>
                        </div>

                        <div className={styles.box_input_med}>
                            <label htmlFor="model" className={`heading-7-500 ${styles.label_med}`}>Modelo</label>
                            <input type="text" placeholder="A 200 CGI ADVANCE SEDAN" id="model" className={`${styles.input_med} heading-7-500`}/>
                        </div>

                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="year" className='heading-7-500'>Ano</label>
                                <input type="text" placeholder="2018" id="year" className='heading-7-500'/>
                            </div>
                            <div className={styles.box_input_small}>
                                <label htmlFor="fuel" className='heading-7-500'>Combustível</label>
                                <input type="text" placeholder="Gasolina / Etanol" id="fuel" className='heading-7-500'/>
                            </div>
                        </div>


                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="mileage" className='heading-7-500'>Quilometragem</label>
                                <input type="text" placeholder="30.000" id="mileage" className='heading-7-500'/>                               
                            </div>

                            <div className={styles.box_input_small}>
                                <label htmlFor="color" className='heading-7-500'>Cor</label>
                                <input type="text" placeholder="Branco" id="color" className='heading-7-500'/>
                            </div>
                        </div>

                        <div className={styles.box_input}>
                            <div className={styles.box_input_small}>
                                <label htmlFor="priceFIPE" className='heading-7-500'>Preço tabela FIPE</label>
                                <input type="text" placeholder="R$ 48.000,00" id="priceFIPE" className='heading-7-500'/>
                            </div>
                            <div className={styles.box_input_small}>
                                <label htmlFor="color" className='heading-7-500'>Preço</label>
                                <input type="text" placeholder="Branco" id="color" className='heading-7-500'/>
                            </div>
                        </div>

                        <div className={styles.box_text}>
                            <label htmlFor="description" className='heading-7-500'>Descrição</label>
                            <textarea name="description" id="description" placeholder='Descrição do veículo' className='heading-7-500'></textarea>
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
                            <input type="text" placeholder="https://image.com" id="img_cover" className={`${styles.input_med} heading-7-500`}/>
                        </div>

                        <div className={styles.box_imgs}>
                            <InputImg number={1} />
                            <InputImg number={2} />
                            { countImg > 2 ? <InputImg number={3}/> : null }
                            { countImg > 3 ? <InputImg number={4}/> : null }
                            { countImg > 4 ? <InputImg number={5}/> : null }
                            { countImg > 5 ? <InputImg number={6}/> : null }
                            { countImg > 6 ? <InputImg number={7}/> : null }
                            { countImg > 7 ? <InputImg number={8}/> : null }
                            { countImg > 8 ? <InputImg number={9}/> : null }
                            { countImg > 9 ? <InputImg number={10}/> : null }
                        </div>

                        <button className={`${styles.btn_add} body-2-500`} type='button' onClick={() => countImg < 10 ? setCountImg(countImg + 1) : setCountImg(10)}>Adicionar campo para imagem da galeria</button>

                        <div className={style.box_btns}>
                            <button className={`${style.btn_exclude} body-2-500`} onClick={() => {
                                close_modal(false)
                                open_exclude(true)
                                }}>
                                    Excluir anúncio</button>
                            <button className={`${style.btn_save} body-2-500`} type='submit' onClick={() => {
                                close_modal(false) 
                                open_modal(true)}}>
                                Salvar alterações</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>    )
}

export default ModalUpdate