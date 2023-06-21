"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useWidth } from "../../../../lib/hooks/useWidth";
export default function Card() {
  const [isLike, setIsLike] = useState(false);
  const { width } = useWidth();
  const toggleLike = () => {
    setIsLike((prev) => !prev);
  };
  return (
    <div className="relative grid h-56 w-36 grid-cols-1 grid-rows-6 overflow-hidden rounded-lg bg-card1 p-0 md:h-80 md:w-60 md:grid-rows-4">
      <div className="relative row-span-4 h-full w-full place-self-start md:row-span-3">
        <img
          className="h-full w-full "
          src="./res/blacksweatshirt.png"
          alt=""
        />
      </div>
      <div className="grid-row-3 row-span-2 grid px-2 md:row-span-1">
        <div className="row-span-2 flex flex-col items-start justify-center">
          <h1 className="text-sm text-white md:text-lg">حذاء ADIDAS</h1>
          <p className="text-sm text-white md:text-xl">2000.00 DA</p>
        </div>
        <div className="flex w-full items-center justify-between border-t-[1px] border-card2 px-2 py-px md:hidden md:py-2">
          <p className="text-sm text-white md:text-lg">الكمية: 15</p>
          <button onClick={toggleLike}>
            {isLike ? (
              <AiFillHeart size={width <= 767 ? 17 : 25} color="red" />
            ) : (
              <AiOutlineHeart size={width <= 767 ? 17 : 25} color="white" />
            )}
          </button>
        </div>
      </div>
      <div className="hidden w-full items-center justify-between border-t-[1px] border-card2 px-2 py-px md:flex md:py-2">
        <p className="text-sm text-white md:text-lg">الكمية: 15</p>
        <button onClick={toggleLike}>
          {isLike ? (
            <AiFillHeart size={width <= 767 ? 17 : 25} color="red" />
          ) : (
            <AiOutlineHeart size={width <= 767 ? 17 : 25} color="white" />
          )}
        </button>
      </div>
      <button className="absolute right-2 top-2">
        <img className="h-8 w-8" src="./res/basket.svg" alt="" />
      </button>
    </div>
  );
}
