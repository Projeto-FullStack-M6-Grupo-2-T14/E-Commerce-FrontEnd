import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "src/contexts/userContext";

const ProtectedRoutes = () => {
    const { userData } = useContext(UserContext);  

    return <>{userData ? <Outlet /> : <Navigate to="/login" replace />}</>;
  };
  
  export default ProtectedRoutes;