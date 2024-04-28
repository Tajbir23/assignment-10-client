import { useContext, useEffect, useState } from "react";
import Slider from "../components/Slider";
import ArtCraftCategory from "./ArtCraft/ArtCraftCategory";
import { CraftContext } from "../Root";
import CraftItemSection from "../components/CraftItemSection";
import { Fade } from "react-awesome-reveal";
import FaQ from "../components/FaQ";
import Review from "../components/Review";

const Body = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { render } = useContext(CraftContext);

  useEffect(() => {
    fetch("https://art-craft-server-three.vercel.app/sub_categories")
      .then((response) => response.json())
      .then((items) => {
        setData(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [render]);
  return (
    <div>
      <Slider />
      <div className="mt-20 md:mx-20 mx-5">
        <CraftItemSection />
      </div>
      <Fade>
        <div className="my-20 md:mx-20 mx-5">
          <h1 className="text-center text-4xl font-bold">
            Art & Craft Categories
          </h1>
        </div>
        {loading ? (
          <div className="md:h-96 h-40 flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className=" md:mx-20 mx-5 mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {data?.map((item) => (
              <ArtCraftCategory key={item?._id} item={item} />
            ))}
          </div>
        )}
      </Fade>
      <div className="md:mx-20 my-20 mx-5">
        <FaQ />
      </div>
      <div className="flex items-center justify-center">
        <Review />
      </div>
    </div>
  );
};

export default Body;
