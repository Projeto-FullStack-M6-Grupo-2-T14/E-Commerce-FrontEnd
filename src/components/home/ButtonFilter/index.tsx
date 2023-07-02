import styles from './buttonFilter.module.sass'


interface iProps {
    title: string
    sortByPrice?: (priceOption: string) => void
    sortByKm?: (mileageOption: string) => void
}

const ButtonFilter = ({ title, sortByPrice, sortByKm }: iProps) => {
    const filterPrice = (priceOpt: string) => {
        if (sortByPrice) {
        sortByPrice(priceOpt)
        }
    }

    const filterKm = (kmOpt: string) => {
        if (sortByKm) {
        sortByKm(kmOpt)
        }
    }

    return (
        <div className={styles.buttonFilterContainer}>
        <h1 className="heading-4-600">{title}</h1>
        <div>
            {title === 'Preço' && (
            <>
                <button onClick={() => filterPrice('min')} className={styles.filtersButton}>
                Mínimo
                </button>
                <button onClick={() => filterPrice('max')} className={styles.filtersButton}>
                Máximo
                </button>
            </>
            )}
            {title === 'Km' && (
            <>
                <button onClick={() => filterKm('min')} className={styles.filtersButton}>
                Menor
                </button>
                <button onClick={() => filterKm('max')} className={styles.filtersButton}>
                Maior
                </button>
            </>
            )}
        </div>
        </div>
    )
}

export default ButtonFilter
