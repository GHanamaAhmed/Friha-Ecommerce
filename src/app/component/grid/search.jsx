"use client";
import React, { useEffect } from "react";
import {
  Menu as Menu2,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Input as Input2,
} from "../imports";

import { useState } from "react";
import TitleSection from "../../../../components/titleSection/titleSection";
export default function Search({
  types,
  onChangeType,
  type,
  onChangeInpute,
  onClick,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("الكل");
  const handleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <TitleSection
      className={
        "flex w-full flex-col items-start justify-between gap-3 md:flex-row md:items-center"
      }
      title={"المنتجات"}
      subtitle={"تشكيلة متنوعة من المنتجات ذات الجودة العالية"}
    >
      <div className="flex items-center gap-3">
        {types?.length > 0 && (
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
                {type}{" "}
              </Button>
            </MenuHandler>
            <MenuList className="font-Hacen-Tunisia bg-card1 text-lightSolid max-h-72">
              {["الكل", ...types]?.map((e, i) => (
                <MenuItem
                  onClick={() => {
                    setSelected(e);
                    onChangeType(e);
                  }}
                  className={selected == e ? "bg-lightContent text-black" : ""}
                  key={i}
                >
                  {e}
                </MenuItem>
              ))}
            </MenuList>
          </Menu2>
        )}
        <div className="relative h-11 w-full min-w-[150px]">
          <input
            onChange={(e) => onChangeInpute(e.currentTarget.value)}
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-gray-200 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            المنتج الذي تبحث عنه
          </label>
        </div>
        <Button
          onClick={() => {
            onClick();
          }}
          variant="outlined"
          size="md"
          className={`font-Hacen-Tunisia border-lightContent text-lightContent focus:ring-0 active:border-none active:bg-scandaryColor active:text-white`}
        >
          بحث
        </Button>
      </div>
    </TitleSection>
  );
}
