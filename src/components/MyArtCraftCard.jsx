import { useContext } from "react"
import { CraftContext } from "../Root"
import { Link } from "react-router-dom"
import propTypes from "prop-types"


const MyArtCraftCard = ({item}) => {
  const {setDeleteItem, setDeleteModal} = useContext(CraftContext)

    const { image, item_name, price, rating, customization, stock_status } = item

    const handleDelete = (item) => {
      setDeleteItem(item)
      setDeleteModal(true)
    }
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-300">
      <img className="w-full h-48 object-cover" src={image} alt={item_name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{item_name}</div>
        <p className="text-gray-700 text-base mb-2">
          Price: ${price}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Rating: {rating}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Customization: {customization}
        </p>
        <p className="text-gray-700 text-base mb-4">
          Stock Status: {stock_status}
        </p>
        <div className="flex justify-between items-center">
          <Link to={`/update/${item?._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 transition duration-300 transform hover:scale-105">
            Update
          </Link>
          <button onClick={() => handleDelete(item)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 transform hover:scale-105">
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

MyArtCraftCard.propTypes = {
  item: propTypes.node
}

export default MyArtCraftCard