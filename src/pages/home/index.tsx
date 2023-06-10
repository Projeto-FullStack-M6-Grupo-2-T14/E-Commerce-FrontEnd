import { useState } from "react"
import { AiOutlineCloseSquare } from "react-icons/ai"

import ListFilter from "../../components/home/ListFilter"
import ButtonFilter from "src/components/home/ButtonFilter"
import Footer from "src/components/home/Footer"
import Header from "src/components/home/header"
import BackgroundImage from "src/components/home/background_image"
import "./style.sass"

const HomePage = () => {
    const [showFilters, setShowFilter] = useState(false);

    const toggleFilters = () => {
        setShowFilter(!showFilters)
    }

    return (
        <>
            <Header/>
            <BackgroundImage/>
            <div className="main">
                <aside id="main-aside">
                    <ListFilter title="Marca" lista={["General Motors", "Fiat", "Honda", "Porsche", "Volswagen"]} />
                    <ListFilter title="Modelo" lista={["Civic", "Corolla", "Cruze", "Fiat", "Gol", "Ka", "Onix", "Pulse"]} />
                    <ListFilter title="Cor" lista={["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"]} />
                    <ListFilter title="Ano" lista={["2022", "2021", "2018", "2015", "2013"]} />
                    <ListFilter title="Combustível" lista={["Diesel", "Etanol", "Gasolina", "Flex"]} />
                    <ButtonFilter title="Km" />
                    <ButtonFilter title="Preço" />
                </aside>
                <div className="cards-container">
                    {/* <Card /> */}
                </div>
                <button className="out-aside" onClick={toggleFilters}>Filters</button>
            </div>
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