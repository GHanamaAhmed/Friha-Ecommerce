"use client";
import React from "react";
import {
  Menu as Menu2,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Input as Input2,
} from "../imports";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
export default function InputBar() {
  return (
    <>
      <Menu text={"النوع"} />
      <Input />
    </>
  );
}
function Menu({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Menu2 open={isOpen} handler={setIsOpen}>
      <MenuHandler>
        <Button
          variant="outlined"
          size="md"
          className={`font-Hacen-Tunisia border-lightContent ${
            !isOpen
              ? "text-lightContent"
              : "border-none bg-scandaryColor text-white"
          } focus:ring-0`}
          onClick={handleMenu}
        >
          {text}
        </Button>
      </MenuHandler>
      <MenuList className="font-Hacen-Tunisia bg-card1 text-lightSolid">
        <MenuItem>النوع 1</MenuItem>
        <MenuItem>النوع 2</MenuItem>
        <MenuItem>النوع 3</MenuItem>
      </MenuList>
    </Menu2>
  );
}
function Input() {
  return (
    <div className="relative h-11 w-full min-w-[200px]">
      <input
        className="peer h-full w-full text-gray-200 rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        المتج الذي تبحث عنه
      </label>
    </div>
  );
}
