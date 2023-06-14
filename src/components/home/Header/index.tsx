import { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import "./header.sass"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header id="container">
        <h1 className="heading-2-600">Motors<span className="heading-4-600"> shop</span></h1>

        <nav className="button_container">
          <a className="body-1-600 link-login">Fazer Login</a>
          <a className="button-big-text link-register">Cadastrar</a>
        </nav>
        <div className={`mobile_menu_icon close_icon`} onClick={handleMobileMenuClick}>        
          {
            isMobileMenuOpen ? <AiOutlineCloseSquare /> : <VscMenu />
          }
        </div>
      </header>
      {
        isMobileMenuOpen && <MenuMobile />
      }
    </>
  );
};

const MenuMobile = () => {
  return (
    <nav className='nav-mobile'>
      <a className="button-big-text link-login-mobile">Fazer Login</a>
      <a className="button-big-text link-register">Cadastrar</a>
    </nav>
  )
}

export default Header
