import card1 from "../../../assets/images/card1.png"

import './styles.sass'


const Card = () => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={card1} alt="" />
            </div>
            <div className='card-container'>
                <h3 className="heading-7-600">Maserati - Ghibli</h3>
            </div>
        </div>
    )
}


export default Card