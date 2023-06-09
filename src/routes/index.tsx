import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/home'

const RoutesMain = () => (
    <Routes>
        <Route path='/' element={<HomePage />}/>
    </Routes>
)

export default RoutesMain