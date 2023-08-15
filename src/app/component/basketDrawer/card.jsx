"use client";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { remveByIdFromBasket, updateBasket } from "@/app/redux/basketReducer";
import { toasty } from "../toasty/toast";
export default function Card({ basket, index }) {
  const [openMenuColor, setOpenMenuColor] = useState(false);
  const [openMenuSize, setOpenMenuSize] = useState(false);
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
      <div className="flex gap-5">
        <div className="flex flex-col items-end justify-between">
          <p className="text-white">{basket?.name}</p>
          <div className="z-[99999] flex gap-2">
            <Menu open={openMenuColor} handler={setOpenMenuColor}>
              <MenuHandler>
                <Button
                  {...triggersColor}
                  variant="filled"
                  className="flex gap-2 rounded-sm px-3 py-2"
                  color="blue-gray"
                >
                  {basket?.color || "اللون"}{" "}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenuColor ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList
                {...triggersColor}
                className=" font-Hacen-Tunisia z-[9999] bg-card1 text-lightContent shadow-sm shadow-black hover:shadow-none"
              >
                {basket?.photos
                  ?.filter(
                    (e, i) =>
                      i ==
                      basket?.photos?.findIndex((o) => e?.color === o?.color)
                  )
                  .map((e, i) => (
                    <MenuItem
                      onClick={() =>
                        dispatch(
                          updateBasket({
                            index,
                            basket: {
                              ...basket,
                              color: e?.color,
                              size: undefined,
                              quntity: 0,
                            },
                          })
                        )
                      }
                      key={i}
                    >
                      {e?.color}
                    </MenuItem>
                  ))}
              </MenuList>
            </Menu>
            <Menu open={openMenuSize} handler={triggerSize}>
              <MenuHandler>
                <Button
                  {...triggersSize}
                  variant="filled"
                  className="flex gap-2 rounded-sm px-3 py-2"
                  color="blue-gray"
                >
                  {basket?.size || "الحجم"}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3.5 w-3.5 transition-transform ${
                      openMenuSize ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              </MenuHandler>
              <MenuList
                {...triggersSize}
                className="font-Hacen-Tunisia z-[9999] bg-card1 text-lightContent shadow-sm shadow-black hover:shadow-none"
              >
                {[
                  ...basket?.photos
                    .filter((e) => e.color == basket?.color )
                    .map((e, i) => {
                      return e.sizes.map((elm, ind) => {
                        return (
                          <MenuItem
                            onClick={() =>
                              dispatch(
                                updateBasket({
                                  index,
                                  basket: {
                                    ...basket,
                                    size: elm,
                                    quntity: 0,
                                    maxQuntity: basket?.photos[i]?.quntity,
                                  },
                                })
                              )
                            }
                            key={ind}
                          >
                            {elm}
                          </MenuItem>
                        );
                      });
                    }),
                ]}
              </MenuList>
            </Menu>
          </div>
          <div className="flex w-full justify-between border-blue-500">
            <Button
              onClick={() => {
                if (basket?.color) {
                  basket?.maxQuntity - basket?.quntity > 0 &&
                    dispatch(
                      updateBasket({
                        index,
                        basket: { ...basket, quntity: basket?.quntity + 1 },
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
