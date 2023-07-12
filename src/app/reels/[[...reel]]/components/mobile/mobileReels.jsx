"use client";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Video from "./video";
import { useEffect, useRef, useState } from "react";
import { reelUrl } from "@@/lib/genURL";
import { useParams } from "next/navigation";
export default function MobileReels({ reels }) {
  const refSwiper = useRef();
  const [page, setPage] = useState(0);
  useEffect(() => {
    window.history.replaceState(reels[0]?._id, "", "/reels/" + reels[0]?._id);
  }, [reels]);
  const handle = (e) => {
    setPage(reels[e.activeIndex]?._id);
    window.history.replaceState(page, "", "/reels/" + page);
  };
  return (
    <div className="h-screen w-screen">
      <Swiper
        className="h-full w-full"
        modules={[Navigation, A11y]}
        initialSlide={page}
        spaceBetween={50}
        slidesPerView={1}
        direction="vertical"
        onSlideChange={handle}
        onSwiper={(swiper) => {
          refSwiper.current = swiper;
        }}
      >
        {reels.map((reel, index) => (
          <SwiperSlide key={index} className="text-white">
            <Video
              tools={true}
              swiper={refSwiper}
              id={reel?._id}
              price={reel?.price}
              name={reel?.name}
              link={reelUrl(reel.productId)}
              likes={reel.likes}
              isLike={reel?.isLike}
              isSave={reel?.isSave}
              comments={reel?.comments}
              video={reel?.video}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
