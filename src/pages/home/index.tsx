import { useContext, useEffect, useState } from "react"
import { AiOutlineCloseSquare } from "react-icons/ai"

import Card from "src/components/Card"
import { PosterContext } from "src/contexts/posterContext"
import { z } from 'zod'
import styles from "./home.module.sass"
import { UserContext } from "src/contexts/userContext"
import Header from "src/components/Header"
import BackgroundImage from "./components/BackgroundImage"
import Footer from "src/components/Footer"
import ButtonFilter from "./components/ButtonFilter"
import ListFilter from "./components/ListFilter"

const HomePage = () => {
    const [showFilters, setShowFilter] = useState(false)
    const { getInitials, user } = useContext(UserContext)
    const { filteredPosters, setFilteredPosters, getPosters, allPosters } = useContext(PosterContext)

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
        const filtered = allPosters.filter(poster => poster[propertyName] === filterName)
        const returnFiltered = posterCardListSchema.safeParse(filtered)
        if (returnFiltered.success) {
            setFilteredPosters(returnFiltered.data)
        }
        if (showFilters) {
            toggleFilters()
        }
    }
    const filterAll = () => {
        const filtered = [...allPosters]
        const returnFiltered = posterCardListSchema.parse(filtered)
        setFilteredPosters(returnFiltered)
    }
    const filterList = (property: keyof TPosterCard) => {
        const listSet = new Set(allPosters.map((poster) => poster[property]))
        const list = Array.from(listSet).filter((item) => typeof item === 'string')
        return list as string[]
    }
    const sortByPrice = (priceOption: string) => {
        if (priceOption === 'min') {
            const filtered = [...filteredPosters].sort((a, b) => {
                return parseInt(a.price) - parseInt(b.price)
            })
            const returnFiltered = posterCardListSchema.safeParse(filtered)
            if (returnFiltered.success) {
                setFilteredPosters(returnFiltered.data)
            }
        }
        if (priceOption === 'max') {
            const filtered = [...filteredPosters].sort((a, b) => {
                return parseInt(b.price) - parseInt(a.price)
            })
            const returnFiltered = posterCardListSchema.safeParse(filtered)
            if (returnFiltered.success) {
                setFilteredPosters(returnFiltered.data)
            }
        }
    }
    const sortByKm = (mileageOption: string) => {
        if (mileageOption === 'min') {
            const filtered = [...filteredPosters].sort((a, b) => {
                return parseInt(a.mileage) - parseInt(b.mileage)
            })
            const returnFiltered = posterCardListSchema.parse(filtered)
            setFilteredPosters(returnFiltered)
        }
        if (mileageOption === 'max') {
            const filtered = [...filteredPosters].sort((a, b) => {
                return parseInt(b.mileage) - parseInt(a.mileage)
            })
            const returnFiltered = posterCardListSchema.parse(filtered)
            setFilteredPosters(returnFiltered)
        }
    }


    return (
        <>
            <Header />
            <BackgroundImage />
            <main className={styles.main}>
                <aside id={styles.mainAside}>
                    <button onClick={filterAll} className="heading-4-600">Todos</button>
                    <ListFilter onClick={(filterName) => filter(filterName, 'brand')} title="Marca" lista={() => filterList('brand')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'model')} title="Modelo" lista={() => filterList('model')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'color')} title="Cor" lista={() => filterList('color')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'year')} title="Ano" lista={() => filterList('year')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'fuel')} title="Combustível" lista={() => filterList('fuel')} />
                    <ButtonFilter sortByPrice={sortByPrice} title="Preço" />
                    <ButtonFilter sortByKm={sortByKm} title="Km" />
                </aside>
                <ul className={styles.listCards}>
                    {
                        filteredPosters.map((poster, i) =>
                            <Card key={i}
                                initial_name={getInitials(poster.user.name)}
                                name_profile={poster.user.name ?? ""}
                                user_id={poster.user.id}
                                {...poster} />)
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
                    <button onClick={filterAll} className="heading-4-600">Todos</button>
                    <ListFilter onClick={(filterName) => filter(filterName, 'brand')} title="Marca" lista={() => filterList('brand')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'model')} title="Modelo" lista={() => filterList('model')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'color')} title="Cor" lista={() => filterList('color')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'year')} title="Ano" lista={() => filterList('year')} />
                    <ListFilter onClick={(filterName) => filter(filterName, 'fuel')} title="Combustível" lista={() => filterList('fuel')} />
                    <ButtonFilter sortByPrice={sortByPrice} title="Preço" />
                    <ButtonFilter sortByKm={sortByKm} title="Km" />
                    <button className={styles.showFiltersButton} onClick={toggleFilters}>Ver Anúncios</button>
                </aside>
            </div>
        </>
    )
}

export default HomePage