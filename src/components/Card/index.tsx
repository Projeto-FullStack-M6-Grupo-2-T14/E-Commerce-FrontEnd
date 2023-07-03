// import card1 from '../../../assets/images/card1.png'
import { PosterContext, TPosterUser } from 'src/contexts/posterContext'
import styles from './card.module.sass'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from 'src/contexts/userContext'

export interface iCardElements {
    id: number,
    cover_image: string,
    title: string,
    description: string,
    user: TPosterUser,
    mileage: string,
    year: string,
    price: string
}

const Card = ({ id, cover_image, title, description, user, mileage, year, price }: iCardElements) => {
    const { sellerProfile } = useContext(UserContext)
    const { posterId, setPosterId } = useContext(PosterContext)
    const navigate = useNavigate()

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

    const detail = () => {
        setPosterId(id)
        navigate(`/product/${id}`)
    }

    return (
        <li onClick={detail}  className={styles.card}>
            <img src={cover_image} alt={title} />
            <h3 className='heading-5-600'>{title}</h3>

            <p className='body-1-400'>{description}</p>

            <figure>
                <div style={{ 'backgroundColor': `${generateColor()}` }} className='body-1-600'>{`${generateNameImg()}`}</div>
                <figcaption className='body-1-600'>
                    <Link to={`/profile/seller?seller_id=${user.id}`}>{userName}</Link>
                </figcaption>
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