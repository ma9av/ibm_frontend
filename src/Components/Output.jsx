import Card from "./Card"

function Output({ data }) {

  return (
    <div className="p-5 grid grid-cols-3 gap-3">
        {Object.keys(data).map((key) =>{
            return(
                <Card  compound={key} values={data[key]} />
                )
        })}
    </div>
  )
}


export default Output
