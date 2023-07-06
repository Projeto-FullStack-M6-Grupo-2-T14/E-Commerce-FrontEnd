import styles from './sectionPoster.module.sass';
import { Dispatch, SetStateAction, useContext } from 'react';
import Card from 'src/components/Card';
import { UserContext } from 'src/contexts/userContext';

import semanuncio from 'src/assets/images/semanuncio.png'

interface iSectionPoster {
    open_update: Dispatch<SetStateAction<boolean>>;
    setCard: Dispatch<SetStateAction<undefined | string>>;
}


const SectionPosters = ({ open_update, setCard }: iSectionPoster) => {

    const { seller, getInitials } = useContext(UserContext)


    return (

        <section id={styles.section_posters
        } >
            {
                seller?.posters.length ?
                    <>
                        <h2 className='heading-5-600'>Anúncios</h2>


                        <ul>
                            {
                                seller?.posters.map((poster, i) => (
                                    <Card
                                      key={i}
                                      initial_name={getInitials(seller.name)}
                                      name_profile={seller.name ?? ""}
                                      user_id={seller.id ?? undefined}
                                      open_update={open_update}
                                      setCard={setCard}
                                      cover_image={poster.cover_image ? poster.cover_image : ''}
                                      description={poster.description ? poster.description : ''}
                                      id={poster.id ? +poster.id : 10}
                                      title={poster.title ? poster.title : ''}
                                      is_active={poster.is_active ? poster.is_active : false}
                                      mileage={poster.mileage ? poster.mileage : ''}
                                      price={poster.price ? poster.price : ''}
                                      year={poster.year ? poster.year : ''}
                                    />
                                  ))
                            }
                        </ul>
                    </>
                    :
                    <div className={styles.noPosters}>
                        <img src={semanuncio} alt="sem anuncio" />
                        <h2>Vendedor ainda não tem anúncios</h2>
                    </div>
            }
        </section >

    )
}

export default SectionPosters