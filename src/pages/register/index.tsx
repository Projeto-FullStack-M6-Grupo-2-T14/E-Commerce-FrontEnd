import { useContext, useState } from "react";
import RegisterForm from "src/components/forms/registerForm";
import Header from "src/components/home/Header";
import SuccessfullyCreatedModal from "src/components/modals/created_successfully_modal";
import { UserContext } from "src/contexts/userContext";

import styles from "./register.module.sass"



const RegisterPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { successfullyCreated, setSuccessfullyCreated } = useContext(UserContext)

    const closeModal = () => {
        setSuccessfullyCreated(false);
    };

    return (
        <>
            {successfullyCreated && <SuccessfullyCreatedModal closeModal={closeModal} />}
            <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <main className={styles.main}>
                <RegisterForm />
            </main>
        </>
    )
}

export default RegisterPage