import styles from "./backgroundImage.module.sass"

interface IBackgroundImageProps {
  isMobileMenuOpen: boolean;
}

const BackgroundImage = ({ isMobileMenuOpen }: IBackgroundImageProps) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.gradient} ${isMobileMenuOpen ? styles.open : ''}`}  >
        <h1 className="heading-3-500">Motors Shop</h1>
        <h3 className="heading-5-500">A melhor plataforma de anúncios de carros do país</h3>
      </div>
    </div>
  );
};

export default BackgroundImage

