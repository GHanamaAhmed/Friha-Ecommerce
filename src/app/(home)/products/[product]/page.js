import React from "react";
import SwiperX from "./swiper";
import ImageSection from "./imageSection";
import Par from "./par";
import Menus from "@/app/reels/[[...reel]]/components/dektop/menu";
export default function page() {
  return (
    <div className="flex h-full flex-col items-center justify-center pt-14 overflow-clip">
      <ImageSection />
      <SwiperX />
      <div className="flex justify-between px-4 w-full">
        <Menus />
      </div>
      <Par />
    </div>
  );
}
