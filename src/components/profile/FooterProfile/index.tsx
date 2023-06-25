import styles from './footerProfile.module.sass';
import { Link } from 'react-router-dom';

const FooterProfile = () => {
    return (
        <footer className={styles.footer_profile}>
            <div className={styles.container_footer}>
                <h1 className='heading-3-600'>Motors <span>shop</span></h1>

                <span className={`${styles.span_direct} heading-7-500`}>© 2022 -  Todos os direitos reservados.</span>

                <Link to='/admin' className='heading-7-500'>^</Link>
            </div>
        </footer>
    )
}

export default FooterProfile