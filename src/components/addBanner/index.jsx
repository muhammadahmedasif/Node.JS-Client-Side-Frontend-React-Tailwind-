import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import Addscard from '../addscontainer';


function AddsBanner(props){

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
        className='swiperslider11 overflow-hidden'
    >              
        <SwiperSlide>
            <Addscard image = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x-GfOkVOSJ1ZPppNydGXOIUQvYXkdpwkKw&s"}/>    
        </SwiperSlide>                                           
        <SwiperSlide>
            <Addscard image = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x-GfOkVOSJ1ZPppNydGXOIUQvYXkdpwkKw&s"}/>    
        </SwiperSlide>                                           
        <SwiperSlide>
            <Addscard image = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x-GfOkVOSJ1ZPppNydGXOIUQvYXkdpwkKw&s"}/>    
        </SwiperSlide>                                           
        <SwiperSlide>
            <Addscard image = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x-GfOkVOSJ1ZPppNydGXOIUQvYXkdpwkKw&s"}/>    
        </SwiperSlide>                                           
        <SwiperSlide>
            <Addscard image = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x-GfOkVOSJ1ZPppNydGXOIUQvYXkdpwkKw&s"}/>    
        </SwiperSlide>                                           
        <SwiperSlide>
            <Addscard image = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x-GfOkVOSJ1ZPppNydGXOIUQvYXkdpwkKw&s"}/>    
        </SwiperSlide>                                           
        <SwiperSlide>
            <Addscard image = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x-GfOkVOSJ1ZPppNydGXOIUQvYXkdpwkKw&s"}/>    
        </SwiperSlide>                                           
                                                                                           
    </Swiper>
    </div>
    </div>
    )
}


export default AddsBanner