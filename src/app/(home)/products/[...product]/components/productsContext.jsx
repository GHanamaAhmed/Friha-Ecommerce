"use client";
import { fetchProduct, fetchProductReel } from "@@/lib/api/products";
import React, { createContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { fetchReel } from "@@/lib/api/reels";
export const productsContext = createContext();
export default function ProductsContext({ children }) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoadin] = useState(true);
  const [sizes, setSizes] = useState(["الكل"]);
  const [colors, setColors] = useState(["الكل"]);
  const [size, setSize] = useState("الكل");
  const [color, setColor] = useState("الكل");
  const params = useParams();
  const router = useRouter();
  useEffect(() => {
    fetchProduct(params.product)
      .then((res) => {
        if (!res.data.length) {
          router.replace("/");
        } else {
          setIsLoadin(false);
          setProduct(res.data[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        !window.history.state && !params?.reel && router.replace("/");
        fetchProductReel(window.history.state || params?.reel)
          .then((res) => {
            setIsLoadin(false);
            console.log(window.history.state, params?.reel);
            setProduct(res.data[0]);
          })
          .catch((err) => console.error(err));
      });
  }, [window.history.state]);
  useEffect(() => {
    if (product) {
      product.photos.map((e, i) => {
        setSizes((prev) => [
          ...prev,
          ...e.sizes.filter(
            (e) =>
              !prev.includes(e) &&
              (e?.quntity > 0 ||
                e?.quntity === null ||
                e?.quntity === undefined)
          ),
        ]);
        setColors((prev) => [
          ...prev,
          ...e.colors.filter(
            (e) =>
              !prev.includes(e) &&
              (e?.quntity > 0 ||
                e?.quntity === null ||
                e?.quntity === undefined)
          ),
        ]);
      });
    }
  }, [product]);
  return (
    <productsContext.Provider
      value={{
        product,
        isLoading,
        sizes,
        colors,
        setColor,
        setSize,
        size,
        color,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}
