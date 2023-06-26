// import card1 from '../../../assets/images/card1.png'
import { TPostUserSchema } from 'src/contexts/posterContext'
import styles from './card.module.sass'

export interface iCardElements {
    cover_image: string,
    title: string,
    description: string,
    user: TPostUserSchema,
    mileage: string,
    year: string,
    price: string
}

const Card = ({ cover_image, title, description, user, mileage, year, price }: iCardElements) => {
    function generateColor() {
        const letters = '0123456789ABCDEF'
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }

        return color
    }

    let userName = user.name
    function generateNameImg() {

        for (let i = 0; i < userName.length; i++) {
            if (userName[i] === ' ') {
                userName += userName[i + 1]
            }
        }

        return userName
    }

    return (
        <li className={styles.card}>
            <img src={cover_image} alt={title} />
            <h3 className='heading-5-600'>{title}</h3>

            <p className='body-1-400'>{description}</p>

            <figure>
                <div style={{ 'backgroundColor': `${generateColor()}` }} className='body-1-600'>{`${generateNameImg()}`}</div>
                <figcaption className='body-1-600'>{userName}</figcaption>
            </figure>

            <div className={styles.boxInfocar}>
                <div>
                    <span className={`body-1-600 ${styles.spanInfocar}`}>{`${mileage} KM`}</span>
                    <span className={`body-1-600 ${styles.spanInfocar}`}>{year}</span>
                </div>
                <span className={`heading-6-600 ${styles.spanInfocar}`}>{`R$ ${price},00`}</span>
            </div>
        </li>
    )
}


export default Card