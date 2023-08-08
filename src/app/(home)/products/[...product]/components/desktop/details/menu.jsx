"use client";
import React, { useContext } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { productsContext } from "../../productsContext";
import { LuShoppingCart } from "react-icons/lu";
import { SavePost } from "@@/lib/likes/togleSave";
import { addToBasket } from "@/app/redux/basketReducer";
import { useDispatch } from "react-redux";
import { toasty } from "@/app/component/toasty/toast";
export default function Menus({ product }) {
  const { colors, sizes, color, size } = useContext(productsContext);
  const dispatch = useDispatch();
  return (
    <>
      <Button
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
                quntity: 1,
                thumbanil: product?.thumbanil,
                photos: product?.photos,
                color,
                size,
              })
            );
          }else{
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
      {colors?.length > 0 && <Color />}
      {sizes?.length > 0 && <Size />}
    </>
  );
}

function Color() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { colors, setColor, color, setSize } = useContext(productsContext);
  const triggers = {
    onClick: () => setOpenMenu((prev) => !prev),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu} className="">
      <MenuHandler>
        <Button
          {...triggers}
          variant="filled"
          className="font-hacen-tunisia flex items-center gap-3 bg-card1 px-2 text-base font-normal capitalize tracking-normal shadow-sm shadow-black hover:shadow-none"
        >
          {color || "اللون"}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList
        {...triggers}
        className="font-Hacen-Tunisia bg-card1 text-lightContent shadow-sm shadow-black hover:shadow-none"
      >
        {colors.map((e, i) => (
          <MenuItem
            onClick={(el) => {
              setColor(e);
              setSize("الكل");
            }}
            key={i}
          >
            {e}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
function Size() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { sizes, setSize, size } = useContext(productsContext);
  const triggers = {
    onClick: () => setOpenMenu((prev) => !prev),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          {...triggers}
          variant="filled"
          className="font-hacen-tunisia flex items-center gap-3 bg-card1 px-2 text-base font-normal capitalize tracking-normal shadow-sm shadow-black hover:shadow-none"
        >
          {size || "الحجم"}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList
        {...triggers}
        className="font-Hacen-Tunisia bg-card1 text-lightContent shadow-sm shadow-black hover:shadow-none"
      >
        {sizes.map((e, i) => (
          <MenuItem
            onClick={() => {
              setSize(e);
            }}
            key={i}
          >
            {e}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
