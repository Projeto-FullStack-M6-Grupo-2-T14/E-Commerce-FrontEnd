import FooterProfile from "src/components/profile/FooterProfile"
import HeaderProfile from "src/components/profile/Header"
import SectionPosters from "src/components/profile/SectionPosters"
import SectionProfile from "src/components/profile/SectionProfile"

const ProfileUserPage = () => {
    return (
        <>
            <HeaderProfile initial_name="JS" name="Junio Santos"/>

            <main>
                <SectionProfile initial_name="SL" name="Samuel Leão" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
                <SectionPosters />
            </main>
            <FooterProfile />
        </>
    )
}

export default ProfileUserPage