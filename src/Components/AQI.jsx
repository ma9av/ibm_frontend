import { useState } from "react";
import Output from "./Output";

const api_key = import.meta.env.VITE_API_KEY

function AQI() {
    const [city, setCity] = useState("")
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
        <div className=" "> 
        <label htmlFor="country"> Enter your country </label>
        <input type="text" id="country"></input>
        </div>

        <div>
        <label htmlFor="state">Enter your state </label>
        {/* <input type="text" id="state"></input> */}
        <select name="Enter your country" id="">
            <option value="">India</option>
            <option value="">Bangladesh</option>
            <option value="">Sri Lanka</option>
        </select>
        </div>

        <div>
        <label htmlFor="city">Enter your city </label>
        <input type="search" id="city" value={city} onChange={(e)=>{
            setCity(e.target.value);
            
        }}></input>
        </div>
    </div>

    <button className= "bg-blue-800 text-white w-20 rounded-lg p-2" onClick={()=> fetchData(city)}
    > get aqi </button>

    {aqi&& <Output data={aqi}/>}


    </div>
  )
}

export default AQI;
