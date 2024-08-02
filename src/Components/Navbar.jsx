import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <nav className="block h-auto gap-2 p-2  bg-inherit sticky "> 
            <Link className=" text-3xl p-5 text-white cursor-pointer" to="/"> ← </Link>
        </nav>
    </div>
  )
}

export default Navbar
