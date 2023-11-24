

// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const Banner = () => {
    return (
        <div className=''>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/0Z1ck1r/ap3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/Y2t40hW/ap4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/Vgsm6bQ/ap5.jpg" alt="" /></SwiperSlide>
        
      </Swiper> 
        </div>
    );
};

export default Banner;