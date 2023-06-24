import React from "react";
import TitleSection from "../../../../../components/titleSection/titleSection";
import { BsArrowLeft } from "react-icons/bs";

export default function ImageSection() {
  return (
    <div className="grid-rows-7 grid w-full gap-3 relative">
      <div className="row-span-4 h-full w-full">
        <img className="h-full w-full" src="/res/item.png" alt="" />
      </div>
      <div className="row-span-3  w-full px-2 text-end">
        <TitleSection title={"adidas"} subtitle={"20 da"} />
      </div>
      <button className="absolute left-4 top-4">
        <BsArrowLeft color="white" size="25px" />
      </button>
    </div>
  );
}
