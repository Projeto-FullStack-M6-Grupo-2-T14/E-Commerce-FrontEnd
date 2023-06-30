import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home'
import RegisterPage from 'src/pages/register'
import LoginPage from 'src/pages/login'
import NewPasswordPage from 'src/pages/newPassword'
import ProtectedRoutes from 'src/components/protectedRoutes'
import SendEmailPage from 'src/pages/sendEmail'
import ProfileSellerPage from 'src/pages/profileSeller'
import DetailPoster from 'src/pages/detailPoster'


const RoutesMain = () => (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/login/newPassword' element={<NewPasswordPage />} />
        <Route path='/login/sendEmail' element={<SendEmailPage />} />
        <Route path='/product' element={<DetailPoster />} />
        <Route path='/profile' element={<ProtectedRoutes />}>
            <Route path='/profile/seller' element={<ProfileSellerPage />} />
        </Route>
    </Routes>
)

export default RoutesMain