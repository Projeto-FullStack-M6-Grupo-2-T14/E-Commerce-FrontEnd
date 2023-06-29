import { Dispatch, SetStateAction, useContext } from 'react';
import styles from './sectionProfile.module.sass';
import { UserContext } from 'src/contexts/userContext';

interface iSectionProfile {
    initial_name: string | undefined,
    name: string,
    description: string,
    open_modal: Dispatch<SetStateAction<boolean>>,
    seller?: any
}

const SectionProfile = ({ initial_name, name, description, open_modal, seller }: iSectionProfile) => {
    const { user } = useContext(UserContext)

    return (
        <>
            <div className={styles.background}></div>
            <section className={styles.section_profile}>
                <div className={styles.container_profile}>
                    <div className={styles.box_container}>
                        <figure className='heading-3-500'>
                            {initial_name}
                        </figure>

                        <div>
                            <h3 className='heading-4-600'>{name}</h3>
                            <span className='heading-7-600'>Anunciante</span>
                        </div>

                        <p className='heading-7-500'>{description}</p>

                        {
                            seller?.id == user?.id && <button id={styles.btn_create} className='heading-7-600' onClick={() => open_modal(true)}>Criar anúncio</button>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionProfile