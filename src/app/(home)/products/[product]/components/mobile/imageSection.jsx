"use client";
import React from "react";
import TitleSection from "../../../../../../../components/titleSection/titleSection";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function ImageSection({ img }) {
  const router = useRouter();
  return (
    <div className="relative flex flex-col w-full gap-3">
      <div className="relative h-80 w-full">
        <Image fill={true} src={img} alt="" />
      </div>
      <div className="w-full">
        <div className="flex w-full items-center justify-between px-2 text-end">
          <TitleSection title={"adidas"} subtitle={"20 da"} />
          <button>
            <AiFillMessage size={40} color="white" />
          </button>
        </div>
        <button onClick={() => router.back()} className="absolute left-4 top-4">
          <BsArrowLeft color="white" size="25px" />
        </button>
      </div>
    </div>
  );
}
