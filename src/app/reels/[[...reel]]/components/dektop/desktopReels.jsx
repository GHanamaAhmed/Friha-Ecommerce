"use client";
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState } from "react";
import Video from "../mobile/video";
import Details from "../../../../../../components/details/details";
export default function DesktopReels() {
  const refSwiper = useRef();
  const [page, setPage] = useState(0);
  const handle = (e) => {
    history.replaceState(null, "", "/reels/" + e.activeIndex);
    setPage(e.activeIndex);
  };
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-1 overflow-hidden pt-5">
      <div className="col-span-8 max-h-full overflow-auto">
        <Details />
      </div>
      <div className="col-span-4">
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
              swiper={refSwiper}
              price={"20.00"}
              video={
                "https://player.vimeo.com/progressive_redirect/playback/798204134/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=bfb3467730b2657679a5dc79d2342e39ace903aeb053be77272d044d16960b7d"
              }
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
