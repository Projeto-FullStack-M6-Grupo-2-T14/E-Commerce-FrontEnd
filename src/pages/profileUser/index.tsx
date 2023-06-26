import { useContext } from "react"
import FooterProfile from "src/components/profile/FooterProfile"
import HeaderProfile from "src/components/profile/Header"
import SectionPosters from "src/components/profile/SectionPosters"
import SectionProfile from "src/components/profile/SectionProfile"
import { UserContext } from "src/contexts/userContext"

const ProfileUserPage = () => {
    const { user, getInitials } = useContext(UserContext)

    

    return (
        <>
            <HeaderProfile initial_name={getInitials(user?.name)} name={user?.name ?? ""}/>

            <main>
                <SectionProfile initial_name={getInitials(user?.name)} name={user?.name ?? ""} description={user?.description ?? ""}/>
                <SectionPosters />
            </main>
            <FooterProfile />
        </>
    )
}

export default ProfileUserPage