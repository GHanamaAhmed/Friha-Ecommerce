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
import { selep } from "../../../../lib/sleep";
import { useWidth } from "../../../../lib/hooks/useWidth";
import SwiperLoading from "./swiperLoading";
export default function Swipers() {
  const { width } = useWidth();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    selep().then(setIsLoading(false));
  }, []);
  return !isLoading ? (
    <Swiper
      modules={[A11y, Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={
        width > 1280 ? 4.5 : width > 767 ? 3.5 : width < 640 ? 1.5 : 2.5
      }
      scrollbar={{ draggable: true }}
      freeMode={true}
      navigation={{
        nextEl: ".nextEl",
        prevEl: ".prevEl",
      }}
      watchOverflow={true}
    >
      {[...Array(10)].map((e, i) => (
        <SwiperSlide key={i}>
          {" "}
          <Short />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <SwiperLoading />
  );
}
