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
import { useWidth } from "@@/lib/hooks/useWidth";
export default function Pictures({ onClick, pictures }) {
  const { width } = useWidth();
  const click = (e) => {
    e.preventDefault();
    onClick(e.currentTarget.src);
  };
  return (
    <div className={`my-3 w-full overflow-clip px-4`}>
      <Swiper
        slidesPerView={width < 360 ? 2 : width < 500 ? 3 : 5}
        scrollbar={{ draggable: true }}
        className="MySwiper"
        freeMode={true}
        modules={[FreeMode, Navigation]}
      >
        <SwiperSlide>
          <Image
            priority
            className="h-24 w-24 min-w-[96px] rounded-lg"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            className="h-24 w-24 min-w-[96px] rounded-lg"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            priority
            className="h-24 w-24 min-w-[96px] rounded-lg"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            onClick={click}
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
