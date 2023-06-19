import { VscMenu } from 'react-icons/vsc';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import styles from "./header.module.sass"

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
      <header id={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <h1 className="heading-3-500">
              Motors
              <span className="heading-6-500"> shop</span>
            </h1>
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/login" className={styles.linkLogin}>Fazer Login</Link>
          <Link to="/register" className={styles.linkRegister}>Cadastrar</Link>
        </div>
        <div
          className={`${styles.mobileMenuIcon} ${styles.closeIcon}`}
          onClick={handleMobileMenuClick}
        >
          {isMobileMenuOpen ? <AiOutlineCloseSquare /> : <VscMenu />}
        </div>
      </header>
      <div className={styles.mobileMenuContainer}>
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.buttonContainerMobile}>
            <Link to="/login" className={styles.linkLogin}>Fazer Login</Link>
            <Link to="/register" className={styles.linkRegister}>Cadastrar</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header
