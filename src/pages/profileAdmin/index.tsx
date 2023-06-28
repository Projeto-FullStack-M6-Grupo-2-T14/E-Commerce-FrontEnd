/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useState } from "react"
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
import ModalUpdateUser from "src/components/profile/Modals/modalUpdateUser"
import ModalUpdateAddress from "src/components/profile/Modals/modalUpdateAddress"

const ProfileAdminPage = () => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openConfCreate, setOpenConfCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openConfUpdate, setOpenConfUpdate] = useState(false)
    const [openExclude, setOpenExclude] = useState(false)
    const [openUpdateUser, setOpenUpdateUser] = useState(false)
    const [openUpdateAddress, setOpenUpdateAddress] = useState(false)
    const [idCard, setIdCard] = useState('')
    const userId = localStorage.getItem("@USER_ID");
    const { user, getInitials, retrieveUser } = useContext(UserContext)

    useEffect(() => {
        const storedUserId = localStorage.getItem("@USER_ID");
        const token = localStorage.getItem("@TOKEN");
        const userId = storedUserId ? parseInt(storedUserId) : null;
      
        if (userId && token) {
          retrieveUser(userId, token);
        }
      }, []);

    const { user, getInitials } = useContext(UserContext)    

    return (
        <>
            <HeaderProfile initial_name={getInitials(user?.name)} name={user?.name ?? ""} open_modal={setOpenUpdateUser}/>
            <main>
                <SectionProfile open_modal={setOpenCreate} initial_name={getInitials(user?.name)} name={user?.name ?? ""} description={user?.description ?? ""} />
                <SectionPosters open_update={setOpenUpdate} setCard={setIdCard}/>
            </main>
            <FooterProfile />

            {
                openCreate && <ModalCreatePoster open_modal={setOpenConfCreate} close_modal={setOpenCreate}/>
            }
            {
                openConfCreate && <ModalConfCreate close_modal={setOpenConfCreate}/>
            }
            {
                openUpdate && <ModalUpdate open_modal={setOpenConfUpdate} close_modal={setOpenUpdate} open_exclude={setOpenExclude} cardId={idCard}/>
            }
            {
                openConfUpdate && <ModalConfUpdate close_modal={setOpenConfUpdate}/>
            }
            {
                openExclude && <ModalDelete close_modal={setOpenExclude} cardId={idCard}/>
            }
            {
                openUpdateUser && <ModalUpdateUser close_modal={setOpenUpdateUser} open_modal={setOpenUpdateAddress} userId={userId !== null ? userId : ""}/>
            }
            {
                openUpdateAddress && <ModalUpdateAddress close_modal={setOpenUpdateAddress} userId={userId !== null ? userId : ""}/>
            }
        </>
    )
}

export default ProfileAdminPage