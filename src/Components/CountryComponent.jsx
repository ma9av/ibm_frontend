import { Country, State, City } from "country-state-city"
import { useMemo, useState } from "react"
import { useLocationContext } from "../Context/LocationContext";
import DropDown from "./DropDown";


export function CountryComponent() {
    const { setCountryCode ,setFlag } = useLocationContext()

    const [country, setCountry] = useState("")

    const countries = useMemo(()=> Country.getAllCountries(),[])

    const [code] = useMemo(()=> countries.filter(entity => entity.name === country),[country])

    setCountryCode(code?.isoCode)
    console.log(code?.flag);
    setFlag(code?.flag)

    return (
        <div className=""> 
              <label htmlFor="con"> Enter your country </label>          
      <input list="countries" type="text" id="con" onChange={(e) => setCountry(e.target.value)} value={country} className=" bg-blue-200 md:absolute md:right-10 p-1 rounded-lg text-dark-blue"/>
      <datalist id="countries">
        <DropDown values={countries}/>
      </datalist>
    </div>
  )
}

export function StateComponent() {
    const { countryCode , setStateCode } = useLocationContext()

    const [state, setState] = useState("")

    const states = useMemo(()=> State.getStatesOfCountry(countryCode) ,[countryCode])

    const [code] = useMemo(()=> states.filter(entity => entity.name === state),[state])
    console.log(code)
    setStateCode(code?.isoCode)

  return (
    <div className="">                 
    <label htmlFor="sta"> Enter your state </label>
      <input type="text" list="states" id="sta" onChange={(e) => setState(e.target.value)} value={state} className=" bg-blue-200 md:absolute md:right-10 p-1 rounded-lg text-dark-blue"/>
      <datalist id="states">
        <DropDown values={states} />
      </datalist>
    </div>
  )
}

export function CityComponent(){
    const {countryCode, stateCode, setCityName, cityName } = useLocationContext()
    const cities = useMemo(()=> City.getCitiesOfState(countryCode,stateCode),[stateCode])
    return(
        <div className=""> 
          <label htmlFor="cit"> Enter your city </label>
            <input type="text" list="cities" id="cit" onChange={(e) => setCityName(e.target.value)} value={cityName} className=" bg-blue-200 md:absolute md:right-10 p-1 rounded-lg text-dark-blue"/>
            <datalist id="cities">
                <DropDown values={cities} />
            </datalist>
        </div>
    )
}
