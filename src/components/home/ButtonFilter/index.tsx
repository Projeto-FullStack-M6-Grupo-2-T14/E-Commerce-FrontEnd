import '@styles/_typography.sass'
import styles from './buttonFilter.module.sass'

interface iProps {
    title: string
}


const ButtonFilter = ({ title }: iProps) => {

    return (
        <div className={styles.buttonFilterContainer}>
            <h1 className="heading-4-600">
                {title}
            </h1>
            <div>
                <button className={styles.filtersButton}>Mínimo</button>
                <button className={styles.filtersButton}>Máximo</button>
            </div>
        </div>
    )
}

export default ButtonFilter