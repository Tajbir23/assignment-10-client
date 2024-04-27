import { useEffect, useState } from "react"
import CraftItemSectionCard from "./CraftItemSectionCard"
import { Fade } from "react-awesome-reveal"

const CraftItemSection = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/six_data')
         .then((response) => response.json())
         .then((items) => setData(items) )
    },[])
    console.log(data)
  return (
    <Fade>
        <div>
            <h1 className="text-4xl font-bold text-center">Craft items section</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 my-20">
            {data && data?.map((item) => <CraftItemSectionCard key={item?._id} item={item} />)}
        </div>
    </Fade>
  )
}

export default CraftItemSection