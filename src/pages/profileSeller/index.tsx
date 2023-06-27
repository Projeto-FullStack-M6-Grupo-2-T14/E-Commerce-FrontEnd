import { useContext, useEffect, useState } from "react"
import { UserContext } from "src/contexts/userContext"
import SectionPosters from "src/components/profile/SectionPosters"
import SectionProfile from "src/components/profile/SectionProfile"
import ModalConfCreate from "src/components/profile/Modals/modalConfCreate"
import ModalConfUpdate from "src/components/profile/Modals/modalConfUpdate"
import ModalCreatePoster from "src/components/profile/Modals/modalCreate"
import ModalDelete from "src/components/profile/Modals/modalDelete"
import ModalUpdate from "src/components/profile/Modals/modalUpdate"
import Header from "src/components/home/Header"
import Footer from "src/components/home/Footer"

const ProfileSellerPage = () => {
    const [openCreate, setOpenCreate] = useState(false)
    const [openConfCreate, setOpenConfCreate] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [openConfUpdate, setOpenConfUpdate] = useState(false)
    const [openExclude, setOpenExclude] = useState(false)

    const { user, seller, sellerProfile } = useContext(UserContext)

    // sellerProfile()
    useEffect(() => {
        sellerProfile()
    }, []);

    console.log(seller)

    return (
        <>
            <Header />
            <main>
                {
                    seller ?
                        <SectionProfile seller={seller} open_modal={setOpenCreate} initial_name={seller?.name} name={seller?.name ?? ""} description={seller?.description ?? ""} />
                        :
                        <SectionProfile open_modal={setOpenCreate} initial_name={user?.name} name={user?.name ?? ""} description={user?.description ?? ""} />
                }
                <SectionPosters open_update={setOpenUpdate} />
            </main>
            <Footer />

            {
                openCreate && <ModalCreatePoster open_modal={setOpenConfCreate} close_modal={setOpenCreate} />
            }
            {
                openConfCreate && <ModalConfCreate close_modal={setOpenConfCreate} />
            }
            {
                openUpdate && <ModalUpdate open_modal={setOpenConfUpdate} close_modal={setOpenUpdate} open_exclude={setOpenExclude} />
            }
            {
                openConfUpdate && <ModalConfUpdate close_modal={setOpenConfUpdate} />
            }
            {
                openExclude && <ModalDelete close_modal={setOpenExclude} />
            }
        </>
    )
}

export default ProfileSellerPage