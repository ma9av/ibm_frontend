import { useState } from "react"
import Card from "./Card"

// flex flex-row gap-2 flex-wrap
function Output({ data }) {

  const [ clicked, setClicked ] = useState(false)
  const [clickedCompound, setClickedCompound ] = useState("")

  const [ clickedData ] = Object.keys(data).filter(key => key == clickedCompound)

  return (
    <div className={ clicked ? "p-5 " : "p-5 grid grid-cols-3 gap-3 "}>
        {clicked ?
        <Card compound={clickedData} values={data[clickedData]} clicked={setClicked} setCompound = {setClickedCompound} attr = " w-2/3"
        clickStatus={clicked}/> :
        Object.keys(data).map((key, index) =>{
            // console.log(key)
            return(
                <Card compound={key} values={data[key]} clicked={setClicked} setCompound = {setClickedCompound} clickStatus={clicked}/>
                
                )
        })}
    </div>
  )
}


export default Output
