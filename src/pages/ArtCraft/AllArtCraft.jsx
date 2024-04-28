import { Helmet } from "react-helmet"
import { Link, useLoaderData } from "react-router-dom"


const AllArtCraft = () => {
  const data = useLoaderData()

  return (
    <>
    <Helmet>
      <title>All ArtCraft</title>
    </Helmet>
    {!data ? <div className='md:h-96 h-40 flex items-center justify-center'>
    <span className="loading loading-spinner loading-lg"></span>
  </div> : <div className="overflow-x-auto lg:mx-20 h-screen">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>Rating</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody >
        
        {
          data?.map((item, index) => <tr key={item._id} className="hover:bg-base-200">
          <th>{index + 1}</th>
          <td>{item?.item_name}</td>
          <td>{item?.price}$</td>
          <td>{item?.rating}</td>
          <td><Link to={`/view_details/${item?._id}`} >View details</Link></td>
        </tr>)
        }
      </tbody>
    </table>
  </div>}
  </>
  )
}

export default AllArtCraft