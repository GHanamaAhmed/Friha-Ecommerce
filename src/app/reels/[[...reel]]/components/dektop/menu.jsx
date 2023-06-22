import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
export default function Menus() {
  return (
    <>
      <Button
        variant="filled"
        className="font-hacen-tunisia flex items-center gap-3 bg-gradient-to-r bg-scandaryColor text-white shadow-none hover:shadow-none text-base  capitalize tracking-normal"
      >
        شراء
        <ShoppingBagIcon
          strokeWidth={2.5}
          className={`h-3.5 w-3.5 transition-transform`}
        />
      </Button>
      <Color />
      <Size />
    </>
  );
}

function Color() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const triggers = {
    onClick: () => setOpenMenu((prev) => !prev),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu} className="">
      <MenuHandler>
        <Button
          {...triggers}
          variant="filled"
          className="font-hacen-tunisia flex items-center gap-3 bg-card1 text-base font-normal capitalize tracking-normal shadow-sm shadow-black hover:shadow-none"
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
        <MenuItem> الخيار الاول</MenuItem>
        <MenuItem> الخيار الاول</MenuItem>
        <MenuItem> الخيار الاول</MenuItem>
      </MenuList>
    </Menu>
  );
}
function Size() {
  const [openMenu, setOpenMenu] = React.useState(false);

  const triggers = {
    onClick: () => setOpenMenu((prev) => !prev),
  };

  return (
    <Menu open={openMenu} handler={setOpenMenu}>
      <MenuHandler>
        <Button
          {...triggers}
          variant="filled"
          className="font-hacen-tunisia flex items-center gap-3 bg-card1 text-base font-normal capitalize tracking-normal shadow-sm shadow-black hover:shadow-none"
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
        <MenuItem> الخيار الاول</MenuItem>
        <MenuItem> الخيار الاول</MenuItem>
        <MenuItem> الخيار الاول</MenuItem>
      </MenuList>
    </Menu>
  );
}
