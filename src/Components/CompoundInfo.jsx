import hazardRange from "../assets/data.js"
function CompoundInfo({ compund }) {
    const  conc  = hazardRange[compund]
  return (
    <div className="flex flex-col">
        <span>0-50 {conc[0]}</span>
        <span>51-100 {conc[1]}</span>
        <span>101-150 {conc[2]}</span>
        <span>151-200 {conc[3]}</span>
        <span>201-300 {conc[4]}</span>
        <span>300-500 {conc[5]}</span>
    </div>
  )
}

export default CompoundInfo
