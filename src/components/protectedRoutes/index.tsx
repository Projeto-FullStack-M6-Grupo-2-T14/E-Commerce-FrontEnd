import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "src/contexts/userContext";

const ProtectedRoutes = () => {
    const { userData } = useContext(UserContext);  

    const isSeller = userData && userData.is_seller;

    return (
      <>
        {userData ? (
          
          isSeller ? (
            <Navigate to="/anuncios" replace />
          ) : (
            <Outlet />
          )
        ) : (
          <Navigate to="/login" replace />
        )}
      </>
    );
  };
  
  export default ProtectedRoutes;