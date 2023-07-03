import { useContext } from "react";
import RegisterForm from "src/components/forms/registerForm";
import SuccessfullyCreatedModal from "src/components/modals/created_successfully_modal";
import { UserContext } from "src/contexts/userContext";

import styles from "./register.module.sass"
import Header from "src/components/Header";

const RegisterPage = () => {
    const { successfullyCreated, setSuccessfullyCreated } = useContext(UserContext)

    const closeModal = () => {
        setSuccessfullyCreated(false);
    };

    return (
        <>
            {successfullyCreated && <SuccessfullyCreatedModal closeModal={closeModal} />}
            <Header />
            <main className={styles.main}>
                <RegisterForm />
            </main>
        </>
    )
}

export default RegisterPage