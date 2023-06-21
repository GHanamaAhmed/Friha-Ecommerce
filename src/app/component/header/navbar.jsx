"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { selep } from "../../../../lib/sleep";
import Menu from "../menu/menu";
import { Button } from "@material-tailwind/react";
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [positionScroll, setPositinScroll] = useState(
    globalThis.window?.scrollY
  );
  const [headerPosition, setHeaderPosition] = useState("");
  useEffect(() => {
    const handlePosition = () => {
      if (positionScroll < globalThis.window?.scrollY) {
        setHeaderPosition("-translate-y-full");
      } else {
        setHeaderPosition("");
      }
      setPositinScroll(globalThis.window.scrollY);
    };
    window.addEventListener("scroll", handlePosition);
    return () => window.removeEventListener("scroll", () => {});
  }, [positionScroll]);
  const toggleMenu = (e) => {
    e.preventDefault();
    setOpenMenu((prev) => !prev);
  };
  const closeMenu = useCallback(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);
  return (
    <>
      <header
        className={`bg- fixed top-0 z-50 w-full bg-primaryColor px-4 md:px-14 ${headerPosition} flex items-center justify-between py-2 duration-500`}
      >
        <div className="hidden items-center justify-between gap-3 md:flex">
          <Button
            className="hidden md:block"
            variant="text"
            onClick={toggleMenu}
          >
            <AiOutlineMenu size={25} className="md:hiden" color="white" />
          </Button>
          <button className="border border-white px-4 py-2 text-white transition-all duration-200 hover:bg-white hover:text-primaryColor">
            انشاء حساب
          </button>
          <button className="text-white">تسجيل الدخول</button>
          <Link href={"#"} target="_blank">
            {" "}
            <FaInstagram color="white" />
          </Link>
          <Link href={"#"} target="_blank">
            {" "}
            <FaFacebookF color="white" />
          </Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          <AiOutlineMenu size={25} className="md:hiden" color="white" />
        </button>
        <div className="flex items-center gap-2">
          <h1 className="font-sans font-semibold text-white">FRI7A</h1>
          <img src="./res/Friha.png" width={50} alt="" />
        </div>
      </header>
      <Menu isOpen={openMenu} onClose={closeMenu} />
    </>
  );
}