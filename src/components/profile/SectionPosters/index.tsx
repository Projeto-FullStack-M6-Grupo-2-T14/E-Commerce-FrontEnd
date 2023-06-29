import styles from './sectionPoster.module.sass';
import { Dispatch, SetStateAction, useContext } from 'react';
import Card from 'src/components/home/Card';
import { UserContext } from 'src/contexts/userContext';

interface iSectionPoster {
    open_update: Dispatch<SetStateAction<boolean>>,
    setCard?: Dispatch<SetStateAction<string>>
}

const SectionPosters = ({ open_update, setCard }: iSectionPoster) => {

    const { seller } = useContext(UserContext)

    console.log(open_update, setCard)

    return (
        <section id={styles.section_posters}>
            <h2 className='heading-5-600'>Anúncios</h2>


            <ul>
                {
                    seller?.posters.map((poster: any, i: number) => <Card key={i} {...poster} />)
                }
            </ul>
        </section>
    )
}

export default SectionPosters