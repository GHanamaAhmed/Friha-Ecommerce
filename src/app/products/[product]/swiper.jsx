"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import img1 from "../../../../public/res/item.png";
export default function SwiperX() {
  return (
    <div className={`overflow-clip p-1`}>
      <Swiper
        slidesPerView={10}
        spaceBetween={75}
        scrollbar={{ draggable: true }}
        className="MySwiper"
        centeredSlides={true}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
      >
        <SwiperSlide className="p-2">
          <Image
            priority
            className="h-15 m-1 max-h-none w-20 max-w-none rounded-lg md:h-80 md:w-60"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <Image
            priority
            className="h-15 m-1 max-h-none w-20 max-w-none rounded-lg md:h-80 md:w-60"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <Image
            priority
            className="h-15 m-1 max-h-none w-20 max-w-none rounded-lg md:h-80 md:w-60"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <Image
            priority
            className="h-15 m-1 max-h-none w-20 max-w-none rounded-lg md:h-80 md:w-60"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <Image
            priority
            className="h-15 m-1 max-h-none w-20 max-w-none rounded-lg md:h-80 md:w-60"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="p-2">
          <Image
            priority
            className="h-15 m-1 max-h-none w-20 max-w-none rounded-lg md:h-80 md:w-60"
            src={img1}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
