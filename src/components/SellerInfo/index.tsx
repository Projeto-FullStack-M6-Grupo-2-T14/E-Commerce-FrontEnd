import { Link } from 'react-router-dom'
import styles from './sellerInfo.module.sass'
import { TSellerInfo } from './sellerInfo.schemas'


const SellerInfo = ({ sellerInfo }: {sellerInfo: TSellerInfo}) => {
    function generateColor() {
        const letters = '0123456789ABCDEF'
        let color = '#'
    
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
    
        return color
    }

    const userName = sellerInfo.name

    function generateNameImg() {
    let initials = ""

    const nameParts = userName.split(' ')

    for (let i = 0; i < nameParts.length; i++) {
        const namePart = nameParts[i]
        if (namePart.length > 0) {
        initials += namePart[0]
        }
    }

    return initials
    }

    return (
        <div className={styles.sellerInfoContainer}>
            <figure className={styles.figureSeller}>
                <div className={styles.sellerInfoInitials} style={{ 'backgroundColor': `${generateColor()}` }}>{`${generateNameImg()}`}</div>
            </figure>
            <div className={styles.sellerInfoNameWrapper}>
                <h2 className='heading-6-600'>{sellerInfo.name}</h2>
            </div>
            <div className={styles.sellerInfoDescriptionWrapper}>
                <p className='body-1-400'>{sellerInfo.description}</p>
            </div>
            <Link to={`/profile/seller?seller_id=${sellerInfo.id}`}>
                <button className={styles.sellerInfoBtn}>
                    Ver todos anúncios
                </button>
            </Link>
            
        </div>
    )
}

export default SellerInfo