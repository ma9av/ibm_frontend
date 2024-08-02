import AQI from "./Components/AQI"
import Navbar from "./Components/Navbar"
import { ContextProvider } from "./Context/LocationContext"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import './App.css'
import Hero from "./Components/Hero"

function App() {
  return (
    <div className="">
        <ContextProvider>
            <div className="">
              <BrowserRouter>
                <Routes>
                 <Route path="/" Component={Hero}/> 
                 <Route path="/dashboard" Component={AQI}/> 
                </Routes>
             </BrowserRouter>
        

            </div>
        </ContextProvider>
    </div>
  )
}

export default App
