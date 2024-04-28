import { useContext, useEffect, useState } from "react";
import CraftItemSectionCard from "./CraftItemSectionCard";
import { Fade } from "react-awesome-reveal";
import { CraftContext } from "../Root";

const CraftItemSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { render } = useContext(CraftContext);
  useEffect(() => {
    fetch("https://art-craft-server-three.vercel.app/six_data")
      .then((response) => {
        return response.json();
      })
      .then((items) => {
        setData(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [render]);
  console.log(data);
  return (
    <Fade>
      <div>
        <h1 className="text-4xl font-bold text-center">Craft items section</h1>
      </div>

      {loading ? (
        <div className="flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 my-20">
          {data &&
            data?.map((item) => (
              <CraftItemSectionCard key={item?._id} item={item} />
            ))}
        </div>
      )}
    </Fade>
  );
};

export default CraftItemSection;
