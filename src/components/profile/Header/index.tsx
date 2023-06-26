import { useState } from 'react';
import styles from './header.module.sass';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { useContext } from 'react';
import { UserContext } from 'src/contexts/userContext';

interface iHeaderProfile {
    initial_name: string,
    name: string,
}

const HeaderProfile = ({initial_name, name}: iHeaderProfile) => {
    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    const { userLogout } = useContext(UserContext)

    return (
        <header id={styles.cabecalho}>
            <div className={styles.container} style={openMenuMobile === true ? {borderBottom: '2px solid #4529E6', marginBottom: '20px'} : {}}>
                <h1 className="heading-2-600">Motors<span className="heading-5-600"> shop</span></h1>

                <div>
                    <figure>
                        <div id={styles.barra}></div>
                        <div className="heading-6-600" id={styles.icon_profile}>{initial_name}</div>
                        <figcaption className="heading-6-500">{name}</figcaption>
                    </figure>

                    <Link to="/" onClick={userLogout}>Saída</Link>
                    { openMenuMobile === false ? <BiMenu size='40' className={styles.menu_mobile} onClick={() => setOpenMenuMobile(true)}/> : null}
                    { openMenuMobile === true ? <IoMdClose size='40' className={styles.close_menu_mobile} onClick={() => setOpenMenuMobile(false)}/> : null }
                </div>                
            </div>

            <div className={styles.box_mobile} style={openMenuMobile === false ? {display: 'none'} : {display: 'flex'}}>
                <div>
                    <span className="heading-6-600" id={styles.icon_mobile}>{initial_name}</span>
                    <span className="heading-6-500" id={styles.name_mobile}>{name}</span>
                </div>

                <Link to="/" onClick={userLogout}>Saída</Link>
            </div>
        </header>
    )
}

export default HeaderProfile