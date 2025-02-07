import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"



function App() {


  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
      
      <Footer />
    </>
  )
}

export default App
