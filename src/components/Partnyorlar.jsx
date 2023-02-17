import React from 'react'
import Partnyor from './Partnyor'
import { Swiper, SwiperSlide } from "swiper/react";
import PartnyorShirket1 from '../assests/images/Group 400.png'
import PartnyorShirket2 from '../assests/images/Group 401.png'
import PartnyorShirket3 from '../assests/images/Group 402.png'
import PartnyorShirket4 from '../assests/images/Group 403.png'


// Import Swiper styles
import "swiper/css";
import {Autoplay} from 'swipper';

const Partnyorlar = (shirketinLogosu) => {
  return (
    <>
  <Swiper
        slidesPerView={3}
        spaceBetween={30}

        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        
        autoplay={
            {
                delay:1500
            }
        }
       modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Partnyor shirketinLogosu={PartnyorShirket1} /></SwiperSlide>
        <SwiperSlide><Partnyor shirketinLogosu={PartnyorShirket2}/></SwiperSlide>
        <SwiperSlide><Partnyor shirketinLogosu={PartnyorShirket3}/></SwiperSlide>
        <SwiperSlide><Partnyor shirketinLogosu={PartnyorShirket4}/></SwiperSlide>
        
      </Swiper>

    
    
    
    </>
  )
}

export default Partnyorlar