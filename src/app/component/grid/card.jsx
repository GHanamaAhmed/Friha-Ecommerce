"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useWidth } from "../../../../lib/hooks/useWidth";
import { LuShoppingCart } from "react-icons/lu";
import { BsCheckLg } from "react-icons/bs";
import { Tooltip } from "@material-tailwind/react";
import { selep } from "@@/lib/sleep";
import { customAxios } from "@@/lib/api/axios";
import { likePost, unLikePost } from "@@/lib/likes/togleLike";
import { SavePost, unSavePost } from "@@/lib/likes/togleSave";
import {useRouter} from 'next/navigation';
export default function Card({
  id,
  name,
  price,
  quntity,
  like,
  save,
  isShowPrice,
  promotion,
  isShowPromotion,
  thumbanil,
}) {
  const [isLike, setIsLike] = useState(like || false);
  const [isSave, setIsSave] = useState(save || false);
  const [IsPulse, setIsPulse] = useState(false);
  const { width } = useWidth();
  const router=useRouter()
  const togglepulse = () => {
    setIsPulse((prev) => !prev);
  };
  const toggleSave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const req = { id };
    if (isSave) {
      setIsSave(false);
      unSavePost(req).catch((err) => console.error(err));
    }
    if (!isSave) {
      setIsSave(true);
      SavePost(req).catch((err) => console.error(err));
    }
  };
  const toggleLike = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const req = { type: "product", postId: id };
    if (isLike) {
      setIsLike(false);
      unLikePost(req).catch((err) => console.error(err));
    }
    if (!isLike) {
      setIsLike(true);
      likePost(req).catch((err) => console.error(err));
    }
  };
  const redirect=()=>{
    router.push(`/products/${id}`)
  }
  return (
    <div onClick={redirect} className="relative cursor-pointer flex h-56 w-36 flex-col justify-between overflow-hidden rounded-lg bg-gray-900 p-0 md:h-80 md:w-60">
      <div className="relative h-full max-h-[75%]">
        <div className="aspect-w-3 aspect-h-4 relative flex h-full w-full items-center justify-center">
          <div className="absolute flex h-full w-full items-center justify-center">
            <img
              crossOrigin="anonymous"
              className="max-h-full w-full object-cover"
              src={thumbanil}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mb-1">
        <div className="row-span-2 flex flex-col items-start justify-center">
          <h1 className="text-sm text-white md:text-lg">{name}</h1>
          {isShowPrice && !isShowPromotion && (
            <p className="text-sm text-scandaryColor">{price}</p>
          )}
          {isShowPrice && isShowPromotion && (
            <div className="">
              <p className="text-sm text-scandaryColor">{price}</p>
              <p className="text-xs text-white line-through">{promotion}</p>
            </div>
          )}
        </div>
        <div className="flex w-full items-center justify-between border-t-[1px] border-card2 px-2 py-px md:hidden md:py-2">
          <p className="text-sm text-white md:text-lg">الكمية: {quntity}</p>
          <Tooltip
            content={`${!isLike ? "اعجاب" : "تم الاعجاب"}`}
            placement="top"
          >
            <button onClick={toggleLike}>
              {isLike ? (
                <AiFillHeart size={width <= 767 ? 17 : 25} color="red" />
              ) : (
                <AiOutlineHeart size={width <= 767 ? 17 : 25} color="white" />
              )}
            </button>
          </Tooltip>
        </div>
      </div>
      <div className="hidden w-full items-center justify-between border-t-[1px] border-card2 px-2 py-px md:flex md:py-2">
        <p className="text-sm text-white md:text-lg">الكمية: {quntity}</p>
        <Tooltip
          content={`${!isLike ? "اعجاب" : "تم الاعجاب"}`}
          placement="top"
        >
          <button onClick={toggleLike}>
            {isLike ? (
              <AiFillHeart
                size={width <= 767 ? 17 : 25}
                color="red"
                className={`${IsPulse ? "animate- fill-red" : ""}`}
              />
            ) : (
              <AiOutlineHeart size={width <= 767 ? 17 : 25} color="white" />
            )}
          </button>
        </Tooltip>
      </div>
      <Tooltip
        content={`${!isSave ? "وضع في السلة" : "تم الوضع"}`}
        placement="top"
      >
        <button
          onClick={toggleSave}
          className={`absolute right-2 top-2 rounded-full p-2 ${
            !isSave ? "bg-white" : "bg-scandaryColor"
          }`}
        >
          {!isSave ? (
            <LuShoppingCart size={15} className={`stroke-basketColor`} />
          ) : (
            <BsCheckLg
              size={15}
              className={`animate-[appear_0.3s_ease-in-out] fill-white`}
            />
          )}
        </button>
      </Tooltip>
    </div>
  );
}
