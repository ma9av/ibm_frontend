import {  createContext, useContext, useState } from "react";

const LocationContext = createContext()

export function ContextProvider({children}){
    const [ countryCode, setCountryCode] = useState("")
    const [ stateCode, setStateCode] = useState("")
    const [ cityName , setCityName ] = useState("")
    const [ flag , setFlag ] = useState("")

    return(
        <LocationContext.Provider value={{countryCode, setCountryCode, stateCode, setStateCode, cityName, setCityName, setFlag, flag}}>
            { children }
        </LocationContext.Provider>
    )
}

export function useLocationContext(){
    return useContext(LocationContext)
}
