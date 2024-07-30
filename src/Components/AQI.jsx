import { useState } from "react";
import Output from "./Output";
import { CityComponent, CountryComponent,  StateComponent } from "./CountryComponent.jsx";
import {  useLocationContext } from "../Context/LocationContext.jsx";

const api_key = import.meta.env.VITE_API_KEY

function AQI() {
    const { cityName } = useLocationContext()
    const [aqi, setAqi] = useState(false)

    async function fetchData(city){

        const response = await fetch(`https://api.api-ninjas.com/v1/airquality?city=${city}`,{
          headers: new Headers({
              'X-Api-Key': api_key
          })
      })
  
      const data = await response.json()
      console.log(data)
      setAqi(data)
  }
  
  return (
    <div>

    <div className="flex flex-col gap-2">
        
        <CountryComponent />
        <StateComponent />
        <CityComponent />

        
    </div>

    <button className= "bg-blue-800 text-white w-20 rounded-lg p-2" onClick={()=> fetchData(cityName)}
    > get aqi </button>

    {aqi&& <Output data={aqi}/>}


    </div>
  )
}

export default AQI;
