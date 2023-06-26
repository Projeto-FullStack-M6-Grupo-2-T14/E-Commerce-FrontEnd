import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home'
import RegisterPage from 'src/pages/register'
import LoginPage from 'src/pages/login'
import ProfileAdminPage from 'src/pages/profileAdmin'
import ProfileUserPage from 'src/pages/profileUser'
import NewPasswordPage from 'src/pages/newPassword'
import ProtectedRoutes from 'src/components/protectedRoutes'
import SendEmailPage from 'src/pages/sendEmail'
import HomeProfile from 'src/pages/homeProfile'


const RoutesMain = () => (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login/newPassword' element={<NewPasswordPage />} />
        <Route path='/login/sendEmail' element={<SendEmailPage />} />
        <Route element={<ProtectedRoutes />}>
            <Route path='/admin' element={<ProfileAdminPage />} />
            <Route path='/user' element={<ProfileUserPage />} />
            <Route path='/home' element={<HomeProfile />} />
        </Route>
    </Routes>
)

export default RoutesMain