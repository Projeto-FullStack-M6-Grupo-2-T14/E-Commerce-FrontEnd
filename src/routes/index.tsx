import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home'
import RegisterPage from 'src/pages/register'
import LoginPage from 'src/pages/login'
import Anuncio from 'src/components/anuncio'
import ProfileAdminPage from 'src/pages/profileAdmin'
import ProfileUserPage from 'src/pages/profileUser'
import NewPasswordPage from 'src/pages/newPassword'
import ProtectedRoutes from 'src/components/protectedRoutes'

const RoutesMain = () => (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/anuncio' element={<Anuncio />} />
        <Route path='/admin' element={<ProfileAdminPage />} />
        <Route path='/user' element={<ProfileUserPage />}/>
        <Route path='/login/newPassword' element={<NewPasswordPage />} />
        <Route element={<ProtectedRoutes/>}></Route>   
    </Routes>
)

export default RoutesMain