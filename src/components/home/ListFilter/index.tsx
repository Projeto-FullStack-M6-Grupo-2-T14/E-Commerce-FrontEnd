import "./style.sass"


interface iElementsListFilter {
    title: string,
    lista: string[]
}

const ListFilter = ({ title, lista }: iElementsListFilter) => {
    return (
        <div>
            <h3 className='heading-4-600'>{title}</h3>
            <ul className="filters-ul">
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