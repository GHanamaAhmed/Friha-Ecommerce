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
  const [min, setMin] = useState(0);
  const [count, setCount] = useState(0);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("الكل");
  const [input, setInput] = useState("");
  const fetch = async () => {
    await customAxios
      .get(
        `/products?min=${min}&max=${min + 8}${
          input.length > 0 ? `&name=${input}` : ""
        }${type != "الكل" ? `&type=${type}` : ""}`
      )
      .then((res) => {
        setIsLoading(false);
        setProduct((prev) => [...prev, ...res.data.products]);
        setMin(res.data.products?.length + min);
        setTypes(res.data?.types);
        setCount(res.data?.count);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetch();
  }, [type]);
  const more = (e) => {
    e.preventDefault();
    fetch();
  };
  const content = () => {
    return (
      <>
        <Search
          onClick={() => {
            fetch();
          }}
          types={types}
          type={type}
          onChangeType={(e) => setType(e)}
          onChangeInpute={(e) => setInput(e)}
        />
        {!isLoading && product?.length > 0 && (
          <>
            <div className="grid grid-cols-2 place-items-center gap-6 px-3 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
              {product.map((e, i) => {
                if (e?.status === true || e?.isSave === true)
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
                      status={e?.status}
                      photos={e?.photos}
                    />
                  );
              })}
            </div>
            <div className="flex w-full justify-center py-3">
              {min < count && (
                <Button
                  onClick={more}
                  variant="outlined"
                  size="md"
                  className={`font-Hacen-Tunisia border-lightContent ${"Focus:border-none text-lightContent focus:bg-scandaryColor focus:text-white"} focus:ring-0`}
                >
                  المزيد
                </Button>
              )}
            </div>
          </>
        )}
        {isLoading && <CardGridLoading />}
        {!isLoading && !product?.length > 0 && (
          <div className="mb-20 mt-4 flex h-full w-full items-center justify-center md:mb-6">
            {" "}
            <p className="text-5xl text-white">لايوجد منتوج حاليا</p>
          </div>
        )}
      </>
    );
  };
  return content();
}
