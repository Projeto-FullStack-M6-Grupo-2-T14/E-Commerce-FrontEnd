import { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import "./header.sass"

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header id="container">
      <div className="logo_container">
        <h1 className="heading-3-500">
          Motors
          <span className="heading-6-500"> shop</span>
        </h1>
      </div>
      <div className="button_container">
        <a className="body-1-600">Fazer Login</a>
        <button className="button-big-text">Cadastrar</button>
      </div>
      <div
        className={`mobile_menu_icon close_icon ${isMobileMenuOpen ? '' : 'hidden'}`}
        onClick={handleMobileMenuClick}
      >
        {isMobileMenuOpen ? <AiOutlineCloseSquare /> : <VscMenu />}
      </div>
      <div className={`mobile_menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a className="body-1-600">Fazer Login</a>
        <button className="button-big-text">Cadastrar</button>
      </div>
    </header>
  );
};
