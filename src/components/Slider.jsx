import { useContext, useEffect, useState } from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CraftContext } from '../Root';


const Slider = () => {
  const [data, setData] = useState([])

  const {render} = useContext(CraftContext)

  useEffect(() => {
    fetch('/Data.json')
    .then((datas) => {
       return datas.json()
    })
    .then((datas) => {

       setData(datas?.items)
     })
     .catch((err) => console.log(err))
  },[render])


  return (
    <div className='mx-20 lg:mt-36 mt-20'>

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
        {data.map((items) => <SwiperSlide key={items.id}>
          <div className='h-full w-full'>
            <img className='h-full w-full object-cover object-center' src={items?.image} alt='image not found'/>
            <h1 className='absolute sm:top-5 sm:left-5 left-2 top-2 inset-0 font-bold text-white lg:text-4xl md:text-3xl sm:text-2xl text-xs'>{items.item_name}</h1>
          </div>
        </SwiperSlide>)}
        
      </Swiper>

      </div>
  )
}

export default Slider