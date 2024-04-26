import { useContext, useEffect, useState } from "react"
import Slider from "../components/Slider"
import CraftItemSection from "./ArtCraft/CraftItemSection"
import { CraftContext } from "../Root"


const Body = () => {
  const [data, setData] = useState([])

  const {render} = useContext(CraftContext)

  useEffect(() => {
    fetch('http://localhost:5000/sub_categories')
    .then((response) => response.json())
    .then((items) => setData(items) )
    .catch((err) => console.error(err))
  },[render])
  return (
    <div>
        <Slider />
        <div className="m-20">
          <CraftItemSection />
        </div>
    </div>
  )
}

export default Body