import { Navigate, Outlet, useSearchParams } from "react-router-dom";


const ProtectedRoutes = () => {
  const [searchParams] = useSearchParams();

  // const { seller } = useContext(UserContext);
  // const token = localStorage.getItem('@TOKEN')

  const sellerId = searchParams.get('seller_id')

  if (!sellerId) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;

};

export default ProtectedRoutes;