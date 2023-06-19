import styles from './card.module.sass'

interface ICardElements {
    img: string,
    name: string,
    description: string,
    name_profile: string,
    mileage: string,
    year: string,
    price: string
}

const Card = ({ img, name, description, name_profile, mileage, year, price }: ICardElements) => {
    function generateColor() {
        const letters = '0123456789ABCDEF'
        let color = '#'

        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }

        return color
    }

    function generateNameImg() {
        let name = name_profile[0]

        for (let i = 0; i < name_profile.length; i++) {
            if (name_profile[i] === ' ') {
                name += name_profile[i + 1]
            }
        }

        return name
    }

    return (
        <li className={styles.card}>
            <img src={img} alt={name} />
            <h3 className='heading-5-600'>{name}</h3>

            <p className='body-1-400'>{description}</p>

            <figure>
                <div style={{ 'backgroundColor': `${generateColor()}` }} className='body-1-600'>{`${generateNameImg()}`}</div>
                <figcaption className='body-1-600'>{name_profile}</figcaption>
            </figure>

            <div className={styles.boxInfocar}>
                <div>
                    <span className={`body-1-600 ${styles.spanInfocar}`}>{`${mileage} KM`}</span>
                    <span className={`body-1-600 ${styles.spanInfocar}`}>{year}</span>
                </div>
                <span className={`heading-6-600 ${styles.spanInfocar}`}>{`R$ ${price},00`}</span>
            </div>
        </li>
    )
}


export default Card