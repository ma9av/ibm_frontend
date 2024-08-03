import hazardRange from "../assets/data.js"
function CompoundInfo({ compund, unit }) {
    if (compund === 'overall_aqi'){
      return(
        <table className="p-4 ">
      <thead>
        <td></td>
        <td> aqi </td>
        <td> Remarks </td>
      </thead>
      <tr>
        <td>
        <div className="w-4 h-4 bg-green-600 "></div>
        </td>
        <td> 0-50 </td>
        <td> Good </td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-yellow-600 "></div>
        </td>
        <td> 51-100 </td>
        <td> Satisfactory </td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-orange-600 "></div>
        </td>
        <td> 101-150 </td>
        <td> Moderate </td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-red-600 "></div>
        </td>
        <td> 151-200 </td>
        <td> Unhealthy </td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-purple-600 "></div>
        </td>
        <td> 201-300 </td>
        <td>Very Unhealthy </td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-pink-950 "></div>
        </td>
        <td> 301-500 </td>
        <td> Hazardous </td>
      </tr>
    </table>
      )
    }else{

      
      const  conc  = hazardRange[compund]
      return (
    <table className="p-4 ">
      <thead>
        <td></td>
        <td> aqi </td>
        <td> concentration  ({unit})</td>
      </thead>
      <tr>
        <td>
        <div className="w-4 h-4 bg-green-600 "></div>
        </td>
        <td> 0-50 </td>
        <td>{conc[0]}</td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-yellow-600 "></div>
        </td>
        <td> 51-100 </td>
        <td>{conc[1]}</td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-orange-600 "></div>
        </td>
        <td> 101-150 </td>
        <td>{conc[2]}</td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-red-600 "></div>
        </td>
        <td> 151-200 </td>
        <td>{conc[3]}</td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-purple-600 "></div>
        </td>
        <td> 201-300 </td>
        <td>{conc[4]}</td>
      </tr>
      <tr>
        <td>
        <div className="w-4 h-4 bg-pink-950 "></div>
        </td>
        <td> 301-500 </td>
        <td>{conc[5]}</td>
      </tr>
    </table>
  )
}
}

export default CompoundInfo
