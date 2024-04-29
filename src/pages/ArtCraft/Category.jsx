import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Category = () => {
    const category = useLoaderData();
    const {id} = useParams()
    
    console.log(category)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center m-20 mt-32">
        <Helmet>
            <title>{id}</title>
        </Helmet>
            {category.map((item) =>  {
                const { image, item_name, subcategory_name, short_description, price, rating, processing_time } = item;
                return (
                    <div key={item?._id} className="w-full rounded overflow-hidden flex flex-col flex-grow shadow-lg">
                        <img className="w-full h-[300px]" src={image} alt={item_name} />
                        <div className="px-6 flex-grow py-4">
                            <div className="font-bold text-xl mb-2">{item_name}</div>
                            <p className=" text-base mb-2 font-semibold">Subcategory : {subcategory_name}</p>
                            <p className=" text-base mb-2">{short_description}</p>
                            <p className=" font-bold text-xl mb-2">${price}</p>
                            <p className=" text-base mb-2">Rating: {rating} ⭐</p>
                            <p className=" text-base mb-2">Processing Time: {processing_time}</p>
                        </div>
                        <div className="px-6 py-4 mb-5">
                            <Link to={`/view_details/${item?._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Category;
