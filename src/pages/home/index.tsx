import { useState } from "react"
import { AiOutlineCloseSquare } from "react-icons/ai"
import ListFilter from "../../components/home/ListFilter"
import ButtonFilter from "src/components/home/ButtonFilter"
import Footer from "src/components/home/Footer"
import Header from "src/components/home/Header"
import BackgroundImage from "src/components/home/BackgroundImage"
import Card from "src/components/home/Card"
import mock_car from "../../assets/images/card1.png"
import "./style.sass"

const HomePage = () => {
    const [showFilters, setShowFilter] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleFilters = () => {
        setShowFilter(!showFilters)
    }

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
                    <Card img={mock_car}
                        name="Ford Fiesta - 20"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..."
                        name_profile="Junior Santos"
                        mileage="110"
                        year="2021"
                        price="90.000"
                    />
                    <Card img={mock_car}
                        name="Ford Fiesta - 20"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..."
                        name_profile="Junior Santos"
                        mileage="110"
                        year="2021"
                        price="90.000"
                    />
                    <Card img={mock_car}
                        name="Ford Fiesta - 20"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..."
                        name_profile="Junior Santos"
                        mileage="110"
                        year="2021"
                        price="90.000"
                    />
                    <Card img={mock_car}
                        name="Ford Fiesta - 20"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..."
                        name_profile="Junior Santos"
                        mileage="110"
                        year="2021"
                        price="90.000"
                    />
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