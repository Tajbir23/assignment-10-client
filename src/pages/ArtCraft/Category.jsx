import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Category = () => {
    const category = useLoaderData();
    const {id} = useParams()
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center m-20 mt-32">
        <Helmet>
            <title>{id}</title>
        </Helmet>
            {category.map((item) =>  {
                const { image, itemName, subcategoryName, shortDescription, price, rating, processingTime } = item;
                return (
                    <div key={item?._id} className="max-w-sm rounded overflow-hidden flex flex-col flex-grow shadow-lg">
                        <img className="w-[300px] h-[300px]" src={image} alt={itemName} />
                        <div className="px-6 flex-grow py-4">
                            <div className="font-bold text-xl mb-2">{itemName}</div>
                            <p className=" text-base mb-2">{subcategoryName}</p>
                            <p className=" text-base mb-2">{shortDescription}</p>
                            <p className=" font-bold text-xl mb-2">${price}</p>
                            <p className=" text-base mb-2">Rating: {rating} ⭐</p>
                            <p className=" text-base mb-2">Processing Time: {processingTime}</p>
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
