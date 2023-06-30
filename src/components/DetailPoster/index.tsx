import styles from './detailPoster.module.sass'
import { TDetailPoster } from './schemas'


const DetailPoster = ({posterData}: {posterData: TDetailPoster}) => {
    return (
        <>
        <div>
            <div className={styles.detpostImg}>
                            <img src={posterData.cover_image ?? ''} alt={posterData.title} />
                        </div>
                        <div className={styles.detpostDetails}>
                            <h2 className='heading-4-600'>
                                {posterData.title}
                            </h2>
                            <div className={styles.detpostDetailsDownContainer}>
                                <div>
                                    <div>
                                        <span className='heading-7-600'>
                                            {posterData.year}
                                        </span>
                                        <span className='heading-7-600'>
                                            {posterData.mileage}
                                        </span>
                                    </div>
                                    <div>
                                        <button className={styles.detpostBtn}>
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className='heading-4-600'>
                                        {posterData.price}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className={styles.detpostDescription}>
                            <div className={styles.detpostDescriptionWrapper}>
                                <h2 className='heading-4-600'>
                                    Descrição
                                </h2>
                                <p className='heading-4-600'>
                                    {posterData.description}
                                </p>
                            </div>
                    </div>
                </div>
        </>
    )
}

export default DetailPoster