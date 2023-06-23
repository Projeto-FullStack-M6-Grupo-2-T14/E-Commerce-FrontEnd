import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home'
import RegisterPage from 'src/pages/register'
import LoginPage from 'src/pages/login'
import Anuncio from 'src/components/anuncio'
import NewPasswordPage from 'src/pages/newPassword'

const RoutesMain = () => (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/anuncio' element={<Anuncio />} />
        <Route path='/login/newPassword' element={<NewPasswordPage />} />        
    </Routes>
)

export default RoutesMain