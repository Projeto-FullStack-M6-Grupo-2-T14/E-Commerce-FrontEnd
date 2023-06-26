import { useState } from "react";
import LoginForm from "src/components/forms/LoginForm";
import Header from "src/components/home/Header";

import styles from "./login.module.sass"


const LoginPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <main className={styles.main}>
                <LoginForm />
            </main>
        </>
    )
}

export default LoginPage
