"use client";
import { fetchProduct, fetchProductReel } from "@@/lib/api/products";
import React, { createContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { fetchReel } from "@@/lib/api/reels";
export const productsContext = createContext();
export default function ProductsContext({ children }) {
  const [product, setProduct] = useState(null);
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoadin] = useState(true);
  const [sizes, setSizes] = useState(["الكل"]);
  const [colors, setColors] = useState(["الكل"]);
  const [size, setSize] = useState("الكل");
  const [color, setColor] = useState("الكل");
  const [quntity, setQuntity] = useState(1);
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
            setProduct(res.data[0]);
          })
          .catch((err) => console.error(err));
      });
  }, [window.history.state]);
  useEffect(() => {
    if (product) {
      product.photos
        ?.filter(
          (e, i) =>
            i == product?.photos?.findIndex((o) => e?.color === o?.color)
        )
        .map((e, i) => {
          setColors((prev) => [...prev, e.color]);
        });
    }
  }, [product]);
  useEffect(() => {
    setSizes(["الكل"]);
    product?.photos?.map((e, i) => {
      e.color == color && setSizes((prev) => [...prev, ...e.sizes]);
    });
  }, [color, colors]);
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
        quntity,
        setQuntity,
      }}
    >
      {children}
    </productsContext.Provider>
  );
}
