import { Dispatch, SetStateAction } from 'react';
import styles from './card.module.sass';
// import { Link } from 'react-router-dom';

interface iSectionPosters {
    img: string,
    car_name: string,
    description: string,
    initial_name: string,
    name_profile: string,
    km: string,
    year: string,
    price: string,
    open_update: Dispatch<SetStateAction<boolean>>,
}

const CardProfile = ({img, car_name, description, initial_name, name_profile, km, year, price, open_update}: iSectionPosters) => {
    const url = window.location.href
    const findUrl = url.includes('admin')

    return (
        <li className={styles.card}>
            <figure>
                <img src={img} alt={car_name} />
            </figure>

            <h3 className='heading-6-600'>{car_name}</h3>
            <p className='heading-7-500'>{description}</p>

            <div className={styles.box_profile}>
                <span className='heading-7-600'>{initial_name}</span>
                <h3 className='heading-6-500'>{name_profile}</h3>
            </div>

            <div className={styles.box_info}>
                <div>
                    <span className='body-1-600'>{km}  km</span>
                    <span className='body-1-600'>{year}</span>
                </div>

                <span className='heading-7-600'>R$ {price},00</span>
            </div>
                {
                    findUrl && <div className={styles.box_btns}>
                        <button className='heading-7-600' onClick={() => open_update(true)}>Editar</button>
                        <button className='heading-7-600'>Ver detalhes</button>
                    </div>
                }
        </li>
    )
}

export default CardProfile