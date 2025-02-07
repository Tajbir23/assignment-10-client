import { useContext, useEffect, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CraftContext } from "../Root";

const Slider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { render } = useContext(CraftContext);

  useEffect(() => {
    fetch("https://art-craft-server-three.vercel.app/sub_categories")
      .then((datas) => {
        return datas.json();
      })
      .then((datas) => {
        console.log(datas);
        setData(datas);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [render]);

  return (
    <div className="md:mx-20 mx-5 lg:mt-36 mt-20">
      {loading ? (
        <div className="md:h-96 h-40 flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="md:h-96 h-40 mt-10 z-[-1]"
        >
          {data.map((items) => (
            <SwiperSlide key={items?._id}>
              {console.log(items)}
              <div className="h-full w-full">
                <img
                  className="h-full w-full object-cover object-center"
                  src={items?.image}
                  alt="image not found"
                />
                <h1 className="absolute sm:top-5 sm:left-5 left-2 top-2 inset-0 font-bold text-blue-800 lg:text-4xl md:text-3xl sm:text-2xl text-xs">
                  {items.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Slider;
