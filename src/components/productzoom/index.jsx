import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

function ProductZoom(props) {
    const [imagesource, setimagesource] = useState('https://i.pinimg.com/736x/9b/41/b8/9b41b8f952c7b7736937566c2d5bb3c3.jpg')
    return (
        <>
            <div className='flex gap-6'>
                <div className='w-[20%] overflow-hidden h-[500px]'>
                    <Swiper
                        direction={'vertical'}
                        cssMode={true}
                        navigation={true}
                        slidesPerView={props.slides || 4}
                        spaceBetween={props.distance || 20}
                        modules={[Navigation]}
                        className="productzoomsidebar h-full !pt-12 !pb-12 overflow-hidden rounded-md border border-gray-300"
                    >
                        {props.images?.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={img}
                                    onClick={() => setimagesource(img)}
                                    className={`cursor-pointer hover:scale-112 transition-all duration-400 ${imagesource === img ? 'opacity-100':'opacity-30'}`}
                                    alt={`thumb-${idx}`}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='w-[80%] flex items-center h-[500px]'>
                    <InnerImageZoom src={imagesource} className='h-full overflow-hidden rounded-md border border-gray-300' zoomType='hover' zoomScale={1} />
                </div>
            </div>
        </>
    )
}

export default ProductZoom;