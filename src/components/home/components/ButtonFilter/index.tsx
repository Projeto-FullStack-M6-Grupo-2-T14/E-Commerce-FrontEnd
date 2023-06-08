import '@styles/_typography.sass'
import './styles.sass'

interface iProps {
    title: string
}


const ButtonFilter = ({ title }: iProps) => {

    return (
        <div className='button-filter-container'>
            <h1 className="heading-4-600">
                {title}
            </h1>
            <div>
                <button className='filters-button'>Mínimo</button>
                <button className='filters-button'>Máximo</button>
            </div>
        </div>
    )
}

export default ButtonFilter