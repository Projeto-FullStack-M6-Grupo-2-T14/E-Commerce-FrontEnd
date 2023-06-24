import { useState } from "react"
import FooterProfile from "src/components/profile/FooterProfile"
import HeaderProfile from "src/components/profile/Header"
import SectionPosters from "src/components/profile/SectionPosters"
import SectionProfile from "src/components/profile/SectionProfile"
import ModalConfCreate from "src/components/profile/modals/modalConfCreate"
import ModalConfUpdate from "src/components/profile/modals/modalConfUpdate"
import ModalCreatePoster from "src/components/profile/modals/modalCreate"
import ModalDelete from "src/components/profile/modals/modalDelete"
import ModalUpdate from "src/components/profile/modals/modalUpdate"

const ProfileAdminPage = () => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openConfCreate, setOpenConfCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openConfUpdate, setOpenConfUpdate] = useState(false)
    const [openExclude, setOpenExclude] = useState(false)

    return (
        <>
            <HeaderProfile initial_name="JS" name="Junio Santos"/>
            <main>
                <SectionProfile open_modal={setOpenCreate} initial_name="SL" name="Samuel Leão" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
                <SectionPosters open_update={setOpenUpdate}/>
            </main>
            <FooterProfile />

            {
                openCreate && <ModalCreatePoster open_modal={setOpenConfCreate} close_modal={setOpenCreate}/>
            }
            {
                openConfCreate && <ModalConfCreate close_modal={setOpenConfCreate}/>
            }
            {
                openUpdate && <ModalUpdate open_modal={setOpenConfUpdate} close_modal={setOpenUpdate} open_exclude={setOpenExclude}/>
            }
            {
                openConfUpdate && <ModalConfUpdate close_modal={setOpenConfUpdate}/>
            }
            {
                openExclude && <ModalDelete close_modal={setOpenExclude}/>
            }
        </>
    )
}

export default ProfileAdminPage