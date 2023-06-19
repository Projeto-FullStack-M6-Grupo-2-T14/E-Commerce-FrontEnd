import { useState } from "react";
import RegisterForm from "src/components/forms/registerForm";
import Header from "src/components/home/Header";

import styles from "./register.module.sass"


const RegisterPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <main className={styles.main}>
                <RegisterForm />
            </main>
        </>
    )
}

export default RegisterPage