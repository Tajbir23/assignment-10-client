import { useContext, useEffect, useState } from "react"
import Slider from "../components/Slider"
import ArtCraftCategory from "./ArtCraft/ArtCraftCategory"
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
        <div>
          <div className="m-20">
            <h1 className="text-center text-4xl font-bold">Art & Craft Categories</h1>
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {data?.map((item) => <ArtCraftCategory key={item?._id} item={item} />)}
          </div>
        </div>
    </div>
  )
}

export default Body