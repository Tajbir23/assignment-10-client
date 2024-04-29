import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


const CraftItemSectionCard = ({item}) => {
	console.log(item)
  return (
    <div className="w-full rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 flex flex-col">
	<img src={item?.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8 flex-grow">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{item?.item_name}</h2>
			<p className="dark:text-gray-800">{item?.short_description}</p>
			<p className="dark:text-gray-800 text-xl">Category : {item?.subcategory_name}</p>
			<p className="dark:text-gray-800 text-xl">Price : {item?.price}$</p>
		</div>
        <div className="flex-grow"></div>
		<Link to={`view_details/${item?._id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View details</Link>
	</div>
</div>
  )
}

CraftItemSectionCard.propTypes = {
	item : PropTypes.node
}
export default CraftItemSectionCard