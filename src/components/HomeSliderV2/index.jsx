import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from '@mui/material';

function HomeSliderV2() {
  return (
    <>
      <div className='homeSliderV2'>
        <Swiper
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          spaceBetween={10}
          modules={[Navigation, Autoplay, Pagination]} className="swipersliderV2 ">
          <SwiperSlide>
            <div className='item hover:scale-105 transition-transform duration-300 rounded-[10px] overflow-hidden relative'>
              <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-1.jpg" className='w-full' alt="Home Slider" />

              <div className='absolute item top-15 -right-[120%] transition-all opacity-0 w-[50%] z-50'>
                <h3 className='font-[500] text-[20px] relative -right-[120%] opacity-0 transition-all duration-900'>Big Saving Days Sale</h3>
                <h3 className='font-[600] text-[35px] relative -right-[120%] opacity-0 transition-all duration-1100 mt-5'>Women Solid Round Green T-Shirt</h3>
                <h3 className='font-[500] text-[20px] relative -right-[120%] opacity-0 transition-all duration-1100 mt-6'>Starting At Only <span className='font-[600] text-[30px] text-[#ff5252]'>$59.00</span></h3>
                <Button className='button-org relative -right-[120%] opacity-0 !transition-all !duration-900 !mt-6'>SHOP NOW</Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='item hover:scale-105 transition-transform duration-300 rounded-[10px] overflow-hidden'>
              <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_imageslider/views/img/sample-2.jpg" className='w-full ' alt="Home Slider" />

              <div className='absolute item top-15 -right-[120%] transition-all opacity-0 w-[50%] z-50'>
                <h3 className='font-[500] text-[20px] relative -right-[120%] opacity-0 transition-all duration-900'>Big Saving Days Sale</h3>
                <h3 className='font-[600] text-[35px] relative -right-[120%] opacity-0 transition-all duration-1100 mt-5'>Buy Modern Chair In Black Color</h3>
                <h3 className='font-[500] text-[20px] relative -right-[120%] opacity-0 transition-all duration-1100 mt-10'>Starting At Only <span className='font-[600] text-[30px] text-[#ff5252]'>$99.00</span></h3>
                <Button className='button-org relative -right-[120%] opacity-0 !transition-all !duration-900 !mt-6'>SHOP NOW</Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default HomeSliderV2;