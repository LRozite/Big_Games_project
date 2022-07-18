import React, { useRef, useState }  from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import './topproducts.less'
import TP1 from '../../assets/domino.jpg'
import TP2 from '../../assets/ricuracu.jpg'
import TP3 from '../../assets/dambrete.jpg'
import TP4 from '../../assets/dominoBerni.jpg'
import TP5 from '../../assets/jenga.jpeg'
import TP6 from '../../assets/cirks.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

function Topproducts() {
      return (
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
        <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP1} />
              </div>
                <h5>Slide 1</h5></SwiperSlide>
        <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP2} />
              </div>
                <h5>Slide 1</h5></SwiperSlide>
                <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP3} />
              </div>
                <h5>Slide 1</h5></SwiperSlide>
                <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP4} />
              </div>
                <h5>Slide 1</h5></SwiperSlide>
                <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP5} />
              </div>
                <h5>Slide 1</h5></SwiperSlide>
                <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP6} />
              </div>
                <h5>Slide 1</h5></SwiperSlide>
          </Swiper>
        </>
      );
    }
    
    

export default Topproducts