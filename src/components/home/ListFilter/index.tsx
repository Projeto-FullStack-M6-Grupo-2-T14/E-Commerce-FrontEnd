interface iElementsListFilter {
    title: string,
    lista: string[]
}

const ListFilter = ({title, lista}: iElementsListFilter) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
            {
                lista.map((item: string, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default ListFilter