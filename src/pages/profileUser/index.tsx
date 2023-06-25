import { useContext, useEffect } from "react"
import FooterProfile from "src/components/profile/FooterProfile"
import HeaderProfile from "src/components/profile/Header"
import SectionPosters from "src/components/profile/SectionPosters"
import SectionProfile from "src/components/profile/SectionProfile"
import { UserContext } from "src/contexts/userContext"

const ProfileUserPage = () => {
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
                <SectionProfile initial_name={getInitials(user?.name)} name={user?.name ?? ""} description={user?.description ?? ""}/>
                <SectionPosters />
            </main>
            <FooterProfile />
        </>
    )
}

export default ProfileUserPage