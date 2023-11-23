"use client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/free-mode';
import { useEffect, useState, memo } from "react";
import Short from "./short";
import SwiperLoading from "./swiperLoading";
import { fetchMore, fetchReels } from "@@/lib/api/reels";
export default memo(function Swipers() {
  const [isLoading, setIsLoading] = useState(true);
  const [reels, setReels] = useState([]);
  const [first, setFirst] = useState(true);
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
  const more = () => {
    fetchMore(reels.length)
      .then((res) => {
        setReels([...reels, ...res.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
    if (first) {
      setFirst(false);
    }
  };
  return !isLoading ? (
    <Swiper
      modules={[A11y, Pagination,FreeMode]}
      spaceBetween={50}
      slidesPerView={1.5}
      freeMode={true}
      onSlideChange={(e) => {
        e.isEnd && more();
      }}
      navigation={{
        nextEl: ".nextEl",
        prevEl: ".prevEl",
      }}
      onSwiper={(e) => {
        e.isEnd && more();
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
      {reels.length == 0 && (
        <SwiperSlide>
          {" "}
          <div
            role="status"
            className="relative space-y-8 p-0 md:flex md:items-center md:space-x-8 md:space-y-0"
          >
            <div className="m-0 flex h-72 max-h-none w-52 max-w-none items-center justify-center  rounded-lg bg-gray-700 px-4 md:h-80 md:w-60">
              <p className="-rotate-45 text-3xl text-white">لا يوجد حاليا</p>
            </div>
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  ) : (
    <SwiperLoading />
  );
});
