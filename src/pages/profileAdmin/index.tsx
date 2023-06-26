/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import { UserContext } from "src/contexts/userContext"
import FooterProfile from "src/components/profile/FooterProfile"
import HeaderProfile from "src/components/profile/Header"
import SectionPosters from "src/components/profile/SectionPosters"
import SectionProfile from "src/components/profile/SectionProfile"
import ModalConfCreate from "src/components/profile/Modals/modalConfCreate"
import ModalConfUpdate from "src/components/profile/Modals/modalConfUpdate"
import ModalCreatePoster from "src/components/profile/Modals/modalCreate"
import ModalDelete from "src/components/profile/Modals/modalDelete"
import ModalUpdate from "src/components/profile/Modals/modalUpdate"

const ProfileAdminPage = () => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openConfCreate, setOpenConfCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openConfUpdate, setOpenConfUpdate] = useState(false)
    const [openExclude, setOpenExclude] = useState(false)

    const { user, getInitials, retrieveUser } = useContext(UserContext)

    useEffect(() => {
        const storedUserId = localStorage.getItem("@USER_ID");
        const token = localStorage.getItem("@TOKEN");
        const userId = storedUserId ? parseInt(storedUserId) : null;
      
        if (userId && token) {
          retrieveUser(userId, token);
        }
      }, []);

    return (
        <>
            <HeaderProfile initial_name={getInitials(user?.name)} name={user?.name ?? ""}/>
            <main>
                <SectionProfile open_modal={setOpenCreate} initial_name={getInitials(user?.name)} name={user?.name ?? ""} description={user?.description ?? ""} />
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