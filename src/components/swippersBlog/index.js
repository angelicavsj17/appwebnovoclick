import React, { useEffect, useState } from "react"
import '../swippersBlog/style.css'
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import img1acad from '../../assets/acanovo1.jpg';
import useSize from "../../utils/hooks/size";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SwippersBlog() {
  let [slidesPerView, setSlidesPerView] = useState(3)
  let size = useSize();
  useEffect(() => {
      if (size.width > 1500) {
          setSlidesPerView(4)
      }
      else if (size.width <= 1500 && size.width > 1000) {
          setSlidesPerView(3)
      }
      else if (size.width <= 1000 && size.width >= 700) {
          setSlidesPerView(2)
      }
      else{
          setSlidesPerView(1)
      }
  }, [size])
  return (
    <div className="container--swipper-blog">
      <Swiper
        spaceBetween={50}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="container-img-blog">  <img src={img1acad} />
          </div>

        </SwiperSlide>
        <SwiperSlide><div className="container-img-blog">  <img src={img1acad} />
        </div></SwiperSlide>
        <SwiperSlide><div className="container-img-blog">  <img src={img1acad} />
        </div></SwiperSlide>
        <SwiperSlide><div className="container-img-blog">  <img src={img1acad} />
        </div></SwiperSlide>
        <SwiperSlide><div className="container-img-blog">  <img src={img1acad} />
        </div></SwiperSlide>
        <SwiperSlide><div className="container-img-blog">  <img src={img1acad} />
        </div></SwiperSlide>
        <SwiperSlide><div className="container-img-blog">  <img src={img1acad} />
        </div></SwiperSlide>
      </Swiper>
    </div>
  );
} export default SwippersBlog;