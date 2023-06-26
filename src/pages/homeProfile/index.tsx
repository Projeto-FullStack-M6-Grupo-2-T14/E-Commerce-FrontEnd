/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { AiOutlineCloseSquare } from "react-icons/ai"
import ListFilter from "../../components/home/ListFilter"
import ButtonFilter from "src/components/home/ButtonFilter"
import Footer from "src/components/home/Footer"
import BackgroundImage from "src/components/home/BackgroundImage"
import Card from "src/components/home/Card"
import { PosterContext } from "src/contexts/posterContext"

import styles from "./homeProfile.module.sass"
import { UserContext } from "src/contexts/userContext"
import HeaderProfile from "src/components/profile/Header"


const HomeProfile = () => {
    const [showFilters, setShowFilter] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { filteredPosters, setFilteredPosters, getPosters } = useContext(PosterContext)
    const { user, getInitials, retrieveUser } = useContext(UserContext)

    const toggleFilters = () => {
        setShowFilter(!showFilters)
    }

    useEffect(() => {
        getPosters()
    }, [setFilteredPosters])


    useEffect(() => {
        const storedUserId = localStorage.getItem("@USER_ID");
        const token = localStorage.getItem("@TOKEN");
        const userId = storedUserId ? parseInt(storedUserId) : null;
      
        if (userId && token) {
          retrieveUser(userId, token);
        }
      }, []);

    

    return (
        <>
            <HeaderProfile initial_name={getInitials(user?.name)} name={user?.name ?? ""}/>
            <BackgroundImage isMobileMenuOpen={isMobileMenuOpen} />
            <main className={styles.main}>
                <aside id={styles.mainAside}>
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

                    <ListFilter title="Marca" lista={["General Motors", "Fiat", "Honda", "Porsche", "Volswagen"]} />
                    <ListFilter title="Modelo" lista={["Civic", "Corolla", "Cruze", "Fiat", "Gol", "Ka", "Onix", "Pulse"]} />
                    <ListFilter title="Cor" lista={["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"]} />
                    <ListFilter title="Ano" lista={["2022", "2021", "2018", "2015", "2013"]} />
                    <ListFilter title="Combustível" lista={["Diesel", "Etanol", "Gasolina", "Flex"]} />
                    <ButtonFilter title="Km" />
                    <ButtonFilter title="Preço" />

                    <button className={styles.showFiltersButton} onClick={toggleFilters}>Ver Anúncios</button>

                </aside>
            </div>
        </>
    )
}


export default HomeProfile