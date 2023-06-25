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
import img1 from "@@/public/res/item.png";
export default function Pictures({ onClick, pictures, idPrudacts }) {
  const click = (e) => {
    e.preventDefault();
    onClick(e.currentTarget.src);
  };
  return (
    <div className={`my-3 w-full px-4`}>
      <Swiper
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        className="MySwiper"
        freeMode={true}
        modules={[FreeMode, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <Image
            onClick={click}
            unoptimized={true}
            loader={() => img1}
            priority
            className="h-24 w-24 min-w-[96px] rounded-lg"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            onClick={click}
            unoptimized={true}
            loader={() => img1}
            priority
            className="h-24 w-24 min-w-[96px] rounded-lg"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            onClick={click}
            unoptimized={true}
            loader={() => img1}
            priority
            className="h-24 w-24 min-w-[96px] rounded-lg"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            onClick={click}
            unoptimized={true}
            loader={() => img1}
            priority
            className="h-24 w-24 min-w-[96px] rounded-lg"
            src={img1}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
