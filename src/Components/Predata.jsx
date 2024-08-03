
function Predata({shimmer}) {
  return (
    <div className="h-1/2 p-5 ">
        <div className=" bg-gray-400 h-full rounded-xl p-5 border-4 border-dashed bg-opacity-60 flex justify-center items-center relative" >
            <span className=" text-white text-opacity-60"> Data will be displayed here </span>
        <div id={shimmer ? "shimmer" : ""}></div>
        </div>
    </div>
  )
}

export default Predata
