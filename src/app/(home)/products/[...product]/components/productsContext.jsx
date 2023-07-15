"use client";
import { fetchProduct } from "@@/lib/api/products";
import React, { createContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
export const productsContext = createContext();
export default function ProductsContext({ children }) {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoadin] = useState(true);
  const params = useParams();
  const router = useRouter();
  useEffect(() => {
    fetchProduct(params.product)
      .then((res) => {
        if (!res.data.length) {
          router.replace("/");
        } else {
          setIsLoadin(false)
          setProduct(res.data[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        router.replace("/");
      });
  }, []);
  return (
    <productsContext.Provider value={{ product, isLoading }}>
      {children}
    </productsContext.Provider>
  );
}
