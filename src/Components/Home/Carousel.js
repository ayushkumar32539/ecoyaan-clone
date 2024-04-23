// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Styles/Carousel.css';

// import required modules
import { Autoplay } from 'swiper/modules';



const Carousel = () => {
  return (
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
    // navigation={true}
    modules={[Autoplay]}
    className="mySwiper"
  >
    <SwiperSlide className='img-container'> <img src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" alt="Logo" /> </SwiperSlide>
    <SwiperSlide className='img-container'><img src="https://ecoyaan.com/images/carousel-1.png" alt="Logo" /></SwiperSlide>
    <SwiperSlide className='img-container'><img src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" alt="Logo" /></SwiperSlide>
  </Swiper>
  );
};

export default Carousel;
