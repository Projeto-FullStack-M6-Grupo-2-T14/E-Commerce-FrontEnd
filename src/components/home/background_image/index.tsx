import "./bk_img.sass"
import  Car from "../../../assets/images/Photo.png"

export const BackgroundImage = () => {
    return (
      <div className="container">
        <div className="gradient">
            <h1 className="Heading-3-500">Motors Shop</h1>
            <h3 className="heading-5-500">A melhor plataforma de anúncios de carros do país</h3>
        </div>
        <img src={Car} alt="imagem de um carro" />
      </div>
    );
  };
  