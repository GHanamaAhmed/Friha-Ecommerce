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
import { FaShare, FaShoppingCart } from "react-icons/fa";
import { likePost, unLikePost } from "@@/lib/likes/togleLike";
import Link from "next/link";
export default function DesktopReels({ reels }) {
  const [index, setIndex] = useState(0);
  const [like, setLike] = useState(Number(reels[index]?.isLike));
  const [nLike, setNLike] = useState(reels[index]?.likes);
  useEffect(() => {
    window.history.replaceState(reels[0]?._id, "", "/reels/" + reels[0]?._id);
    setNLike(Number(reels[index]?.isLike));
    setLike(reels[index]?.likes);
  }, [reels]);
  const hanldeClickLike = (e) => {
    e.preventDefault();
    const req = { type: "reel", postId: reels[index]._id };
    console.log(req);
    if (like) {
      unLikePost(req)
        .then((res) => {
          setLike(false);
          setNLike((prev) => prev - 1);
        })
        .catch((err) => console.error(err));
    }
    if (!like) {
      likePost(req)
        .then((res) => {
          setLike(true);
          setNLike((prev) => prev + 1);
        })
        .catch((err) => console.error(err));
    }
  };
  const refSwiper = useRef();
  const handle = (e) => {
    window.history.replaceState(
      reels[e.activeIndex]?._id,
      "",
      "/reels/" + reels[e.activeIndex]?._id
    );
    setIndex(reels[e.activeIndex]?._id);
  };
  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "FrihaClothes",
          url: "http://localhost:3000/reels/" + window.history.state,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch((err) => {
          console.log("Error while using Web share API:");
          console.log(err);
        });
    } else {
      alert("Browser doesn't support this API !");
    }
  };
  return (
    <div className="grid h-screen w-screen grid-cols-12 grid-rows-1 overflow-hidden pt-5">
      <div className="col-span-8 max-h-full overflow-auto">
        <div className="flex flex-col items-center gap-2">
          {" "}
          <div className={`w-11/12`}>
            <TitleSection title={"حذاء"} subtitle={"200DA"} />
          </div>
          <div className="flex w-full flex-row items-center justify-center py-3">
            <div className="flex w-11/12 flex-row-reverse justify-evenly rounded-md bg-card1 px-10">
              <button
                onClick={hanldeClickLike}
                className="likeDesktop flex flex-row items-center justify-evenly gap-2"
              >
                <p className={"text-lightSolid"}>{nLike}</p>
                <AiFillLike
                  size={40}
                  className={`${like ? "fill-blue-500" : "fill-white"}`}
                />
              </button>
              <button onClick={share} className="shareDesktop">
                <FaShare size={40} color="white" />
              </button>
              {reels[index]?.productId && (
                <div className=" flex items-center gap-3">
                  <p className="text-white">شراء</p>
                  <Link
                    href={`http://localhost:3000/products/${reels[index]?.productId}`}
                  >
                    {" "}
                    <FaShoppingCart size={40} className={"fill-white"} />
                  </Link>
                </div>
              )}
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
                comments={reel?.comments}
                video={reel?.video}
                productId={reel?.productId}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
