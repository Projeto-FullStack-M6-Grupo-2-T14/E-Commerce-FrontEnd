import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "src/contexts/userContext";

const ProtectedRoutes = () => {
  const { seller } = useContext(UserContext);
  const token = localStorage.getItem('@TOKEN')

  if (!token && !seller) {
    return <Navigate to="/login" replace />;
  }

  // if (!seller) {
  //   return <Navigate to="/" replace />;
  // }



  // if (isSeller) {
  //   return <Navigate to="/admin" replace />;
  // } else {
  return <Outlet />;
  // }
};

export default ProtectedRoutes;