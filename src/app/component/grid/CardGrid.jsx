"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";
import Search from "./search";
import { selep } from "../../../../lib/sleep";
import CardGridLoading from "./cardGridLoading";
import { Button } from "@material-tailwind/react";
import { customAxios } from "@@/lib/api/axios";
export default function CardGrid() {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      await customAxios.get("/products").then((res) => {
        setIsLoading(false);
        setProduct(res.data);
      });
    };
    fetch();
  }, []);
  const content = () => {
    return (
      <>
       <Search />
        {!isLoading && product?.length>0 && (
          <>
           
            <div className="grid grid-cols-2 place-items-center gap-6 px-3 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
              {product.map((e, i) => {
                return (
                  <Card
                    key={i}
                    id={e?._id}
                    name={e?.name}
                    price={e?.price}
                    promotion={e?.promotion}
                    quntity={e?.quntity}
                    like={e?.isLike}
                    save={e?.isSave}
                    isShowPrice={e?.showPrice}
                    isShowPromotion={e?.showPromotion}
                    thumbanil={e?.thumbanil}
                  />
                );
              })}
            </div>
            <div className="flex w-full justify-center py-3">
              <Button
                variant="outlined"
                size="md"
                className={`font-Hacen-Tunisia border-lightContent ${"Focus:border-none text-lightContent focus:bg-scandaryColor focus:text-white"} focus:ring-0`}
              >
                المزيد
              </Button>
            </div>
          </>
        )}
        {isLoading && <CardGridLoading />}
        {!isLoading && !product?.length >0&& <div className="w-full h-full flex justify-center items-center mt-4 mb-20 md:mb-6"> <p className="text-white text-5xl">لايوجد منتوج حاليا</p></div>}
      </>
    );
  };
  return content();
}
