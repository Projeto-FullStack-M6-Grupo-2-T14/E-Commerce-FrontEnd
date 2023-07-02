import { ToastContainer } from "react-toastify";
import PosterProvider from "./contexts/posterContext"
import UserProvider from "./contexts/userContext"
import RoutesMain from "./routes"
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
    <>
    <ToastContainer />
    <UserProvider>
      <PosterProvider>
        <RoutesMain />
      </PosterProvider>
    </UserProvider>
    </>
  )
}

export default App