import AQI from "./Components/AQI"
import Navbar from "./Components/Navbar"
import { ContextProvider } from "./Context/LocationContext"
import { BrowserRouter , Routes, Route } from "react-router-dom"
import './App.css'
import Hero from "./Components/Hero"
import About from "./Components/About"

function App() {
  return (
    <div className="">
        <ContextProvider>
            <div className="">
              <BrowserRouter>
                <Routes>
                 <Route path="/" Component={Hero}/> 
                 <Route path="/dashboard" Component={AQI}/> 
                 <Route path="/about" Component={About}/> 
                </Routes>
             </BrowserRouter>
        

            </div>
        </ContextProvider>
    </div>
  )
}

export default App
