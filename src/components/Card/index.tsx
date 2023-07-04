// import card1 from '../../../assets/images/card1.png'
import styles from './card.module.sass'
import { Link, useNavigate } from 'react-router-dom'
import { Dispatch, SetStateAction, useContext } from 'react'
import { UserContext } from 'src/contexts/userContext'
import { PosterContext, TPosterUser } from 'src/contexts/posterContext'


interface iSectionPosters {
    id: number,
    cover_image: string,
    title: string,
    description: string,
    initial_name: string,
    name_profile: string,
    mileage: string,
    year: string,
    price: string,
    is_active: boolean,
    user_id: number,
    open_update?: Dispatch<SetStateAction<boolean>>,
    setCard?: Dispatch<SetStateAction<number | null>>,
}
const Card = ({ id, cover_image, title, description, initial_name, name_profile, mileage, year, price, is_active, user_id, open_update, setCard }: iSectionPosters) => {
    const url = window.location.href
    const findUrl = url.includes('profile')

    const { user, sellerProfile } = useContext(UserContext)
    const { posterId, setPosterId } = useContext(PosterContext)
    const navigate = useNavigate()

    function openUpdate() {
        setCard ? setCard(id) : null
        open_update && open_update(true)
    }

    const detail = () => {
        setPosterId(id)
        navigate(`/product/${id}`)
    }

    return (
        <li onClick={detail}  className={styles.card}>
            
            <figure>
                <img src={cover_image} alt={title} />
                {!findUrl ? <></> : <span className={`heading-7-500`} style={is_active === true ? { backgroundColor: '#4529E6' } : { backgroundColor: '#adb5bd' }}>{is_active === true ? 'Ativo' : 'Inativo'}</span>}
            </figure>

            <h3 className='heading-6-600'>{title}</h3>
            <p className='heading-7-500'>{description}</p>

            <div className={styles.boxProfile}>
                <span className='heading-7-600'>{initial_name}</span>
                <h3 className='heading-6-500'>
                    <Link to={`/profile/seller?seller_id=${user_id}`}>{name_profile}</Link>
                </h3>
            </div>

            <div className={styles.boxInfo}>
                <div>
                    <span className='body-1-600'>{mileage}  km</span>
                    <span className='body-1-600'>{year}</span>
                </div>

                <span className='heading-7-600'>R$ {price},00</span>
            </div>
            {
                findUrl && user_id == user?.id && <div className={styles.boxBtns}>
                    <button className='heading-7-600' onClick={() => openUpdate()}>Editar</button>
                    <button className='heading-7-600'>Ver detalhes</button>
                </div>
            }
        </li>
    )
}



export default Card