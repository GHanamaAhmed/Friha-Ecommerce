"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper";
import Image from "next/image";
import { array } from "prop-types";

export default function Pictures({ direction }) {
  return (
    <Swiper
      className="h-full"
      modules={[Navigation, A11y]}
      spaceBetween={direction == "horizontal" ? 20 : 50}
      slidesPerView={3.5}
      breakpoints={{
        1024:{
            slidesPerView:4.5
        }
      }}
      direction={direction == "horizontal" ? "horizontal" : "vertical"}
    >
      {[...Array(10)].map((e, i) => (
        <SwiperSlide key={i}>
          <Image
            width={100}
            height={100}
            priority
            src={"/res/item.png"}
            alt=""
            className="rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
