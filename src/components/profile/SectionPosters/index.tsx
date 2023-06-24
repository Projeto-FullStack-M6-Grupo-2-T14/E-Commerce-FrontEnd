import CardProfile from '../Card';
import styles from './sectionPoster.module.sass';
// import { Link } from 'react-router-dom';
import car1 from '../../../assets/images/car-2.png'
import { Dispatch, SetStateAction } from 'react';

interface iSectionPoster {
    open_update: Dispatch<SetStateAction<boolean>>,
}

const SectionPosters = ({open_update}: iSectionPoster) => {
    const url = window.location.href
    const findUrl = url.includes('admin')

    return (
        <section id={styles.section_posters}>
            {
                findUrl && <h2 className='heading-5-600'>Anúncios</h2>
            }

            <ul>
                <CardProfile  
                    img={car1} 
                    car_name='Maserati - Gilbi' 
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
                    initial_name='SL'
                    name_profile='Samuel Leão'
                    km='20.000'
                    year='2019'
                    price='120.000'
                    open_update={open_update}
                />
                <CardProfile  
                    img={car1} 
                    car_name='Maserati - Gilbi' 
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
                    initial_name='SL'
                    name_profile='Samuel Leão'
                    km='20.000'
                    year='2019'
                    price='120.000'
                    open_update={open_update}
                />
                <CardProfile  
                    img={car1} 
                    car_name='Maserati - Gilbi' 
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
                    initial_name='SL'
                    name_profile='Samuel Leão'
                    km='20.000'
                    year='2019'
                    price='120.000'
                    open_update={open_update}
                />
                <CardProfile  
                    img={car1} 
                    car_name='Maserati - Gilbi' 
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
                    initial_name='SL'
                    name_profile='Samuel Leão'
                    km='20.000'
                    year='2019'
                    price='120.000'
                    open_update={open_update}
                />
                <CardProfile  
                    img={car1} 
                    car_name='Maserati - Gilbi' 
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
                    initial_name='SL'
                    name_profile='Samuel Leão'
                    km='20.000'
                    year='2019'
                    price='120.000'
                    open_update={open_update}
                />
                <CardProfile  
                    img={car1} 
                    car_name='Maserati - Gilbi' 
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...'
                    initial_name='SL'
                    name_profile='Samuel Leão'
                    km='20.000'
                    year='2019'
                    price='120.000'
                    open_update={open_update}
                />
                
            </ul>
        </section>
    )
}

export default SectionPosters