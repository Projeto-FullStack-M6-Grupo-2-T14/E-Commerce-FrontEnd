import styles from './detailPoster.module.sass'
import { TDetailPoster } from './schemas'


const DetailPoster = ({posterData}: {posterData: TDetailPoster}) => {
    return (
        <>
            <div className = {styles.detpostContainer}>
                <div className = {styles.detpostImg}>
                    <img src       = {posterData.cover_image ?? ''} alt = {posterData.title} />
                </div>
                        <div className = {styles.detpostDetails}>
                        <div className = {styles.detpostTitleWrapper}>
                        <h2  className = 'heading-4-600'>
                                {posterData.title}
                            </h2>
                            </div>
                            <div className = {styles.detpostDetailsDownContainer}>
                                <div>
                                    <div  className = {styles.kmAndYearWrapper}>
                                    <span className = {`body-2-500 ${styles.kmAndYear}`}>
                                            {(posterData.year).split('-')[0]}
                                        </span>
                                        <span className = {`body-2-500 ${styles.kmAndYear}`}>
                                            {posterData.mileage} KM
                                        </span>
                                    </div>
                                    <div>
                                        <button className = {styles.detpostBtn}>
                                        <a className={styles.buy} href="https://wa.me/5545999302865" target='_blank' rel="noreferrer noopener">Comprar</a>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className = 'heading-7-500'>
                                        R$ {posterData.price}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    <div className = {styles.detpostDescription}>
                    <div className = {styles.detpostDescriptionWrapper}>
                    <h2  className = 'heading-6-600'>
                                Descrição
                            </h2>
                            <p className = 'body-1-400'>
                                {posterData.description}
                            </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPoster