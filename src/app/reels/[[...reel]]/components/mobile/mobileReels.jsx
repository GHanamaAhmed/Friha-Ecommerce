"use client";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Video from "./video";
import { useContext, useEffect, useRef, useState } from "react";
import { reelUrl } from "@@/lib/genURL";
import { useParams, usePathname } from "next/navigation";
import { commentContext } from "@@/components/comments/comentContext";
import { fetchCountComments } from "@@/lib/api/comment";
export default function MobileReels({ reels, onEnd }) {
  const { nComments, setNComments } = useContext(commentContext);
  const [first, setFirst] = useState(true);
  const [first2, setFirst2] = useState(true);
  const refSwiper = useRef();
  const [page, setPage] = useState(0);
  const params = useParams();
  const pathName = usePathname();
  useEffect(() => {
    if (first && reels[0]?._id) {
      setFirst(false);
      window.history.replaceState(reels[0]?._id, "", "/reels/" + reels[0]?._id);
    }
  }, [reels]);
  const handle = (e) => {
    if (!first && refSwiper.current.isEnd) {
      if (first2) {
        setFirst2(false);
        onEnd(reels?.length - 1);
      } else {
        onEnd(reels?.length);
      }
    }
    window.history.replaceState(
      reels[e.activeIndex]?._id,
      "",
      "/reels/" + reels[e.activeIndex]?._id
    );
    fetchCountComments({
      type: pathName.includes("reel") ? "reel" : "product",
      postId: params?.product || window.history.state || params?.reel,
    })
      .then((res) => {
        setNComments(res.data[0]?.count || 0);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Swiper
        className="h-[90%] w-full"
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
              comments={reel?.comments}
              video={reel?.video}
              productId={reel?.productId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
