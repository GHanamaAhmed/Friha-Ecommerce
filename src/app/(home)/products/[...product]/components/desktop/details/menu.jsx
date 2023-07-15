"use client";
import React, { useContext } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { productsContext } from "../../productsContext";
export default function Menus() {
  const { colors, sizes } = useContext(productsContext);
  return (
    <>
      <Button
        variant="filled"
        className="font-hacen-tunisia flex items-center gap-3 bg-scandaryColor bg-gradient-to-r px-5 text-base capitalize tracking-normal text-white  shadow-none hover:shadow-none"
      >
        شراء
        <ShoppingBagIcon
          strokeWidth={2.5}
          className={`h-3.5 w-3.5 transition-transform`}
        />
      </Button>
      {colors?.length > 1 && <Color />}
      {sizes?.length > 1 && <Size />}
    </>
  );
}

function Color() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { colors, setColor } = useContext(productsContext);
  const triggers = {
    onClick: () => setOpenMenu((prev) => !prev),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu} className="">
      <MenuHandler>
        <Button
          {...triggers}
          variant="filled"
          className="font-hacen-tunisia flex items-center gap-3 bg-card1 px-5 text-base font-normal capitalize tracking-normal shadow-sm shadow-black hover:shadow-none"
        >
          اللون
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
              el.preventDefault();
              setColor(e);
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
  const { sizes, setSize } = useContext(productsContext);
  const triggers = {
    onClick: () => setOpenMenu((prev) => !prev),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          {...triggers}
          variant="filled"
          className="font-hacen-tunisia flex items-center gap-3 bg-card1 px-5 text-base font-normal capitalize tracking-normal shadow-sm shadow-black hover:shadow-none"
        >
          الحجم
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
            onClick={(el) => {
              el.preventDefault();
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
