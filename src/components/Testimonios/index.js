import React from 'react'
import '../Testimonios/styles.css'
import imgtestimonio1 from '../../assets/testimonios/1testimonio.png'
import imgtestimonio2 from '../../assets/testimonios/2testimonio.png'
import imgtestimonio3 from '../../assets/testimonios/3testimonio.png'
import imgtestimonio4 from '../../assets/testimonios/4testimonio.png'


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

function SwipperTestimonios() {
  return (
    <div className='container-testimonios'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>

          <div className="containertest1">
            <img src={imgtestimonio4} />
            <p>
              “Novoclick marca registrada de tu consulta, es nuestro proveedor desde hace dos años y su labor ha enfocado el envio de campañas de email
              marketing segmentadas, brindándonos resultados rápidos medibles, reforzando nuestra labor en el departamento de mercadeo y es una
              herramienta potencial en nuestro departamento comercial. Recomendamos a Novoclick como una empresa seria con trayectoria, efectiva y
              comprometida con sus clientes”.
              - Citroén -
</p>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="containertest1">
            <img src={imgtestimonio3} />
            <p>
              “Novoclick marca registrada de tu consulta, nos presta el servicio de email marketing,
 brindándonos responsabilidad y puntualidad con su servicio, los recomendamos ampliamente”. <br />
- Dinissan -
</p>
          </div>

        </SwiperSlide>
        <SwiperSlide>

          <div className="containertest1">
            <img src={imgtestimonio1} />
            <p>

              “Desde el año 2010., Tu consulta con su marca Novoclick Group,
              nos ha venido prestado el servicio de email marketing con cumplimiento y calidad,
              en nuestras principales marcas como: Lumovil, Renault, Lumosa Ford, Autos Marca Mazda, Lifan Motos, Autoyota”.
              - Autoyota -
</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
} export default SwipperTestimonios
