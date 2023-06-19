import styles from "./listFilter.module.sass"


interface IElementsListFilter {
    title: string,
    lista: string[]
}

const ListFilter = ({ title, lista }: IElementsListFilter) => {
    return (
        <div>
            <h3 className='heading-4-600'>{title}</h3>
            <ul className={styles.filtersUl}>
                {
                    lista.map((item: string, index) => {
                        return (
                            <li className="heading-7-500" key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListFilter