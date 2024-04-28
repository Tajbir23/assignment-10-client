import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom"


const ViewDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const {
        image,
        item_name,
        subcategory_Name,
        short_description,
        price,
        rating,
        customization,
        processing_time,
        stockStatus,
        user_email,
        user_name
      } = data;
    
  return (
    <div className="container lg:h-[calc(100vh-80px)] flex items-center justify-center px-4 py-8 sm:py-12  ">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{item_name}</title>
    </Helmet>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        <img src={image} alt={item_name} className="w-full h-auto lg:h-96 object-cover rounded-lg" />
        <div className="md:px-16 px-4" >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{item_name}</h2>
          <p className="text-gray-600 mb-2">{subcategory_Name}</p>
          <p className="text-lg font-bold text-green-500 mb-2">${price}</p>
          <p className="text-sm mb-2">Rating: {rating} ⭐</p>
          <p className="text-sm mb-2">Customization: {customization}</p>
          <p className="text-sm mb-2">Processing Time: {processing_time}</p>
          <p className="text-sm mb-2">Stock Status: {stockStatus}</p>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Description:</h3>
            <p >{short_description}</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">User Details:</h3>
            <p className="text-sm mb-2">Email: {user_email}</p>
            <p className="text-sm">Name: {user_name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewDetails