import LoginForm from "src/components/forms/loginForm";
import styles from "./login.module.sass"
import Header from "src/components/Header";


const LoginPage = () => {

    return (
        <>
            <Header />
            <main className={styles.main}>
                <LoginForm />
            </main>
        </>
    )
}

export default LoginPage
