import React from 'react'
import '../Carruselmoments/styles.css'

import moment1 from '../../assets/moments/1.png'
import moment2 from '../../assets/moments/2.png'
import moment3 from '../../assets/moments/3.png'
import moment4 from '../../assets/moments/4.png'
import moment5 from '../../assets/moments/5.png'
import moment6 from '../../assets/moments/6.png'
import moment7 from '../../assets/moments/7.png'
import moment8 from '../../assets/moments/8.png'
import moment9 from '../../assets/moments/9.png'
import moment10 from '../../assets/moments/10.png'
import moment11 from '../../assets/moments/11.png'
import moment12 from '../../assets/moments/12.png'
import moment13 from '../../assets/moments/13.png'
 
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SwipersMoments () {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className="container-img-moments">  <img src={moment1} className="img-moments"/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment2}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment3}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment4}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment5}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment6}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment7}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment8}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment9}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment10}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment11}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment12}/></div></SwiperSlide>
      <SwiperSlide><div className="container-img-moments">  <img src={moment13}/></div></SwiperSlide>
    </Swiper>
  );
} export default SwipersMoments