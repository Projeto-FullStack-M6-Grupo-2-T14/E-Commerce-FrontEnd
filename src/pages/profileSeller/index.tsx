/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react"
import Footer from "src/components/Footer"
import Header from "src/components/Header"
import { UserContext } from "src/contexts/userContext"

import ModalConfCreate from "./components/Modals/modalConfCreate"
import ModalConfUpdate from "./components/Modals/modalConfUpdate"
import ModalCreatePoster from "./components/Modals/modalCreate"
import ModalDelete from "./components/Modals/modalDelete"
import ModalUpdate from "./components/Modals/modalUpdate"
import ModalUpdateAddress from "./components/Modals/modalUpdateAddress"
import ModalUpdateUser from "./components/Modals/modalUpdateUser"
import SectionPosters from "./components/SectionPosters"
import SectionProfile from "./components/SectionProfile"

const ProfileSellerPage = () => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openConfCreate, setOpenConfCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openConfUpdate, setOpenConfUpdate] = useState(false)
    const [openExclude, setOpenExclude] = useState(false)
    const { user, seller, getInitials, sellerProfile } = useContext(UserContext)
    const [openUpdateUser, setOpenUpdateUser] = useState(false)
    const [openUpdateAddress, setOpenUpdateAddress] = useState(false)
    const [idCard, setIdCard] = useState<string | undefined>('');

    const userId = user && user.id

    useEffect(() => {
        sellerProfile()
    }, [openUpdate])

    return (
        <>
            <Header />
            <main>
                {
                    seller ?
                        <SectionProfile seller={seller} open_create_poster={setOpenCreate} open_update_user={setOpenUpdateUser} initial_name={seller?.name} name={seller?.name ?? ""} description={seller?.description ?? ""} />
                        :
                        <SectionProfile open_create_poster={setOpenCreate} open_update_user={setOpenUpdateUser} initial_name={getInitials(user?.name)} name={user?.name ?? ""} description={user?.description ?? ""} />
                }
                <SectionPosters open_update={setOpenUpdate} setCard={setIdCard} />
            </main>
            <Footer />

            {
                openCreate && <ModalCreatePoster open_modal={setOpenConfCreate} close_modal={setOpenCreate} />
            }
            {
                openConfCreate && <ModalConfCreate close_modal={setOpenConfCreate} />
            }
            {
                openUpdate && <ModalUpdate open_modal={setOpenConfUpdate} close_modal={setOpenUpdate} open_exclude={setOpenExclude} cardId={idCard ?? ''} />
            }
            {
                openConfUpdate && <ModalConfUpdate close_modal={setOpenConfUpdate} />
            }
            {
                openExclude && <ModalDelete close_modal={setOpenExclude} cardId={idCard ?? ''} />
            }
            //edit user
            {
                openUpdateUser && <ModalUpdateUser close_modal={setOpenUpdateUser} open_modal={setOpenUpdateAddress} userId={userId} />
            }
            {
                openUpdateAddress && <ModalUpdateAddress close_modal={setOpenUpdateAddress} userId={userId} />
            }
        </>
    )
}

export default ProfileSellerPage