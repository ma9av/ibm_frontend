import CompoundInfo from "./CompoundInfo"

function Card( { compound, values, clicked , setCompound, attr, clickStatus}) {
    const aqi = isNaN(values) ? values.aqi : values
    

    function selectColor(aqi){

        if( aqi <= 50){
           return 'bg-green-300'
       }
        if(aqi > 50 && aqi <= 100){
   
           return 'bg-yellow-300'
       }
        if(aqi > 100 && aqi <= 150){
   
           return 'bg-orange-300'
       }
        if(aqi > 150 && aqi <= 200){
   
           return 'bg-red-300' 
       }
        if(aqi > 200 && aqi <= 300){
   
           return 'bg-purple-300'
       }
       if(aqi > 300){
           return 'bg-pink-950'
       }

    }

    const color = selectColor(aqi)

  return (
    <div className= {`border-2 p-2 border-black rounded-md ${color} ${attr}`}  onClick={()=>{
        setCompound(compound)
        clicked(prev => !prev)
    }}>
    {compound === 'overall_aqi' ? <h1>Overall_aqi = {values}</h1> : <div>
    <h1>Compund = {compound}</h1>
    <h1>concentration = {values.concentration} ppb</h1>
    <h1>aqi = {values.aqi} </h1>
    </div>
    }
    {clickStatus && <CompoundInfo compund={compound}/>}
    </div>
  )
}

export default Card
