import { useContext, useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import styles from "./header.module.sass"
import { UserContext } from 'src/contexts/userContext';



const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { userLogout, user, isSeller, sellerProfile, seller } = useContext(UserContext)


  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header id={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <h1 className="heading-2-600">
              Motors
              <span className="heading-5-600"> shop</span>
            </h1>
          </Link>
        </div>
        {!user ?
          <div className={styles.buttonContainer}>
            <Link to="/login" className={styles.linkLogin}>Fazer Login</Link>
            <Link to="/register" className={styles.linkRegister}>Cadastrar</Link>
          </div> :
          <div className={styles.figureContainer}>
            <figure>
              <div className={styles.hr}></div>
              <div className={`heading-6-600 ${styles.iconProfile}`}>
                {user.name[0]}
              </div>
              <figcaption className="heading-6-500">
                <Link to={isSeller ? '/profile/seller' : '/'} onClick={sellerProfile}>{user.name}</Link>
              </figcaption>
            </figure>

            <button className={styles.logout} onClick={userLogout}>Saída</button>
          </div>
        }
        <div
          className={`${styles.mobileMenuIcon} ${styles.closeIcon}`}
          onClick={handleMobileMenuClick}
        >
          {isMobileMenuOpen ? <AiOutlineCloseSquare /> : <VscMenu />}
        </div>
      </header>
      <div className={styles.mobileMenuContainer}>
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          {!user ?
            <div className={styles.buttonContainerMobile}>
              <Link to="/login" className={styles.linkLogin}>Fazer Login</Link>
              <Link to="/register" className={styles.linkRegister}>Cadastrar</Link>
            </div> :
            <div className={styles.figureContainerMobile}>
              <figure>
                <div className={`heading-6-600 ${styles.iconProfile}`}>
                  {user.name[0]}
                </div>
                <figcaption className="heading-6-500">
                  <Link to={isSeller ? '/profile/seller' : '/'}>{user.name}</Link>
                </figcaption>
              </figure>

              <button className={styles.logout} onClick={userLogout}>Saída</button>
            </div>}
        </div>
      </div>
    </>
  );
};

export default Header
