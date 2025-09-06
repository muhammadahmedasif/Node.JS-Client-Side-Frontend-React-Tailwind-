import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import BannerBox from '../BannerBox';


function AddsBannerv2(props){

    return(
    <div className='homecatagorylider py-3 '>
        <div className='container flex items-center'>
    <Swiper
        cssMode = {true}
        navigation={true}
        slidesPerView={props.item}
        spaceBetween={5}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className='swiperslider11'
    >              
        <SwiperSlide>
             <BannerBox image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} info="left" description1="Samsung Gear" description2 = {"VR Camera"} price="$129.00" className="flex-1" />
        </SwiperSlide>                                                                                                                                                                           
        <SwiperSlide>
             <BannerBox image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} info="left" description1="Samsung Gear" description2 = {"VR Camera"} price="$129.00" className="flex-1" />
        </SwiperSlide>                                                                                                                                                                           
        <SwiperSlide>
             <BannerBox image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} info="left" description1="Samsung Gear" description2 = {"VR Camera"} price="$129.00" className="flex-1" />
        </SwiperSlide>                                                                                                                                                                           
        <SwiperSlide>
             <BannerBox image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} info="left" description1="Samsung Gear" description2 = {"VR Camera"} price="$129.00" className="flex-1" />
        </SwiperSlide>                                                                                                                                                                           
        <SwiperSlide>
             <BannerBox image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/sub-banner-1.jpg"} info="left" description1="Samsung Gear" description2 = {"VR Camera"} price="$129.00" className="flex-1" />
        </SwiperSlide>                                                                                                                                                                           
    </Swiper>
    </div>
    </div>
    )
}


export default AddsBannerv2