
function DropDown({values}) {

    return(
        values.map((value)=>{
            return(
                <option value={value.name}></option>
            )
        })
    )
}

export default DropDown
