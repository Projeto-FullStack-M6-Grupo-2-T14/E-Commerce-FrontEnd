import { Dispatch, SetStateAction } from 'react';
import styles from './sectionProfile.module.sass';

interface iSectionProfile {
    initial_name: string,
    name: string,
    description: string,
    open_modal: Dispatch<SetStateAction<boolean>>,
}

const SectionProfile = ({initial_name, name, description, open_modal}: iSectionProfile) => {
    const url = window.location.href
    const findUrl = url.includes('admin')

    return (
        <section>
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
                        findUrl && <button id={styles.btn_create} className='heading-7-600' onClick={() => open_modal(true)}>Criar anúncio</button>
                    }
                </div>
            </div>
        </section>
    )
}

export default SectionProfile