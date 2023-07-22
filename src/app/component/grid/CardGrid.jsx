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
  const [min, setMin] = useState(null);
  const [count, setCount] = useState(0);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("الكل");
  const [input, setInput] = useState("");
  useEffect(() => {
    const fetch = async () => {
      await customAxios.get(`/products`).then((res) => {
        setIsLoading(false);
        setProduct(res.data);
        res.data?.map((e, i) => {
          if ((e?.status || e?.isSave) && e?.type) {
            setTypes((prev) => [
              ...prev.filter((el) => el != e?.type),
              e?.type,
            ]);
          }
        });
        setMin(res.data?.length);
      });
    };
    const fetchCount = async () => {
      await customAxios.get(`/products/count`).then((res) => {
        setCount(res.data?.count - 1);
      });
    };
    fetch();
    fetchCount();
  }, []);
  const more = (e) => {
    e.preventDefault();
    const fetch = async () => {
      await customAxios.get(`/products/${min}/${min + 15}`).then((res) => {
        setProduct((prev) => [...prev, ...res.data]);
        res.data?.map((e, i) => {
          if (e?.status === true || e?.isSave === true) {
            setTypes((prev) => {
              if (prev?.includes(e?.type) && e?.type) {
                return [...prev, e?.type];
              }
            });
          }
        });
        setMin(res.data?.length + min);
      });
    };
    fetch();
  };
  const content = () => {
    return (
      <>
        <Search
          types={types}
          type={type}
          onChangeType={(e) => setType(e)}
          onChangeInpute={(e) => setInput(e)}
        />
        {!isLoading && product?.length > 0 && (
          <>
            <div className="grid grid-cols-2 place-items-center gap-6 px-3 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
              {product.map((e, i) => {
                if (
                  (e?.status === true || e?.isSave === true) &&
                  (e?.type == type || type == "الكل") &&
                  (e?.name?.includes(input) || input == "")
                )
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
                    />
                  );
              })}
            </div>
            <div className="flex w-full justify-center py-3">
              {min <= count && (
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
