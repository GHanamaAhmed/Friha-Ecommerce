"use client";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Video from "./video";
import { useRef, useState } from "react";
export default function MobileReels() {
  const refSwiper = useRef();
  const [page, setPage] = useState(0);
  const handle = (e) => {
    history.replaceState(null, "", "/reels/" + e.activeIndex);
    setPage(e.activeIndex);
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
        <SwiperSlide className="text-white">
          <Video
            tools={true}
            swiper={refSwiper}
            price={"20.00"}
            name={"Adidas"}
            link={"#"}
            likes={"20"}
            comments={"15"}
            video={
              "https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <Video
            tools={true}
            swiper={refSwiper}
            price={"20.00"}
            name={"Adidas"}
            link={"#"}
            likes={"20"}
            comments={"15"}
            video={
              "https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <Video
            tools={true}
            swiper={refSwiper}
            price={"20.00"}
            name={"Adidas"}
            link={"#"}
            likes={"20"}
            comments={"15"}
            video={
              "https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <Video
            tools={true}
            swiper={refSwiper}
            price={"20.00"}
            name={"Adidas"}
            link={"#"}
            likes={"20"}
            comments={"15"}
            video={
              "https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="text-white">
          <Video
            tools={true}
            swiper={refSwiper}
            price={"20.00"}
            name={"Adidas"}
            link={"#"}
            likes={"20"}
            comments={"15"}
            video={
              "https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
