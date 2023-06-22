import { useContext, useEffect, useState } from "react"
import { AiOutlineCloseSquare } from "react-icons/ai"
import ListFilter from "../../components/home/ListFilter"
import ButtonFilter from "src/components/home/ButtonFilter"
import Footer from "src/components/home/Footer"
import Header from "src/components/home/Header"
import BackgroundImage from "src/components/home/BackgroundImage"
import Card from "src/components/home/Card"
import { PosterContext } from "src/contexts/posterContext"
import { z } from 'zod'
import styles from "./home.module.sass"


const HomePage = () => {
    const [showFilters, setShowFilter] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { filteredPosters, setFilteredPosters, getPosters, allPosters } = useContext(PosterContext)
    const [posterFilter, setPosterFilter] = useState('')
    const toggleFilters = () => {
        setShowFilter(!showFilters)
    }

    useEffect(() => {
        getPosters()
    }, [setFilteredPosters])

    const posterCardUserSchema = z.object({
        name: z.string(),
        email: z.string(),
        cpf: z.string(),
        phone: z.string(),
        birthday: z.string(),
        description: z.string(),
        is_seller: z.boolean()
    })
    type TPosterCard = z.infer<typeof posterCardSchema>
    const posterCardSchema = z.object({
        cover_image: z.string(),
        title: z.string(),
        description: z.string(),
        user: posterCardUserSchema,
        mileage: z.string(),
        year: z.string(),
        price: z.string(),
        brand: z.string(),
        model: z.string(),
        color: z.string(),
        fuel: z.string()
    })

    const posterCardListSchema = z.array(posterCardSchema)

    const filter = (filterName: string, propertyName: keyof TPosterCard) => {
        // setPosterFilter(filterName)
        const filtered = allPosters.filter(poster => poster[propertyName] === filterName)
        const returnFiltered = posterCardListSchema.safeParse(filtered)
        console.log(filtered, 'filtered')
        if (returnFiltered.success) {
            setFilteredPosters(returnFiltered.data)
        }
        if(showFilters) {
            toggleFilters()
        }
    }

    const filterList = (property: keyof TPosterCard) => {
        const listSet = new Set(allPosters.map((poster) => poster[property]))
        const list = Array.from(listSet).filter((item) => typeof item === 'string')
        console.log(list, 'filterlist')
        return list as string[]
    }
    const sortByPrice = () => {
        filteredPosters.sort((a,b) => {
            if (a.price < b.price) {
                return -1
            }
            if (a.price > b.price) {
                return 1
            }
            return 0
        })
    }

    return (
        <>
            <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <BackgroundImage isMobileMenuOpen={isMobileMenuOpen} />
            <main className={styles.main}>
                <aside id={styles.mainAside}>
                    {/* <button onClick={() => filterList()}>filtro</button> */}
                    <ListFilter onClick={(filterName) => filter(filterName, 'brand')} title="Marca" lista={() => filterList('brand')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'model')} title="Modelo" lista={() => filterList('model')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'color')} title="Cor" lista={() => filterList('color')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'year')} title="Ano" lista={() => filterList('year')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'fuel')} title="Combustível" lista={() => filterList('fuel')} />
                    {/* <ListFilter title="Modelo" lista={["Civic", "Corolla", "Cruze", "Fiat", "Gol", "Ka", "Onix", "Pulse"]} />
                    <ListFilter title="Cor" lista={["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"]} />
                    <ListFilter title="Ano" lista={["2022", "2021", "2018", "2015", "2013"]} />
                    <ListFilter title="Combustível" lista={["Diesel", "Etanol", "Gasolina", "Flex"]} /> */}
                    <ButtonFilter title="Km" />
                    <ButtonFilter title="Preço" />
                </aside>
                <ul className="list-cards">
                    {
                        filteredPosters.map(poster => <Card {...poster} />)
                    }
                </ul>
                <button className={styles.outAside} onClick={toggleFilters}>Filtros</button>
            </main>
            <Footer />

            <div id={styles.showFilters} className={showFilters ? '' : styles.hidden}>
                <aside >
                    <div className={styles.modalTitle}>
                        <h1>Filtros</h1>
                        <AiOutlineCloseSquare onClick={toggleFilters} />
                    </div>
                    <ListFilter onClick={(filterName) => filter(filterName, 'brand')} title="Marca" lista={() => filterList('brand')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'model')} title="Modelo" lista={() => filterList('model')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'color')} title="Cor" lista={() => filterList('color')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'year')} title="Ano" lista={() => filterList('year')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'fuel')} title="Combustível" lista={() => filterList('fuel')} />

                    {/* <ListFilter title="Marca" lista={["General Motors", "Fiat", "Honda", "Porsche", "Volswagen"]} />
                    <ListFilter title="Modelo" lista={["Civic", "Corolla", "Cruze", "Fiat", "Gol", "Ka", "Onix", "Pulse"]} />
                    <ListFilter title="Cor" lista={["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"]} />
                    <ListFilter title="Ano" lista={["2022", "2021", "2018", "2015", "2013"]} />
                    <ListFilter title="Combustível" lista={["Diesel", "Etanol", "Gasolina", "Flex"]} /> */}
                    <ButtonFilter title="Km" />
                    <ButtonFilter title="Preço" />

                    <button className={styles.showFiltersButton} onClick={toggleFilters}>Ver Anúncios</button>

                </aside>
            </div>
        </>
    )
}

export default HomePage
