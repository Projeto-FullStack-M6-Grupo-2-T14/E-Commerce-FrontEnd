import PosterProvider from "./contexts/posterContext"
import UserProvider from "./contexts/userContext"
import RoutesMain from "./routes"


function App() {
  return (
    <>
    <UserProvider>
      <PosterProvider>
        <RoutesMain />
      </PosterProvider>
    </UserProvider>
    </>
  )
}

export default App