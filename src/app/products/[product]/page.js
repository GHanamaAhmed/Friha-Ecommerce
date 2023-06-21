import React from "react";
import SwiperX from "./swiper";
import ImageSection from "./imageSection";
import InputBar from "./InputBarX";
import InputBarX from "./InputBarX";
import Par from "./par";

export default function page() {
  return (
    <div className="flex h-full flex-col items-center justify-center overflow-clip">
      <ImageSection />
      <SwiperX />
      <InputBarX />
      <Par />
    </div>
  );
}
