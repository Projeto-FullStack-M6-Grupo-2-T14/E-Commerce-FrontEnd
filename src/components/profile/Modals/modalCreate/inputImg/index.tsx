import styles from './inputImg.module.sass';

interface iInputImg {
    number: number,
}

const InputImg = ({number}: iInputImg) => {
    return (
        <div className={styles.box_input_med}>
            <label htmlFor={`img_${number.toString()}`} className={`heading-7-500 ${styles.label_med}`}>{number}º Imagem da galeria</label>
            <input type="text" placeholder="https://image.com" id={`img_${number.toString()}`} className={`${styles.input_med} heading-7-500`}/>
        </div>    
    )
}

export default InputImg