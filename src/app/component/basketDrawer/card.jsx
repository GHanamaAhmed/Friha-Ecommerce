"use client";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Carousel,
  Chip,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { remveByIdFromBasket, updateBasket } from "@/app/redux/basketReducer";
import { toasty } from "../toasty/toast";
import { A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
export default function Card({ basket, index }) {
  const [openMenuColor, setOpenMenuColor] = useState(false);
  const [openMenuSize, setOpenMenuSize] = useState(false);
  const [sizeSlides, setSizeSlides] = useState(2.5);
  const dispatch = useDispatch();
  const triggersColor = {
    onClick: () => setOpenMenuColor((prev) => !prev),
  };
  const triggersSize = {
    onClick: () => setOpenMenuSize((prev) => !prev),
  };
  const triggerSize = () => {
    if (openMenuSize == false) {
      if (!basket?.color) {
        toasty("اختر اللون اولا", {
          position: "top-left",
          toastId: "selectColor",
          autoClose: 5000,
          type: "warning",
        });
      } else {
        return setOpenMenuSize((prev) => !prev);
      }
    } else {
      return setOpenMenuSize((prev) => !prev);
    }
  };
  return (
    <div className="flex justify-between px-2 py-5">
      <div className="flex flex-col justify-between">
        <p className="text-white">{basket?.price * basket?.quntity}</p>
        <button>
          <AiOutlineCloseCircle
            color="red"
            className="cursor-pointer"
            onClick={() => dispatch(remveByIdFromBasket(index))}
          />
        </button>
      </div>
      <div className="flex w-full gap-5">
        <div className="flex w-full flex-col items-end justify-between">
          <p className="text-white">{basket?.name}</p>
          <div className="z-[99999] flex w-full flex-col items-end gap-2">
            <Swiper
              className="mySlider1 w-full max-w-[170px]"
              modules={[A11y, FreeMode]}
              spaceBetween={5}
              slidesPerView={4.5}
              freeMode={true}
            >
              {basket?.photos
                ?.filter(
                  (e, i) =>
                    i == basket?.photos?.findIndex((o) => e?.color === o?.color)
                )
                .map((e, i) => (
                  <SwiperSlide
                    className="m-0 cursor-pointer p-2"
                    onClick={() =>
                      dispatch(
                        updateBasket({
                          index,
                          basket: {
                            ...basket,
                            color: e?.color,
                            size: undefined,
                            quntity: 1,
                          },
                        })
                      )
                    }
                    key={i}
                  >
                    <div
                      className={`h-5 w-5 rounded-full border ${
                        basket?.color == e.color
                          ? "shadow-blue-900/20 ring-4"
                          : ""
                      }`}
                      style={{ backgroundColor: e.color }}
                    ></div>
                  </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
              className="mySlider1 w-full max-w-[170px] p-0"
              modules={[A11y, FreeMode]}
              spaceBetween={5}
              slidesPerView={2.5}
              freeMode={true}
            >
              {[
                ...basket?.photos
                  .filter((e) => e.color == basket?.color)
                  .map((e, i) => {
                    return e.sizes.map((elm, ind) => {
                      return (
                        <SwiperSlide
                          className="m-0 cursor-pointer py-2"
                          onClick={() =>
                            basket?.photos[i]?.quntity &&
                            dispatch(
                              updateBasket({
                                index,
                                basket: {
                                  ...basket,
                                  size: elm,
                                  quntity: 1,
                                  maxQuntity: basket?.photos[i]?.quntity,
                                },
                              })
                            )
                          }
                          key={ind}
                        >
                          <Chip
                            variant={
                              elm != basket?.size ? `outlined` : "filled"
                            }
                            color={
                              !basket?.photos[i]?.quntity ? "blue-gray" : ""
                            }
                            className="chip h-fit w-fit"
                            value={
                              <p
                                className={
                                  !basket?.photos[i]?.quntity
                                    ? `line-through`
                                    : ""
                                }
                              >
                                {elm}
                              </p>
                            }
                          />
                        </SwiperSlide>
                      );
                    });
                  }),
              ]}
            </Swiper>
          </div>
          <div className="flex justify-between gap-2 border-blue-500">
            <Button
              onClick={() => {
                if (basket?.color && basket?.size) {
                  basket?.maxQuntity - basket?.quntity > 0 &&
                    dispatch(
                      updateBasket({
                        index,
                        basket: { ...basket, quntity: basket?.quntity + 1 },
                      })
                    );
                } else {
                  toasty("اختر اللون و الحجم اولا", {
                    position: "top-left",
                    toastId: "selectColor",
                    autoClose: 5000,
                    type: "warning",
                  });
                }
              }}
              className="rounded-none px-2 py-0.5"
              variant="filled"
              color="blue-gray"
            >
              +
            </Button>
            <p className="px-2 py-0.5 text-white">{basket?.quntity}</p>
            <Button
              onClick={() => {
                if (basket?.color) {
                  basket?.quntity > 1 &&
                    dispatch(
                      updateBasket({
                        index,
                        basket: {
                          ...basket,
                          quntity: !basket?.quntity ? 0 : basket?.quntity - 1,
                        },
                      })
                    );
                } else {
                  toasty("اختر اللون اولا", {
                    position: "top-left",
                    toastId: "selectColor",
                    autoClose: 5000,
                    type: "warning",
                  });
                }
              }}
              className="rounded-none px-2 py-0.5"
              variant="filled"
              color="blue-gray"
            >
              -
            </Button>
          </div>
        </div>
        <Link href={`/products/${basket?.id}`}>
          {" "}
          <img
            crossOrigin="anonymous"
            className="h-28 w-28 cursor-pointer rounded-md object-cover"
            src={basket.thumbanil}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
