import { useContext, useState } from "react";
import RegisterForm from "src/components/forms/registerForm";
import Header from "src/components/home/Header";
import "./style.sass"
import SuccessfullyCreatedModal from "src/components/modals/created_successfully_modal";
import { UserContext } from "src/contexts/userContext";

const RegisterPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { successfullyCreated, setSuccessfullyCreated } = useContext(UserContext)
    
    const closeModal = () => {
        setSuccessfullyCreated(false);
      };

    return (
        <>
        {successfullyCreated && <SuccessfullyCreatedModal closeModal={closeModal}/>}
        <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <main>
            <RegisterForm/>
        </main>
        </>
    )
}

export default RegisterPage