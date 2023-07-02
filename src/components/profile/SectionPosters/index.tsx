import styles from './sectionPoster.module.sass';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import Card from 'src/components/Card';
import { UserContext } from 'src/contexts/userContext';

interface iSectionPoster {
    open_update: Dispatch<SetStateAction<boolean>>,
    setCard?: Dispatch<SetStateAction<string>>
}


const SectionPosters = ({ open_update, setCard }: iSectionPoster) => {

    const { seller, getInitials } = useContext(UserContext)

    return (
        <section id={styles.section_posters}>
            <h2 className='heading-5-600'>Anúncios</h2>


            <ul>
                {
                    seller?.posters.map((poster: any, i: number) => <Card key={i}
                        initial_name={getInitials(poster.user.name)}
                        name_profile={poster.user.name ?? ""}
                        user_id={poster.user.id}
                        open_update={open_update}
                        setCard={setCard} {...poster} />)
                }
            </ul>
        </section>
    )
}

export default SectionPosters