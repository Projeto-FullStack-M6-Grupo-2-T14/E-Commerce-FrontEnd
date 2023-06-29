import styles from "./backgroundImage.module.sass"

const BackgroundImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}  >
        <h1 className="heading-2-600">Motors Shop</h1>
        <h3 className="heading-4-500">A melhor plataforma de anúncios de carros do país</h3>
      </div>
    </div>
  );
};

export default BackgroundImage

