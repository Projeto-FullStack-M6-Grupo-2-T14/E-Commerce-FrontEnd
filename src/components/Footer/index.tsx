import './styles.sass'
import logo from './../../assets/img/mshoplogo.png'


const Footer = () => {
    return (
        <footer className="footer">
            <div className='footer-container'>
                <div className='footer-logo-container'>
                    <img className='footer-logo' src={logo} alt="logo" />
                </div>
                <div className='footer-text-container'>
                    <span className='footer-text'>
                        &copy; 2023 - Todos os direitos reservados.
                    </span>
                </div>
                <div className='footer-button-container'>
                    <button className='footer-button'>^</button>
                </div>
            </div>
        </footer>
    )
}


export default Footer