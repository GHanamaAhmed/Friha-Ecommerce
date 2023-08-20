"use client";
import "swiper/css";
import "swiper/css/navigation";
import Menus from "./menu";
import Pictures from "./pictures";
import { useContext, useState } from "react";
import TitleSection from "../../../../../../../../components/titleSection/titleSection";
import { productsContext } from "../../productsContext";
export default function Details({ onlyProduct }) {
  const { isLoading, product } = useContext(productsContext);
  return (
    <div className="flex h-full w-full flex-col items-center">
      {isLoading ? (
        <LoadingDetails />
      ) : (
        <>
          <div className={`h-full w-full`}>
            <div className="col-span-8 flex h-full w-full flex-col  items-center">
              <div className={`w-11/12`}>
                {onlyProduct && product?.name && (
                  <TitleSection
                    title={product?.name}
                    subtitle={product?.price}
                  />
                )}
              </div>
              <div className="flex h-5/6 w-full flex-col items-center justify-start">
                <div className="flex w-full flex-col items-start gap-3">
                  <Pictures direction={"horizontal"} />
                  <div className="grid grid-rows-4 w-full gap-3 px-5">
                    <Menus product={product}/>
                  </div>
                  {product?.description && (
                    <div className="px-5 w-full">
                      <p className="font-Hacen-Tunisia text-xl text-scandaryColor">
                        الوصف
                      </p>
                      <p className="text-justify w-full text-white">
                        {product?.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function LoadingDetails() {
  return (
    <div className="flex h-full w-full animate-pulse flex-col items-center pt-7">
      <div className="w-11/12 pt-4">
        <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-700"></div>
        <div className="mb-4 h-2 w-40 rounded-full bg-gray-700"></div>
      </div>
    </div>
  );
}
