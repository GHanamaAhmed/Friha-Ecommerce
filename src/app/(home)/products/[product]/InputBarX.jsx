"use client";
import React from "react";
import { useState } from "react";
export default function InputBarX() {
  return (
    <div className="justify-apart flex w-full flex-row items-center px-4 ">
      <div className="flex w-full flex-row items-center justify-start ">
        <Menu text="اللون" />
        <Menu text="المقاس" />
      </div>
      <div className="flex w-full flex-row items-center justify-end ">
        {" "}
        <button className="flex h-11 w-11 items-center justify-center  rounded-full bg-gradient-to-r  from-teal-400 to-blue-600 bg-[size:_200%] bg-[position:_100%_100%] transition-all duration-500 hover:bg-[position:_0%_0%]">
          <img className="h-8 w-8" src="/res/buy.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
function Menu({ text }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="relative px-1">
      <button
        data-ripple-light="true"
        data-popover-target="menu"
        onClick={handleMenu}
        className="middle none center mr-3 rounded-lg border border-lightContent px-6 py-3 font-sans text-xs font-bold uppercase text-lightContent transition-all focus:border-none focus:text-teal-400 focus:ring-2 focus:ring-teal-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none md:px-8"
      >
        {text}
      </button>
      <ul
        role="menu"
        data-popover="menu"
        data-popover-placement="bottom"
        className={`absolute ${
          isOpen ? "" : "hidden"
        }  -bottom-2 right-0 z-10 mx-1 min-w-[180px] translate-y-full overflow-auto rounded-md border border-blue-gray-50 bg-card1 p-3 font-sans text-sm font-normal text-lightSolid shadow-lg shadow-blue-gray-500/10 focus:outline-none`}
      >
        <li
          role="menuitem"
          className="block w-full cursor-pointer select-none rounded-md px-3 pb-2 pt-[9px] text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          الخيار الاول
        </li>
        <li
          role="menuitem"
          className="block w-full cursor-pointer select-none rounded-md px-3 pb-2 pt-[9px] text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          الخيار الثاني
        </li>
        <li
          role="menuitem"
          className="block w-full cursor-pointer select-none rounded-md px-3 pb-2 pt-[9px] text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
        >
          الخيار الثالث
        </li>
      </ul>
    </div>
  );
}
function Input() {
  return (
    <div className="relative m-1 h-11 w-full min-w-[190px] bg-transparent">
      <input
        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-lightSolid outline  outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 md:px-20"
        placeholder=" "
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none bg-transparent text-[11px] font-normal leading-tight text-lightContent  transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-400 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-teal-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-teal-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        ماهي الملابس التي تبحث عنها
      </label>
    </div>
  );
}
