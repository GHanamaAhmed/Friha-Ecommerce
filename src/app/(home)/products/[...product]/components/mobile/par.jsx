"use client"

import { useContext } from "react";
import { productsContext } from "../productsContext";

export default function Par() {
  const { product } = useContext(productsContext);
  return (
    <div className="p-4 w-full">
      <p className="font-Hacen-Tunisia text-xl text-scandaryColor">الوصف</p>
      <p className="w-full text-justify text-lightSolid">
      {product?.description}
      </p>
    </div>
  );
}
