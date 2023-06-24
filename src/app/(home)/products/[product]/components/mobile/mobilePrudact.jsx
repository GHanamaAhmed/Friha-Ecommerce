"use client";
import React, { useState } from "react";
import Pictures from "./swiper";
import ImageSection from "./imageSection";
import Menus from "@/app/reels/[[...reel]]/components/dektop/menu";
import Par from "./par";
export default function MobilePrudact() {
  const [currentPicture, setCurrentPicture] = useState("/res/item.png");
  const changeCurrentPicture = (src) => {
    setCurrentPicture(src);
  };
  return (
    <div className="flex h-full flex-col items-center justify-center overflow-clip pt-14">
      <ImageSection img={currentPicture} />
      <Pictures onClick={changeCurrentPicture} />
      <div className="flex w-full justify-between px-4">
        <Menus />
      </div>
      <Par />
    </div>
  );
}
