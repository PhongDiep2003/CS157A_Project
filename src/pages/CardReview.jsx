import React from 'react'
import '../css/cardReview.css'
import Card from '../components/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import 'swiper/css/navigation';
const CardReview = () => {
  return (
    <div className='cardReviewPageContainer'>
      {/* list of card goes here */}
      <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      style={{'width': '1300px'}}
      allowTouchMove={false}
    >
        <SwiperSlide ><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CardReview
