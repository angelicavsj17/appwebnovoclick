
import React, { useState } from 'react'
import '../carruselhoyos/styles2.css'
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import imghoyos9 from '../../assets/hoyos/imghoyos9.png'
import imghoyos10 from '../../assets/hoyos/imghoyos10.png'
import imghoyos11 from '../../assets/hoyos/imghoyos11.png'
import imghoyos12 from '../../assets/hoyos/imghoyo12.png'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SwipperHoyos() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      <SwiperSlide>
        <div className="cards--swipper-hoyos">
          <p>
            Aplican pensamiento estratégico soportado con las más avanzadas  herramientas e investigaciones de planificación de medios del mercado.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="cards--swipper-hoyos">

          <img className="img-swipper-hoyos" src={imghoyos10} />
          <p>
            Integran investigaciones + herramientas + talento  generando estrategias  innovadoras ,efectivas  y rentables.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="cards--swipper-hoyos">
        <img className="img-swipper-hoyos" src={imghoyos11} />
        <p>
          Optimizan los recursos de inversión a partir de gestiones de negociación con
          objetividad en la selección de los medios recomendados.
        </p>
      </div>
      </SwiperSlide>
      <SwiperSlide><div className="cards--swipper-hoyos">

        <img className="img-swipper-hoyos" src={imghoyos12} />
        <p>
          Completa sincronía entre anunciante, agencia creativa y medios.
        </p>
      </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
} export default SwipperHoyos;