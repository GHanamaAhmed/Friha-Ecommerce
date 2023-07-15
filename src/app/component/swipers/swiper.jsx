"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import Short from "./short";
import SwiperLoading from "./swiperLoading";
import { fetchReels } from "@@/lib/api/reels";
export default function Swipers() {
  const [isLoading, setIsLoading] = useState(true);
  const [reels, setReels] = useState([]);
  useEffect(() => {
    fetchReels("")
      .then((res) => {
        setReels(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);
  return !isLoading ? (
    <Swiper
      modules={[A11y, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1.5}
      scrollbar={{ draggable: true }}
      freeMode={true}
      navigation={{
        nextEl: ".nextEl",
        prevEl: ".prevEl",
      }}
      watchOverflow={true}
      breakpoints={{
        640: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        960: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
        1160: {
          slidesPerView: 4.5,
          spaceBetween: 60,
        },
      }}
    >
      {reels.map((e, i) => (
        <SwiperSlide key={i}>
          {" "}
          <Short reel={e} />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <SwiperLoading />
  );
}
