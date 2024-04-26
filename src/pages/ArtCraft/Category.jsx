import { useLoaderData } from "react-router-dom";

const Category = () => {
    const category = useLoaderData();

    console.log(category);
    
    return (
        <div className="flex gap-5 flex-wrap m-20 mt-32">
            {category.map((item) =>  {
                const { image, itemName, subcategoryName, shortDescription, price, rating, processingTime } = item;
                return (
                    <div key={item?._id} className="max-w-sm rounded overflow-hidden flex flex-col flex-grow shadow-lg">
                        <img className="w-full h-[300px]" src={image} alt={itemName} />
                        <div className="px-6 flex-grow py-4">
                            <div className="font-bold text-xl mb-2">{itemName}</div>
                            <p className=" text-base mb-2">{subcategoryName}</p>
                            <p className=" text-base mb-2">{shortDescription}</p>
                            <p className=" font-bold text-xl mb-2">${price}</p>
                            <p className=" text-base mb-2">Rating: {rating} ⭐</p>
                            <p className=" text-base mb-2">Processing Time: {processingTime}</p>
                        </div>
                        <div className="px-6 py-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Category;
