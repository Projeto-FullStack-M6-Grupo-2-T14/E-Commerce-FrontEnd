import { Dispatch, SetStateAction, useContext } from 'react';
import styles from './sectionProfile.module.sass';
import { TAllUserPoster, UserContext } from 'src/contexts/userContext';

interface iSectionProfile {
    initial_name: string | undefined,
    name: string,
    description: string,
    open_update_user: Dispatch<SetStateAction<boolean>>,
    open_create_poster: Dispatch<SetStateAction<boolean>>,
    seller?: TAllUserPoster
}

const SectionProfile = ({ initial_name, name, description, open_update_user, open_create_poster, seller }: iSectionProfile) => {
    const { user, getInitials } = useContext(UserContext)

    return (
        <>
            <div className={styles.background}></div>
            <section className={styles.section_profile}>
                <div className={styles.container_profile}>
                    <div className={styles.box_container}>
                        <figure className='heading-3-500'>
                            {getInitials(initial_name)}
                        </figure>

                        <div>
                            <h3 className='heading-4-600'>{name}</h3>
                            <span className='heading-7-600'>Anunciante</span>
                        </div>

                        <p className='heading-7-500'>{description}</p>
                        <div>
                            {
                                seller?.id == user?.id && <button id={styles.btn_create} className='heading-7-600' onClick={() => open_update_user(true)}>Editar perfil</button>
                            }
                            {
                                seller?.id == user?.id && <button id={styles.btn_create} className='heading-7-600' onClick={() => open_create_poster(true)}>Criar anúncio</button>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionProfile