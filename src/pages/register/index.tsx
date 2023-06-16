import { useState } from "react";
import Header from "src/components/home/header"
import RegisterForm from "src/components/forms/registerForm";
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