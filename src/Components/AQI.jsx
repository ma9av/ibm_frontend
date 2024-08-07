import { useState } from "react";
import Output from "./Output";
import { CityComponent, CountryComponent,  StateComponent } from "./CountryComponent.jsx";
import {  useLocationContext } from "../Context/LocationContext.jsx";
import Navbar from "./Navbar.jsx";
import Predata from "./Predata.jsx";

const api_key = import.meta.env.VITE_API_KEY

function AQI() {
    const { cityName, flag } = useLocationContext()
    const [aqi, setAqi] = useState(false)
    const [shimmer, setShimmer] = useState(false)

    async function fetchData(city){

        const response = await fetch(`https://api.api-ninjas.com/v1/airquality?city=${city}`,{
          headers: new Headers({
              'X-Api-Key': api_key
          })
      })
  
      const data = await response.json()
      setShimmer(false)
      if (data.error){
        alert(data.error)
        return
      }

      setAqi(data)

  }
  
  return (
    

    <div className="h-screen">
            <Navbar />

        <div className="flex flex-row gap-2 p-5">

            <div className="flex flex-col gap-4 w-1/3 text-white relative">
        
            <CountryComponent />
            <StateComponent />
            <CityComponent />
    
            </div>
            <div className="w-1/3">

            </div>

            <div className=" w-1/2 flex justify-center">
                 <span className="text-8xl ">
                    {flag}
                    </span>
            </div>


        </div>

        <div className="p-5">
    <button className= "bg-blue-800 text-white w-20 rounded-lg p-2" onClick={()=> {
        setShimmer(true)
        setAqi(false)
        fetchData(cityName)}}
    > get aqi </button>

        </div>


    {aqi ? <Output data={aqi}/> : <Predata shimmer={shimmer}/>}
    {aqi && <p className="text-red-700 text-lg bg-green-300 absolute top-4 right-4 rounded-lg p-2 message"> Click on the cards to know more </p>}

    </div>
  )
}

export default AQI;
