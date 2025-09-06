import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';


function CatSlider() {
    return (
        <div className="homecatagorylider mt-3">
            <div className="container">
                <Swiper
                cssMode = {true}
                navigation={true}
                    slidesPerView={7}
                    spaceBetween={30}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className='swiperslider'
                >
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                    <SwiperSlide><div className="h-[150px] font-[600] bg-white rounded-[20px] flex flex-col py-7 px-3 item items-center justify-center text-center transition-transform duration-300"><img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" alt=" Fashion Catagory" /><h3 className="w-full break-words text-[13px] md:text-[15px]">Fashion</h3></div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default CatSlider;