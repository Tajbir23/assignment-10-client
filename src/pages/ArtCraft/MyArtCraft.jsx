import { useContext, useEffect, useState } from "react";
import { CraftContext } from "../../Root";
import MyArtCraftCard from "../../components/MyArtCraftCard";

const MyArtCraft = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(CraftContext);
  const [customization, setCustomization] = useState('')
  const [reload, setReload] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:5000/my_art_crafts/${user?.email}`)
      .then((response) => response.json())
      .then((items) => setData(items))
      .catch((err) => console.error(err));
  }, [user?.email, reload]);

  const handleCustomization = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/customization/${customization}/${user?.email}`)
     .then((response) => response.json())
     .then((items) => setData(items))
     .catch((err) => console.error(err));
  }

  const handleReloadData = () => {
    setReload(!reload)
  }
  console.log(data);
  return (
    <>
      {
        data && data.length > 0 ? <> <div className="flex items-center justify-center mb-10">
        <form onSubmit={handleCustomization} className="flex items-center justify-center gap-5">
          <select onChange={(e) => setCustomization(e.target.value)} className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Customization
            </option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select>
          <button type="submit" disabled={!customization ? true : false} className="btn btn-primary">Sort</button>
          <button onClick={handleReloadData} className="btn btn-primary">Default</button>
        </form>
      </div>
      <div className="lg:m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {data?.map((item) => (
          <MyArtCraftCard key={item?._id} item={item} />
        ))}
      </div> </> : <div className="h-screen flex items-center justify-center">
      <h1 className="lg:text-6xl text-3xl font-bold">No data found</h1>
    </div>
      }
      
    </>
  );
};

export default MyArtCraft;
