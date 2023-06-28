import { useContext, useEffect, useState } from "react"
import { useContext } from "react"
import FooterProfile from "src/components/profile/FooterProfile"
import HeaderProfile from "src/components/profile/Header"
import ModalUpdateAddress from "src/components/profile/Modals/modalUpdateAddress"
import ModalUpdateUser from "src/components/profile/Modals/modalUpdateUser"
import SectionPosters from "src/components/profile/SectionPosters"
import SectionProfile from "src/components/profile/SectionProfile"
import { UserContext } from "src/contexts/userContext"

const ProfileUserPage = () => {
    const { user, getInitials, retrieveUser } = useContext(UserContext)
    const [stateEmpty, setStateEmpty] = useState(false)
    const [openUpdateUser, setOpenUpdateUser] = useState(false)
    const userId = localStorage.getItem("@USER_ID");
    const [openUpdateAddress, setOpenUpdateAddress] = useState(false)

    useEffect(() => {
        const storedUserId = localStorage.getItem("@USER_ID");
        const token = localStorage.getItem("@TOKEN");
        const userId = storedUserId ? parseInt(storedUserId) : null;
      
        if (userId && token) {
          retrieveUser(userId, token);
        }
      }, [retrieveUser]);
  
    const { user, getInitials } = useContext(UserContext)

    return (
        <>
            <HeaderProfile initial_name={getInitials(user?.name)} name={user?.name ?? ""} open_modal={setOpenUpdateUser}/>

            <main>
                <SectionProfile open_modal={stateEmpty === false ? setStateEmpty : setStateEmpty} initial_name={getInitials(user?.name)} name={user?.name ?? ""} description={user?.description ?? ""}/>
                <SectionPosters open_update={stateEmpty === false ? setStateEmpty : setStateEmpty}/>
            </main>
            <FooterProfile />

            {
                openUpdateUser && <ModalUpdateUser close_modal={setOpenUpdateUser} open_modal={setOpenUpdateAddress} userId={userId !== null ? userId : ""}/>
            }
            {
                openUpdateAddress && <ModalUpdateAddress close_modal={setOpenUpdateAddress} userId={userId !== null ? userId : ""}/>
            }
        </>
    )
}

export default ProfileUserPage