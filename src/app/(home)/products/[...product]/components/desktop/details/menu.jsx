"use client";
import React, { useContext, useEffect } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Chip,
} from "@material-tailwind/react";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { productsContext } from "../../productsContext";
import { LuShoppingCart } from "react-icons/lu";
import {
  addToBasket,
  changeIsOrder,
  emptyBasket,
} from "@/app/redux/basketReducer";
import { useDispatch } from "react-redux";
import { toasty } from "@/app/component/toasty/toast";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode } from "swiper";
export default function Menus({ product }) {
  const { colors, sizes, color, size, quntity, setQuntity } =
    useContext(productsContext);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <>
      {colors?.length > 0 && <Color />}
      {sizes?.length > 0 && <Size />}
      <div className="flex h-fit w-fit justify-between gap-2 border-blue-500">
        <Button
          onClick={() => {
            if (color && size && color != "الكل" && size != "الكل") {
              product?.photos?.[
                product?.photos?.findIndex(
                  (el, ind) => el?.color == color && el?.sizes?.includes(size)
                )
              ]?.quntity -
                quntity >
                0 && setQuntity((prev) => prev + 1);
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
        <p className="px-2 py-0.5 text-white">{quntity}</p>
        <Button
          onClick={() => {
            if (color) {
              quntity > 1 && setQuntity((prev) => prev - 1);
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
      <div className="flex gap-3">
        <Button
          onClick={() => {
            if (color != "الكل" && size != "الكل" && size && color) {
              dispatch(emptyBasket());
              dispatch(
                addToBasket({
                  id: product?._id,
                  name: product?.name,
                  price: product?.price,
                  quntity,
                  thumbanil: product?.thumbanil,
                  photos: product?.photos,
                  color,
                  size,
                })
              );
              dispatch(changeIsOrder(true));
              router.push("/checkout");
            } else {
              toasty("حدد اللون و الحجم", {
                toastId: "addProduct",
                autoClose: 5000,
                type: "warning",
              });
            }
          }}
          variant="filled"
          className="font-hacen-tunisia flex items-center gap-3 bg-scandaryColor bg-gradient-to-r px-2 text-base capitalize tracking-normal text-white  shadow-none hover:shadow-none"
        >
          طلب
          <ShoppingBagIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform`}
          />
        </Button>
        <Button
          onClick={() => {
            if (color != "الكل" && size != "الكل" && size && color) {
              dispatch(
                addToBasket({
                  id: product?._id,
                  name: product?.name,
                  price: product?.price,
                  quntity,
                  thumbanil: product?.thumbanil,
                  photos: product?.photos,
                  color,
                  size,
                })
              );
              toasty("تم وضع المنتج في السلة", {
                toastId: "addProduct",
                autoClose: 5000,
                type: "success",
              });
            } else {
              toasty("حدد اللون و الحجم", {
                toastId: "addProduct",
                autoClose: 5000,
                type: "warning",
              });
            }
          }}
          variant="filled"
          className="font-hacen-tunisia flex items-center gap-3 bg-scandaryColor bg-gradient-to-r px-2 text-base capitalize tracking-normal text-white  shadow-none hover:shadow-none"
        >
          السلة
          <LuShoppingCart size={15} color="white" />
        </Button>
      </div>
    </>
  );
}

function Color() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { colors, setColor, color, setSize, product } =
    useContext(productsContext);
  const triggers = {
    onClick: () => setOpenMenu((prev) => !prev),
  };

  return (
    <div className="grid">
      {" "}
      <Swiper
        className="mySlider2 w-full h-full"
        modules={[A11y, FreeMode]}
        spaceBetween={10}
        slidesPerView={5.5}
        freeMode={true}
        breakpoints={{
          767: {
            slidesPerView: 7.5,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 8.5,
            spaceBetween: 50,
          },
        }}
      >
        {colors.map((e, i) => (
          <SwiperSlide
            className="w-full py-2"
            onClick={(el) => {
              setColor(e);
              setSize("الكل");
              setOpenMenu(false);
            }}
            key={i}
          >
            {e != "الكل" && (
              <div
                className={`h-5 w-5 rounded-full border ${
                  color == e ? "shadow-blue-900/20 ring-4" : ""
                }`}
                style={{ backgroundColor: e }}
              ></div>
            )}
            {e == "الكل" && (
              <Chip
                variant={color != e ? `outlined` : "filled"}
                color={
                  !product?.photos?.[
                    product?.photos?.findIndex((el, ind) => el?.color == color)
                  ]?.quntity && e != "الكل"
                    ? "blue-gray"
                    : ""
                }
                className="h-fit w-fit"
                value={
                  <p
                    className={
                      !product?.photos?.[
                        product?.photos?.findIndex(
                          (el, ind) => el?.color == color
                        )
                      ]?.quntity && e != "الكل"
                        ? `line-through`
                        : ""
                    }
                  >
                    {e}
                  </p>
                }
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
function Size() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { sizes, setSize, size, product, color, setQuntity } =
    useContext(productsContext);
  const triggers = {
    onClick: () => setOpenMenu((prev) => !prev),
  };
  return (
    <Swiper
      className="mySlider2 w-full h-full max-w-xs"
      modules={[A11y, FreeMode]}
      spaceBetween={10}
      slidesPerView={5.5}
      freeMode={true}
      breakpoints={{
        767: {
          slidesPerView: 7.5,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 8.5,
          spaceBetween: 50,
        },
      }}
    >
      {sizes
        .filter((e) => e != "الكل")
        .map((e, i) => (
          <SwiperSlide
          className="p-0 m-0"
            onClick={() => {
              if (
                product?.photos?.[
                  product?.photos?.findIndex(
                    (el, ind) => el?.color == color && el?.sizes?.includes(e)
                  )
                ]?.quntity
              ) {
                setSize(e);
                setQuntity(1);
              }
            }}
            key={i}
          >
            <Chip
              variant={size != e ? `outlined` : "filled"}
              color={
                !product?.photos?.[
                  product?.photos?.findIndex(
                    (el, ind) => el?.color == color && el?.sizes?.includes(e)
                  )
                ]?.quntity && e != "الكل"
                  ? "blue-gray"
                  : ""
              }
              className="m-0 h-fit w-fit"
              value={
                <p
                  className={
                    !product?.photos?.[
                      product?.photos?.findIndex(
                        (el, ind) =>
                          el?.color == color && el?.sizes?.includes(e)
                      )
                    ]?.quntity && e != "الكل"
                      ? `line-through`
                      : ""
                  }
                >
                  {e}
                </p>
              }
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
