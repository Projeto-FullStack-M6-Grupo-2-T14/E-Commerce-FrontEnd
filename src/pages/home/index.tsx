import { useState } from "react"

import { Header } from "../../components/home/Header"
import { BackgroundImage } from "../../components/home/Background_image"
import ListFilter from "../../components/home/ListFilter"
import ButtonFilter from "src/components/home/ButtonFilter"
import Card from "src/components/home/Card"
import Footer from "src/components/home/Footer"



import "./style.sass"
import { AiOutlineCloseSquare } from "react-icons/ai"

const HomePage = () => {
    const [showFilters, setShowFilter] = useState(false);

    const toggleFilters = () => {
        setShowFilter(!showFilters)
    }



    return (
        <>
            <Header />
            <BackgroundImage />
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
                <button className="show-filters-button" onClick={toggleFilters}>Filters</button>
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