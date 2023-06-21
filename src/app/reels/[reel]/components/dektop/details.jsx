"use client";
import { Navigation, A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import TitleSection from "../../../../../../components/titleSection/titleSection";
import { AiFillLike } from "react-icons/ai";
import { ShoppingCart } from "../img/img";
import { FaComment, FaShare, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Example from "./menu";
import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Comments from "../comments/comments";
export default function Details({ idReel }) {
  const [isShowComments, setIsShowComment] = useState(1);
  const [isLikeIt, setIsLikeIt] = useState(false);
  const [likes, setLikes] = useState(121);
  const [left, setleft] = useState(77);
  const [comments, setComments] = useState(78);
  const handleLike = () => {
    console.log(likes);
    setLikes((prev) => (!isLikeIt ? prev + 1 : prev - 1));
    setIsLikeIt((prev) => !prev);
  };
  const showComments = () => {
    setIsShowComment(1);
  };
  const hideComments = () => {
    setIsShowComment(0);
  };
  return (
    <div className="flex h-full w-full flex-col items-center">
      <div className="w-11/12">
        <TitleSection title={"حذاء"} subtitle={"200DA"} />
      </div>
      <div className="flex w-full flex-row items-center justify-center py-3">
        <div className="flex w-11/12 flex-row-reverse justify-evenly rounded-md bg-card1 px-10">
          <button
            onClick={handleLike}
            className="likeDesktop  flex flex-row items-center justify-evenly gap-2"
          >
            <p
              className={`text-lg  font-bold ${
                isLikeIt ? "text-azure" : "text-lightSolid"
              } `}
            >
              {likes}
            </p>
            <AiFillLike
              size={40}
              className={`${isLikeIt ? "fill-azure" : "fill-white"}`}
            />
          </button>
          <Tabs value={isShowComments} className="w-3/5">
            <TabsHeader
              className="rounded-none border-blue-gray-50 bg-transparent p-0"
              indicatorProps={{
                className:
                  "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
              }}
            >
              <Tab onClick={hideComments} value={0}>
                <div className="flex flex-row items-center justify-around gap-4">
                  <p className={`text-lg  font-bold text-lightSolid `}>
                    {left}
                  </p>
                  <FaShoppingCart size={40} color="white" />
                </div>
              </Tab>
              <Tab onClick={showComments} value={1}>
                <div className="flex flex-row items-center justify-around gap-4">
                  <p className="text-lg  font-bold text-lightSolid">
                    {comments}
                  </p>
                  <FaComment size={40} color="white" />
                </div>
              </Tab>
            </TabsHeader>
          </Tabs>
          <button className="shareDesktop">
            <FaShare size={40} color="white" />
          </button>
        </div>
      </div>
      {!isShowComments && (
        <div className="grid h-full w-full grid-cols-12 grid-rows-1 pt-10">
          <div className="col-span-8 flex h-full w-full flex-col  items-center">
            <div className="flex h-5/6 w-full flex-col items-center justify-start">
              <div className="flex w-full flex-col items-center gap-3">
                <div className="relative h-56 w-80">
                  <Image
                    fill={true}
                    priority
                    src={"/res/item.png"}
                    alt=""
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className="flex w-full justify-around">
                  <Example />
                </div>
                <div className="px-5">
                  <p className="text-justify text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit fuga nesciunt quaerat distinctio incidunt asperiores
                    saepe sint, nobis aspernatur? Enim velit nobis eos deserunt?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 flex h-full w-full justify-center">
            <div className="h-96">
              <Swiper
                className="h-full"
                modules={[Navigation, A11y, FreeMode]}
                spaceBetween={50}
                slidesPerView={4}
                direction="vertical"
              >
                <SwiperSlide>
                  <Image
                    width={100}
                    height={100}
                    priority
                    src={"/res/item.png"}
                    alt=""
                    className="rounded-lg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      )}
      {isShowComments && (
        <div className="flex h-full w-full items-start justify-end pt-10">
          <div className="w-11/12">
            <Comments />
          </div>
        </div>
      )}
    </div>
  );
}
