import "./card.sass";

export function Card(){

    interface iCard{
        cover_image: string,
        brand: string,
        model: string,
        description: string,
        imgAnuciante: string,
        anuciante: string,
        mileage: string,
        year: string,
        price: string,

    }

    const estado: iCard[] = [
        {
          cover_image: 'url_da_imagem_1',
          brand: 'Marca 1',
          model: 'Modelo 1',
          description: 'Descrição 1',
          imgAnuciante: 'url_da_imagem_anunciante_1',
          anuciante: 'Anunciante 1',
          mileage: '10.000 km',
          year: '2021',
          price: '$10.000',
        },
        {
          cover_image: 'url_da_imagem_2',
          brand: 'Marca 2',
          model: 'Modelo 2',
          description: 'Descrição 2',
          imgAnuciante: 'url_da_imagem_anunciante_2',
          anuciante: 'Anunciante 2',
          mileage: '20.000 km',
          year: '2020',
          price: '$8.000',
        },
      ];

    return(
        <>
            {estado.map((element:iCard, index)=> (
                <li className="card" key={index}>
                    <section>
                        <img src={element.cover_image} alt="image" />
                    </section>    
                    <div>
                        <h4>{element.brand} - {element.model}</h4>
                    </div>
                    <p>{element.description}</p>
                    <div>
                        <img src={element.imgAnuciante} alt="anuciante" />
                        <h5>{element.anuciante}</h5>
                    </div>

                    <div>
                        <p>{element.mileage}</p>
                        <p>{element.year}</p>
                        <h5>{element.price}</h5>
                    </div>
                </li>
            ))}
        </>
    )


}

