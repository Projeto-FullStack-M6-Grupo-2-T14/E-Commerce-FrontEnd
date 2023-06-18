import { VscMenu } from 'react-icons/vsc';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import "./header.sass"
import { Link } from 'react-router-dom';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header id="container">
        <Link to="/" className="logo_container">
          <h1 className="heading-3-500">
            Motors
            <span className="heading-6-500"> shop</span>
          </h1>
        </Link>
        <div className="button_container">
          <Link to="/login" className="link-login">Fazer Login</Link>
          <Link to="/register" className="link-register">Cadastrar</Link>
        </div>
        <div
          className={`mobile_menu_icon close_icon`}
          onClick={handleMobileMenuClick}
        >
          {isMobileMenuOpen ? <AiOutlineCloseSquare /> : <VscMenu />}
        </div>
      </header>
      <div className="mobile_menu_container">
        <div className={`mobile_menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className='button_container_mobile'>
            <Link to="/login" className="link-login">Fazer Login</Link>
            <Link to="/register" className="link-register">Cadastrar</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header
