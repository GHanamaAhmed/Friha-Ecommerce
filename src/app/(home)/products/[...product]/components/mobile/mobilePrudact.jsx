"use client";
import React, { useContext, useEffect, useState } from "react";
import Pictures from "./Pictures";
import Menus from "@/app/(home)/products/[...product]/components/desktop/details/menu";
import Par from "./par";
import MobileComents from "@@/components/comments/mobileComents";
import TitleSection from "../../../../../../../components/titleSection/titleSection";
import { BsArrowLeft } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { selep } from "@@/lib/sleep";
import { productsContext } from "../productsContext";
export default function MobilePrudact() {
  const router = useRouter();
  const [isShowComments, setIsShowComments] = useState(false);
  const [currentPicture, setCurrentPicture] = useState(0);
  const { isLoading, product } = useContext(productsContext);
  const handleComments = (value) => {
    setIsShowComments(value);
  };
  const changeCurrentPicture = (src) => {
    setCurrentPicture(src);
  };
  return (
    <div className="relative overflow-hidden">
      <div className="flex h-screen flex-col  items-center justify-center overflow-y-auto pt-44">
        <div className="relative flex w-full flex-col gap-3">
          <div className="min-[550px]:h-[400px] relative h-80 w-full">
            {!isLoading ? (
              (product.thumbanil || product.photos?.length) && (
                <Image
                  fill={true}
                  src={product?.photos[currentPicture] || product?.thumbanil}
                  alt=""
                />
              )
            ) : (
              <div className="flex h-full w-full animate-pulse items-center justify-center bg-gray-700">
                <svg
                  className="h-12 w-12 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
              </div>
            )}
          </div>
          <div className="w-full">
            <div className="flex w-full items-center justify-between px-2 text-end">
              {!isLoading ? (
                <>
                  <TitleSection title={"adidas"} subtitle={"20 da"} />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleComments(true);
                    }}
                  >
                    <AiFillMessage size={40} color="white" />
                  </button>
                </>
              ) : (
                <div className="flex w-full animate-pulse items-center justify-between px-2">
                  <div className="flex flex-col gap-2">
                    <div className="h-2.5 w-24 rounded-full bg-gray-600"></div>
                    <div className="h-2 w-14 rounded-full bg-gray-700"></div>
                  </div>
                  <div className="h-14 w-14 rounded-full bg-gray-700"></div>
                </div>
              )}
            </div>
            <button
              onClick={() => router.back()}
              className="absolute left-4 top-4"
            >
              <BsArrowLeft color="white" size="25px" />
            </button>
          </div>
        </div>
        <Pictures onClick={changeCurrentPicture} />
        {!isLoading ? (
          <div className="flex w-full justify-between px-4">
            <Menus />
          </div>
        ) : (
          <div className="flex w-full animate-pulse justify-between px-4">
            <div className="h-13 w-24 rounded-lg bg-gray-700"></div>
            <div className="h-14 w-24 rounded-lg bg-gray-700"></div>
            <div className="h-14 w-24 rounded-lg bg-gray-700"></div>
          </div>
        )}
        {!isLoading ? (
          product?.description && <Par />
        ) : (
          <div className="flex w-full animate-pulse flex-col items-start gap-1 p-4">
            <p className="font-Hacen-Tunisia text-xl text-scandaryColor">
              الوصف
            </p>
            <div class="mb-2.5 h-2 w-full rounded-full bg-gray-700"></div>
            <div class="mb-2.5 h-2 w-full rounded-full bg-gray-700"></div>
            <div class="mb-2.5 h-2 w-full rounded-full bg-gray-700"></div>
            <div class="mb-2.5 h-2 w-full rounded-full bg-gray-700"></div>
          </div>
        )}
        <MobileComents show={isShowComments} onClose={handleComments} />
      </div>
    </div>
  );
}
