"use client";
// import Swiper core and required modules
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import Video from "../mobile/video";
import { reelUrl } from "@@/lib/genURL";
import DesktopComments from "@@/components/comments/desktopComments";
import TitleSection from "@@/components/titleSection/titleSection";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
export default function DesktopReels({ reels }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    window.history.replaceState(reels[0]?._id, "", "/reels/" + reels[0]?._id);
  }, [reels]);
  const refSwiper = useRef();
  const handle = (e) => {
    window.history.replaceState(
      reels[e.activeIndex]?._id,
      "",
      "/reels/" + reels[e.activeIndex]?._id
    );
    setIndex(reels[e.activeIndex]?._id);
  };
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-1 overflow-hidden pt-5">
      <div className="col-span-8 max-h-full overflow-auto">
        <div className="flex flex-col items-center gap-2">
          {" "}
          <div className={`w-11/12`}>
            <TitleSection title={"حذاء"} subtitle={"200DA"} />
          </div>
          <div className="px-5">
            <p className="font-Hacen-Tunisia text-xl text-scandaryColor">
              الوصف
            </p>
            <p className="text-justify text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
              fuga nesciunt quaerat distinctio incidunt asperiores saepe sint,
              nobis aspernatur? Enim velit nobis eos deserunt?
            </p>
          </div>
          <div className="flex w-full flex-row items-center justify-center py-3">
            <div className="flex w-11/12 flex-row-reverse justify-evenly rounded-md bg-card1 px-10">
              <button className="likeDesktop flex flex-row items-center justify-evenly gap-2">
                <p className={"text-lightSolid"}>5</p>
                <AiFillLike size={40} className={"fill-white"} />
              </button>
              <button className="shareDesktop">
                <FaShare size={40} color="white" />
              </button>
            </div>
          </div>
          <DesktopComments />
        </div>
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
