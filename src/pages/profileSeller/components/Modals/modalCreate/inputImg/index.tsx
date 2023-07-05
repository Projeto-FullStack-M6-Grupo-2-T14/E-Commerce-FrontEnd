import { UseFormRegister } from 'react-hook-form';
import styles from './inputImg.module.sass';
import { iCreatePoster } from '../modalCreate.schema';
import { iUpdatePoster } from '../../modalUpdate/modalUpdate.schema';

interface iInputImg {
    number: number,
    registerImg: UseFormRegister<iCreatePoster> | UseFormRegister<iUpdatePoster>,
    str: 'image_one' | 'image_two' | 'image_three' | 'image_four' | 'image_five' | 'image_six' | 'image_seven' | 'image_eigth' | 'image_nine' | 'image_ten'
}

const InputImg = ({number, registerImg, str }: iInputImg) => {
    return (
        <div className={styles.box_input_med}>
            <label htmlFor={`img_${number.toString()}`} className={`heading-7-500 ${styles.label_med}`}>{number}º Imagem da galeria</label>
            <input type="text" placeholder="https://image.com" id={`img_${number.toString()}`} className={`${styles.input_med} heading-7-500`} {...registerImg(str)}/>
        </div>    
    )
}

export default InputImg