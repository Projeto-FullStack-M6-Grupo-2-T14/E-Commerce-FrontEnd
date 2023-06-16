import "./bk_img.sass"

interface BackgroundImageProps {
  isMobileMenuOpen: boolean;
}

const BackgroundImage = ({ isMobileMenuOpen }: BackgroundImageProps) => {
  return (
    <div className="container">
      <div className={`gradient ${isMobileMenuOpen ? 'open' : ''}`}  >
        <h1 className="heading-3-500">Motors Shop</h1>
        <h3 className="heading-5-500">A melhor plataforma de anúncios de carros do país</h3>
      </div>
    </div>
  );
};

export default BackgroundImage

