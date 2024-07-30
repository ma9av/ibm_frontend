import AQI from "./Components/AQI"
import Navbar from "./Components/Navbar"
import { ContextProvider } from "./Context/LocationContext"


function App() {
  return (
    <div className="">
        <Navbar />
        <div className="p-3">
        <ContextProvider>

        <AQI />
        </ContextProvider>

        </div>
    </div>
  )
}

export default App
