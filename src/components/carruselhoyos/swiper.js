import React, { useEffect, useState } from 'react'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "../carruselhoyos/style.css";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import img1hoyos from '../../assets/hoyos/imghoyos1.png'
import img2hoyos from '../../assets/hoyos/imghoyos2.png'
import img3hoyos from '../../assets/hoyos/imghoyos3.png'
import img4hoyos from '../../assets/hoyos/imghoyos4.png'
import img5hoyos from '../../assets/hoyos/imghoyos5.png'
import img6hoyos from '../../assets/hoyos/imghoyos6.png'
import img7hoyos from '../../assets/hoyos/imghoyos7.png'
import img8hoyos from '../../assets/hoyos/imghoyos8.png'
import useSize from '../../utils/hooks/size';


// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Swippers() {
  let [slidesPerView, setSlidesPerView] = useState(4)
  let size = useSize();
  useEffect(() => {
    if (size.width > 1300) {
      setSlidesPerView(3)
    }
    else if (size.width <= 1500 && size.width > 1000) {
      setSlidesPerView(3)
    }
    else if (size.width <= 1000 && size.width >= 700) {
      setSlidesPerView(2)
    }
    else {
      setSlidesPerView(1)
    }
  }, [size])
  return (
    <div className="container--swippers">
      <Swiper
        spaceBetween={0}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="item-a">
            {" "}
            <div className="box">

              <img src={img2hoyos} />
              <p>
                Ecar: Estudio Continuo de  audiencia radial en  las principales ciudades del  país.

            </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-a">
            {" "}
            <div className="box">

              <img src={img1hoyos} className="img--swipershoyos" />
              <p>TGI: Nos permite tener una visión completa  del colombiano en temas como estilo de vida,
              hábitos de consumo de marcas  y exposición a medios para obtener una radiografía completa del consumidor
              pudiéndose aplicar un sinnúmero de variables y filtros.
</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-a">
            {" "}
            <div className="box">

              <img src={img3hoyos} />
              <p>Info-meter: Información de audiencia diaria,  minuto a minuto de las diferentes
              señales de TV Nacional, Internacional, Regional y Local.
</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-a">
            {" "}
            <div className="box">

              <img src={img4hoyos} />
              <p>
                RAC: Estudio que evalúa el nivel de conocimiento, recordación y preferencia  de Marca.
</p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="item-a">
            {" "}
            <div className="box">

              <img src={img5hoyos} />
              <p>
                Permite visualizar y escuchar muestras de piezas publicitarias de anunciantes de medios.

            </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item-a">
            {" "}
            <div className="box">

              <img src={img6hoyos} />
              <p>Info99: Monitoreo de la inversión publicitaria
</p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="item-a">
            {" "}
            <div className="box">

              <img src={img7hoyos} />
              <p>Permite visualizar y escuchar muestras de piezas publicitarias de anunciantes de medios.
</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item-a">
            {" "}
            <div className="box">

              <img src={img8hoyos} />
              <p>A&F:Evaluación de planes de medios pre y post
</p>
            </div>
          </div>
        </SwiperSlide>

      ...
    </Swiper>
    </div>
  );
}
export default Swippers;
