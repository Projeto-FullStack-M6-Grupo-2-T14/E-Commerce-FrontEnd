import { useState } from "react";
import RegisterForm from "src/components/forms/registerForm";
import Header from "src/components/home/Header";
import "./style.sass"

const RegisterPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
        <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
        <main>
            <RegisterForm/>
        </main>
        </>
    )
}

export default RegisterPage