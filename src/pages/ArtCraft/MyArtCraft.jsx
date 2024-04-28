import { useContext, useEffect, useState } from "react";
import { CraftContext } from "../../Root";
import MyArtCraftCard from "../../components/MyArtCraftCard";
import DeleteModal from "../../components/Modals/DeleteModal";
import { Helmet } from "react-helmet";

const MyArtCraft = () => {
  const [data, setData] = useState([]);
  const { user, deleteModal, render } = useContext(CraftContext);
  const [customization, setCustomization] = useState("");
  const [reload, setReload] = useState(true);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(
      `https://art-craft-server-three.vercel.app/my_art_crafts/${user?.email}`
    )
      .then((response) => response.json())
      .then((items) => {
         setData(items);
         setLoading(false);
 
      })
      .catch((err) => {
         console.error(err);
         setLoading(false);
      });
  }, [user?.email, reload, render]);

  const handleCustomization = (e) => {
    e.preventDefault();
    fetch(
      `https://art-craft-server-three.vercel.app/customization/${customization}/${user?.email}`
    )
      .then((response) => response.json())
      .then((items) => setData(items))
      .catch((err) => console.error(err));
  };

  const handleReloadData = () => {
    setReload(!reload);
  };
  console.log(data);
  return (
    <div>
    <Helmet>
      <title>My Art Craft</title>
      <meta name="description" content="My Art Craft" />
    </Helmet>
      {!loading ? (
        <>
      
          <div className="flex items-center justify-center mb-10">
            <form
              onSubmit={handleCustomization}
              className="flex items-center justify-center gap-5"
            >
              <select
                onChange={(e) => setCustomization(e.target.value)}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Customization
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <button
                type="submit"
                disabled={!customization ? true : false}
                className="btn btn-primary"
              >
                Sort
              </button>
              <button onClick={handleReloadData} className="btn btn-primary">
                Default
              </button>
            </form>
          </div>
          <div className="lg:m-20 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {data?.map((item) => (
              <MyArtCraftCard key={item?._id} item={item} />
            ))}
          </div>{" "}
        </>
      ) : (
        <>
        <div className="h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      )}
      {data.length === 0 && !loading && (
            <div className="flex items-center h-[calc(100vh-200px)] justify-center">
              <h1 className="text-2xl text-gray-600">
                You have no art crafts yet.
              </h1>
            </div>
          )}
      {deleteModal && (
        <div className="absolute top-0 h-screen flex items-center justify-center w-screen bg-slate-500 bg-opacity-40">
          <DeleteModal />
        </div>
      )}
    </div>
  );
};

export default MyArtCraft;
