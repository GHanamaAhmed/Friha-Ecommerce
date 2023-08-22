"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function Footer() {
  const { infoAdmin } = useSelector((store) => store.account);
  return (
    <div className="flex w-full flex-col items-end gap-7 px-2 md:px-14">
      <div className="flex w-full flex-col items-end gap-7 md:flex-row-reverse md:justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-sans font-semibold text-white">FRI7A</h1>
          <img src="./res/Friha.png" width={50} alt="" />
        </div>
        <div className="flex flex-col gap-2 md:flex-row-reverse md:gap-7">
          <div className="flex flex-col gap-2 md:flex-row">
            {infoAdmin?.email && (
              <p className="text-lightContent">{infoAdmin?.email}</p>
            )}
            {infoAdmin?.phone && (
              <p className="text-lightContent">{infoAdmin?.phone}</p>
            )}
          </div>
          <div className="flex justify-end gap-5 md:justify-start">
            {infoAdmin?.instagram && (
              <a href={infoAdmin?.instagram} target="_blank">
                {" "}
                <FaInstagram color="white" />
              </a>
            )}
            {infoAdmin?.facebook && (
              <a href={infoAdmin?.facebook} target="_blank">
                {" "}
                <FaFacebookF color="white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-end gap-7 md:items-start">
        <div className="h-1 w-11/12 self-center rounded-full bg-card1"></div>
        <div className="flex w-full justify-end text-end md:justify-start">
          <h2 className="font-semibold text-lightContent">
            Designed and built by{" "}
            <p className="inline bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent">
              Crow
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}
