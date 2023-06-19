import { useContext, useEffect, useState } from "react"
import { AiOutlineCloseSquare } from "react-icons/ai"
import ListFilter from "../../components/home/ListFilter"
import ButtonFilter from "src/components/home/ButtonFilter"
import Footer from "src/components/home/Footer"
import Header from "src/components/home/Header"
import BackgroundImage from "src/components/home/BackgroundImage"
import Card from "src/components/home/Card"
import "./style.sass"
import { PosterContext } from "src/contexts/posterContext"


const HomePage = () => {
    const [showFilters, setShowFilter] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {filteredPosters, setFilteredPosters, getPosters} = useContext(PosterContext)

    const toggleFilters = () => {
        setShowFilter(!showFilters)
    }

    useEffect(() => {
        getPosters()
    }, [setFilteredPosters])

    return (
        <>
            <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <BackgroundImage isMobileMenuOpen={isMobileMenuOpen} />
            <main className="main">
                <aside id="main-aside">
                    <ListFilter title="Marca" lista={["General Motors", "Fiat", "Honda", "Porsche", "Volswagen"]} />
                    <ListFilter title="Modelo" lista={["Civic", "Corolla", "Cruze", "Fiat", "Gol", "Ka", "Onix", "Pulse"]} />
                    <ListFilter title="Cor" lista={["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"]} />
                    <ListFilter title="Ano" lista={["2022", "2021", "2018", "2015", "2013"]} />
                    <ListFilter title="Combustível" lista={["Diesel", "Etanol", "Gasolina", "Flex"]} />
                    <ButtonFilter title="Km" />
                    <ButtonFilter title="Preço" />
                </aside>
                <ul className="list-cards">
                    {
                        filteredPosters.map( poster => <Card {...poster} /> )
                    }
                </ul>
                <button className="out-aside" onClick={toggleFilters}>Filtros</button>
            </main>
            <Footer />

            <div id="show-filters" className={showFilters ? '' : 'hidden'}>
                <aside>
                    <div className="modal-title">
                        <h1>Filtros</h1>
                        <AiOutlineCloseSquare onClick={toggleFilters} />
                    </div>

                    <ListFilter title="Marca" lista={["General Motors", "Fiat", "Honda", "Porsche", "Volswagen"]} />
                    <ListFilter title="Modelo" lista={["Civic", "Corolla", "Cruze", "Fiat", "Gol", "Ka", "Onix", "Pulse"]} />
                    <ListFilter title="Cor" lista={["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"]} />
                    <ListFilter title="Ano" lista={["2022", "2021", "2018", "2015", "2013"]} />
                    <ListFilter title="Combustível" lista={["Diesel", "Etanol", "Gasolina", "Flex"]} />
                    <ButtonFilter title="Km" />
                    <ButtonFilter title="Preço" />

                    <button className="show-filters-button" onClick={toggleFilters}>Ver Anúncios</button>

                </aside>
            </div>
        </>
    )
}


export default HomePage