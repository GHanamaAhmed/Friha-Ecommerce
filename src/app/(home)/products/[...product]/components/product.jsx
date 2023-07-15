"use client";
import React from "react";
import MobilePrudact from "./mobile/mobilePrudact";
import { useWidth } from "@@/lib/hooks/useWidth";
import Desktopprudact from "./desktop/desktopprudact";
import CommentContext from "@@/components/comments/comentContext";
import ProductsContext from "./productsContext";
export default function Product() {
  const { width, isLoading } = useWidth();
  return isLoading ? (
    <h1>loading</h1>
  ) : (
    <ProductsContext>
      <CommentContext>
        {" "}
        {!isLoading && width <= 767 ? <MobilePrudact /> : <Desktopprudact />}
      </CommentContext>
    </ProductsContext>
  );
}
