import { Country, State, City } from "country-state-city"
import { useMemo, useState } from "react"
import { useLocationContext } from "../Context/LocationContext";


export function CountryComponent() {
    const { setCountryCode } = useLocationContext()

    const [country, setCountry] = useState("")

    const countries = useMemo(()=> Country.getAllCountries(),[])

    const [code] = useMemo(()=> countries.filter(entity => entity.name === country),[country])

    setCountryCode(code?.isoCode)

    return (
        <div>
      <input list="countries" type="text" onChange={(e) => setCountry(e.target.value)} value={country}/>
      <datalist id="countries">
       {
       countries?.map(country => {
        return(
            <option value={country.name} ></option>
        )
       })}
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
    <div>
      <input type="text" list="states" onChange={(e) => setState(e.target.value)} value={state}/>
      <datalist id="states">
        {
            states?.map(state =>{
                return(
                    <option value={state.name}></option>
                )
            })
        }

      </datalist>
    </div>
  )
}

export function CityComponent(){
    const {countryCode, stateCode, setCityName, cityName } = useLocationContext()
    const cities = useMemo(()=> City.getCitiesOfState(countryCode,stateCode),[stateCode])
    return(
        <div>
            <input type="text" list="cities" onChange={(e) => setCityName(e.target.value)} value={cityName}/>
            <datalist id="cities">
                {
                    cities.map(city=>{
                        return(
                            <option value={city.name}></option>
                        )
                    })
                }

            </datalist>
        </div>
    )
}
