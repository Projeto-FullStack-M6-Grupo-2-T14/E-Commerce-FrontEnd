import LoginForm from "src/components/forms/LoginForm";
import Header from "src/components/home/Header";
import styles from "./login.module.sass"


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
