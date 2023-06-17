import { useState } from "react";
import LoginForm from "src/components/forms/loginForm";
import Header from "src/components/home/Header";
import "./style.sass"


const LoginPage = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
            <main>
                <LoginForm/>
            </main>
        </>
    )
}

export default LoginPage
