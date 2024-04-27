import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FaQ from "./components/FaQ"


function App() {


  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
      <div className="m-20">
        <FaQ />
      </div>
      <Footer />
    </>
  )
}

export default App
