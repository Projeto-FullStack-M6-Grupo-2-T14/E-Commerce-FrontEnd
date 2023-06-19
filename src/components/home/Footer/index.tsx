import logo from './../../../assets/images/mshoplogo.png'
import styles from './footer.module.sass'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogoContainer}>
                    <img className={styles.footerLogo} src={logo} alt="logo" />
                </div>
                <div className={styles.footerTextContainer}>
                    <span className={styles.footerText}>
                        &copy; 2023 - Todos os direitos reservados.
                    </span>
                </div>
                <div className={styles.footerButtonContainer}>
                    <button className={styles.footerButton}>^</button>
                </div>
            </div>
        </footer>
    )
}


export default Footer