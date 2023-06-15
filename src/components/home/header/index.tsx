import { VscMenu } from 'react-icons/vsc';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import "./header.sass"

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
        <div className="logo_container">
          <h1 className="heading-3-500">
            Motors
            <span className="heading-6-500"> shop</span>
          </h1>
        </div>
        <div className="button_container">
          <Link to="/login" className="body-1-600">Fazer Login</Link>
          <Link to="/register" className="button-big-text">Cadastrar</Link>
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
          <div>
            <Link to="/login" className="body-1-600">Fazer Login</Link>
            <Link to="/register" className="button-big-text">Cadastrar</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header
