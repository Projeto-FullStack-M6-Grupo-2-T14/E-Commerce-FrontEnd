import { useContext } from 'react';
import styles from './header.module.sass';
import { UserContext } from 'src/contexts/userContext';

interface iHeaderProfile {
    initial_name: string,
    name: string,
}

const HeaderProfile = ({initial_name, name}: iHeaderProfile) => {
    const { userLogout } = useContext(UserContext)

    return (
        <header id={styles.cabecalho}>
            <div className={styles.container}>
                <h1 className="heading-2-600">Motors<span className="heading-5-600"> shop</span></h1>

                <div>
                    <figure>
                        <div id={styles.barra}></div>
                        <div className="heading-6-600" id={styles.icon_profile}>{initial_name}</div>
                        <figcaption className="heading-6-500">{name}</figcaption>
                    </figure>

                    <button onClick={userLogout}>Saída</button>
                </div>                
            </div>
        </header>
    )
}

export default HeaderProfile