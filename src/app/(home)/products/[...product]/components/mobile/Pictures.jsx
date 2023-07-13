"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import img1 from "@@/public/res/item.png";
import { selep } from "@@/lib/sleep";
export default function Pictures({ onClick, pictures, idPrudacts }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    selep().then(() => setIsLoading(false));
  }, []);
  const click = (e) => {
    e.preventDefault();
    onClick(e.currentTarget.src);
  };
  return (
    <div className={`my-3 w-full px-4`}>
      {!isLoading ? (
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
      ) : (
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
          {[...Array(6)].map((e,i)=><SwiperSlide key={i}>
            <div className="flex items-center justify-center animate-pulse h-24 w-24 rounded-lg bg-gray-700">
              <svg
                className="h-12 w-12 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 640 512"
              >
                <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
              </svg>
            </div>
          </SwiperSlide>)}
        </Swiper>
      )}
    </div>
  );
}
