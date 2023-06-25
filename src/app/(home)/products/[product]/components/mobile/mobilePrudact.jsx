"use client";
import React, { useState } from "react";
import Pictures from "./swiper";
import Menus from "@@/components/details/menu"
import Par from "./par";
import MobileComents from "@@/components/comments/mobileComents";
import TitleSection from "../../../../../../../components/titleSection/titleSection";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function MobilePrudact() {
  const router = useRouter();
  const [isShowComments, setIsShowComments] = useState(false);
  const [currentPicture, setCurrentPicture] = useState("/res/item.png");
  const handleComments = (value) => {
    setIsShowComments(value);
  };
  const changeCurrentPicture = (src) => {
    setCurrentPicture(src);
  };
  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen overflow-y-auto  flex-col items-center justify-center pt-20">
      <div className="relative flex w-full flex-col gap-3">
        <div className="relative h-80 w-full">
          <Image fill={true} src={currentPicture} alt="" />
        </div>
        <div className="w-full">
          <div className="flex w-full items-center justify-between px-2 text-end">
            <TitleSection title={"adidas"} subtitle={"20 da"} />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleComments(true);
              }}
            >
              <AiFillMessage size={40} color="white" />
            </button>
          </div>
          <button
            onClick={() => router.back()}
            className="absolute left-4 top-4"
          >
            <BsArrowLeft color="white" size="25px" />
          </button>
        </div>
      </div>
      <Pictures onClick={changeCurrentPicture} />
      <div className="flex w-full justify-between px-4">
        <Menus />
      </div>
      <Par />
      <MobileComents show={isShowComments} onClose={handleComments}/>
    </div>
    </div>
  );
}
