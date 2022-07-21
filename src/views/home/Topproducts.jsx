/**
 * Component author - Līga Rozīte 
 * 
 * */
import React  from 'react'; //, { useRef, useState }
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
        <section id='topproducts'>
        <h3 className='prod__title'>TOP PRODUCTS</h3>
        
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
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
              <img src={TP1} alt="TP1" />
              </div>
              <div className='tp-price__name'>
                <h5 className='tp__name'>DOMINO</h5><h5 className='tp__price'>80&euro;</h5>
              </div>
                </SwiperSlide>
        <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP2} alt="TP2" />
              </div>
              <div className='tp-price__name'>
                <h5 className='tp__name'>CIRCUS</h5><h5 className='tp__price'>120&euro;</h5>
              </div>
              </SwiperSlide>
                <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP3} alt="TP3" />
              </div>
              <div className='tp-price__name'>
                <h5 className='tp__name'>CHECKERS</h5><h5 className='tp__price'>120&euro;</h5>
              </div>
              </SwiperSlide>
                <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP4} alt="TP4" />
              </div>
              <div className='tp-price__name'>
                <h5 className='tp__name'>DOMINO</h5><h5 className='tp__price'>120&euro;</h5>
              </div>
              </SwiperSlide>
                <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP5} alt="TP5" />
              </div>
              <div className='tp-price__name'>
                <h5 className='tp__name'>JENGA</h5><h5 className='tp__price'>70&euro;</h5>
              </div>
              </SwiperSlide>
                <SwiperSlide className='top__prod' >
            <div className='top__prodimg'>
              <img src={TP6} alt="TP6" />
              </div>
              <div className='tp-price__name'>
                <h5 className='tp__name'>CIRCUS</h5><h5 className='tp__price'>120&euro;</h5>
              </div>
              </SwiperSlide>
          </Swiper>
          </section>
       
      );
    }
    
    

export default Topproducts