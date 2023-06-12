import React from "react";
import "./style.scss";

export function ListProduct(){

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

    const estado = []

    return(
        <>
            {estado.map((element:iCard, index)=> (
                <li key={index}>
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

