import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


function HomeSlider() {
  return (
    <>
      <div className='homeSlider mt-3'>
        <div className='container'>
          <Swiper 
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,}}
            navigation={true}
            spaceBetween={10}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard, Autoplay]} className="swiperslider">
            <SwiperSlide><div className='item hover:scale-105 transition-transform duration-300 rounded-[20px] overflow-hidden'><img src="../Slider.jpg" className='w-full ' alt="Home Slider" /></div></SwiperSlide>
            <SwiperSlide><div className='item hover:scale-105 transition-transform duration-300 rounded-[20px] overflow-hidden'><img src="../slider2.jpg" className='w-full ' alt="Home Slider" /></div></SwiperSlide>
            <SwiperSlide><div className='item hover:scale-105 transition-transform duration-300 rounded-[20px] overflow-hidden'><img src="../Slider3.jpg" className='w-full ' alt="Home Slider" /></div></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default HomeSlider;