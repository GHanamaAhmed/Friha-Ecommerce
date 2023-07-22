"use client";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState, useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { fetchProduct } from "@@/lib/api/products";

export default function Card({ basket, onAddOrder, onRemove }) {
  const [id, setId] = useState("");
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [quntity, setQuntity] = useState();
  const [photos, setPhotos] = useState([]);
  const [thumbanil, setThumbanil] = useState("");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [openMenuColor, setOpenMenuColor] = React.useState(false);
  const [openMenuSize, setOpenMenuSize] = React.useState(false);
  const [currentColor, setCurrentColor] = useState();
  const [currentSize, setCurrentSize] = useState();
  const triggersColor = {
    onClick: () => setOpenMenuColor((prev) => !prev),
  };

  const triggersSize = {
    onClick: () => setOpenMenuSize((prev) => !prev),
  };

  useEffect(() => {
    fetchProduct(basket?.productId).then((res) => {
      const data = res.data[0];
      setName(data?.name);
      setPrice(
        Number(
          data?.showPromotion && data?.promotion ? data?.promotion : data?.price
        )
      );
      setPhotos(data?.photos);
      setThumbanil(data?.thumbanil);
      setId(data?._id);
      data.photos.map((e, i) => {
        setSizes((prev) => [
          ...prev,
          ...e.sizes.filter(
            (e) =>
              !prev.includes(e) &&
              (e?.quntity > 0 ||
                e?.quntity === null ||
                e?.quntity === undefined)
          ),
        ]);
        setColors((prev) => [
          ...prev,
          ...e.colors.filter(
            (e) =>
              !prev.includes(e) &&
              (e?.quntity > 0 ||
                e?.quntity === null ||
                e?.quntity === undefined)
          ),
        ]);
      });
    });
    setQuntity(Number(basket?.quntity) || 1);
    setCurrentColor(basket?.color);
    setCurrentSize(basket?.size);
  }, [basket]);
  useEffect(() => {
    onAddOrder({
      id: basket?.productId,
      color: currentColor,
      size: currentSize,
      quntity,
      price: Number(quntity) * Number(price),
    });
  }, [basket, currentColor, currentSize, quntity, price]);
  return (
    <div className="flex justify-between px-2 py-5">
      <div className="flex flex-col justify-between">
        <p className="text-white">{price * quntity}</p>
        <button>
          <AiOutlineCloseCircle
            color="red"
            className="cursor-pointer"
            onClick={() => onRemove(id)}
          />
        </button>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col items-end justify-between">
          <p className="text-white">{name}</p>
          <div className="z-[99999] flex gap-2">
            {colors.length > 0 && (
              <Menu open={openMenuColor} handler={setOpenMenuColor}>
                <MenuHandler>
                  <Button
                    {...triggersColor}
                    variant="filled"
                    className="flex gap-2 rounded-sm px-3 py-2"
                    color="blue-gray"
                  >
                    اللون
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
                  className=" font-Hacen-Tunisia bg-card1 text-lightContent shadow-sm shadow-black hover:shadow-none"
                >
                  {colors.map((e, i) => (
                    <MenuItem key={i}>{e}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            )}
            {sizes.length > 0 && (
              <Menu open={openMenuSize} handler={setOpenMenuSize}>
                <MenuHandler>
                  <Button
                    {...triggersSize}
                    variant="filled"
                    className="flex gap-2 rounded-sm px-3 py-2"
                    color="blue-gray"
                  >
                    الحجم
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
                  className="font-Hacen-Tunisia bg-card1 text-lightContent shadow-sm shadow-black hover:shadow-none"
                >
                  {sizes.map((e, i) => (
                    <MenuItem key={i}>{e}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            )}
          </div>
          <div className="flex w-full justify-between border-blue-500">
            <Button
              onClick={() => setQuntity((prev) => prev + 1)}
              className="rounded-none px-2 py-0.5"
              variant="filled"
              color="blue-gray"
            >
              +
            </Button>
            <p className="px-2 py-0.5 text-white">{quntity}</p>
            <Button
              onClick={() => setQuntity((prev) => prev - 1)}
              className="rounded-none px-2 py-0.5"
              variant="filled"
              color="blue-gray"
            >
              -
            </Button>
          </div>
        </div>
        <Link href={`/products/${id}`}>
          {" "}
          <img
            crossOrigin="anonymous"
            className="h-28 w-28 cursor-pointer rounded-md object-cover"
            src={thumbanil}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
