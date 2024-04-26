import { Link } from "react-router-dom"
import PropTypes from 'prop-types';


const ArtCraftCategory = ({item}) => {

  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 flex flex-col">
    <img src={item?.image} alt="" className="object-cover object-center w-[300px] rounded-t-md h-72 dark:bg-gray-500" />
    <div className="flex flex-col justify-between p-6 space-y-8 flex-grow">
        <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{item?.name}</h2>
        </div>
        <div className="flex-grow"></div> 
        <Link to={`category/${item?.name}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">Show items</Link>
    </div>
</div>

  )
}

ArtCraftCategory.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default ArtCraftCategory