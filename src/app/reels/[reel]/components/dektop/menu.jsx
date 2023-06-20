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
import { ChevronDownIcon,ShoppingBagIcon } from "@heroicons/react/24/outline";
export default function Menus() {
  return (
		<>
			<Button
				variant="filled"
				className="flex bg-gradient-to-r from-azure via-azure to-trueblue  font-hacen-tunisia items-center gap-3 text-base  capitalize tracking-normal"
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
    onClick: () => setOpenMenu((prev)=>!prev),
  };

  return (
		<Menu open={openMenu} handler={setOpenMenu} className="">
			<MenuHandler>
				<Button
					{...triggers}
					variant="filled"
					className="flex font-hacen-tunisia bg-card1 shadow-black shadow-sm hover:shadow-none items-center gap-3 text-base font-normal capitalize tracking-normal"
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
				className="bg-card1 shadow-black shadow-sm hover:shadow-none text-lightContent font-Hacen-Tunisia"
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
    onClick: () => setOpenMenu((prev)=>!prev),
  };

  return (
		<Menu open={openMenu} handler={setOpenMenu}>
			<MenuHandler>
				<Button
					{...triggers}
					variant="filled"
					className="flex bg-card1 font-hacen-tunisia shadow-black shadow-sm hover:shadow-none items-center gap-3 text-base font-normal capitalize tracking-normal"
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
				className="bg-card1 shadow-black shadow-sm hover:shadow-none text-lightContent font-Hacen-Tunisia"
			>
				<MenuItem> الخيار الاول</MenuItem>
				<MenuItem> الخيار الاول</MenuItem>
				<MenuItem> الخيار الاول</MenuItem>
			</MenuList>
		</Menu>
	);
}