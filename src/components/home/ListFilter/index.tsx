import styles from "./listFilter.module.sass"


interface IElementsListFilter {
    title: string,
    lista: () => string[]
    onClick: (title: string) => void
}

const ListFilter = ({ title, lista, onClick }: IElementsListFilter) => {
    const items = lista()

    return (
        <div>
            <h3 className='heading-4-600'>{title}</h3>
            <ul className={styles.filtersUl}>
                {
                    items.map((item: string, index) => {
                        return (
                            <li className="heading-7-500" key={index} onClick={() => onClick(item)}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListFilter