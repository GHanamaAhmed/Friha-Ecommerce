"use client";
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Video from "../mobile/video";
import Details from "../../../../../../components/details/details";
import { reelUrl } from "@@/lib/genURL";
export default function DesktopReels({ reels }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    window.history.replaceState(reels[0]?._id, "", "/reels/" + reels[0]?._id);
  }, [reels]);
  const refSwiper = useRef();
  const handle = (e) => {
    setIndex(reels[e.activeIndex]?._id);
    window.history.replaceState(index, "", "/reels/" + index);
  };
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-1 overflow-hidden pt-5">
      <div className="col-span-8 max-h-full overflow-auto">
        <Details reel={reels[index]} />
      </div>
      <div className="col-span-4">
        <Swiper
          className="h-full w-full"
          modules={[Navigation, A11y]}
          initialSlide={0}
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
                tools={false}
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
    </div>
  );
}
