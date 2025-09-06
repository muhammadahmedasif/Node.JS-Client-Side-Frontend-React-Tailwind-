import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import ContentCard from '../contentCard';

function Products(props) {

    return (
        <div className='homecatagorylider p-3 '>
            <div className='container'>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    slidesPerView={props.item}
                    spaceBetween={5}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className='swiperslider11'
                    preventClicks={false}
                    preventClicksPropagation={false}
                >
                    <SwiperSlide>
                        <ContentCard image={"https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg"} image2={"https://i.pinimg.com/736x/d0/13/2b/d0132bc46cb5efab47f4a03f5c3a42e3.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ContentCard image={"https://i.pinimg.com/1200x/b7/34/80/b734804e1a8c6fd36279090b44d90324.jpg"} image2={"https://i.pinimg.com/736x/8d/5e/95/8d5e951cc6951c61ad8c819efc7169d5.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ContentCard image={"https://img.fantaskycdn.com/f100671d4d76264f245af4e078504c8a_750x.jpeg"} image2={"https://i.pinimg.com/736x/20/45/59/204559b31908ce4b5f6d93c329b10c7a.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ContentCard image={"https://i.pinimg.com/1200x/b2/4e/bb/b24ebb5b9aee5469b674ee0db7ea1a40.jpg"} image2={"https://i.pinimg.com/736x/30/4e/00/304e0036fa32486ac7114895eaa6f204.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ContentCard image={"https://i.pinimg.com/1200x/e4/ac/84/e4ac8473075d9f3b9326071eb8226824.jpg"} image2={"https://i.pinimg.com/1200x/d6/de/74/d6de741b2af9155c8fe92740b9045b71.jpg"} brand={"Sapphire"} discount={'-10'} old={"1200$"} new={"1100$"} description={"Green&Red 1950s Christmas Button Dress"} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}


export default Products