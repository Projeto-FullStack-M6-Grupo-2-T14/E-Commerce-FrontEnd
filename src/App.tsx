import PosterProvider from "./contexts/posterContext"
import UserProvider from "./contexts/userContext"
import RoutesMain from "./routes"
import { Suspense } from "react";


function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <UserProvider>
      <PosterProvider>
        <RoutesMain />
      </PosterProvider>
    </UserProvider>
    </Suspense>
  )
}

export default App