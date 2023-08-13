"use client";
import { useEffect, useState } from "react";
export const useWidth = () => {
  const [width, setWidth] = useState(globalThis?.innerWidth || 360);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setWidth(globalThis.innerWidth);
    setIsLoading(false);
    globalThis.addEventListener("resize", () => {
        setWidth(globalThis.innerWidth)
    });
    return () => globalThis.removeEventListener("resize", () => {});
  }, []);
  return { width, isLoading };
};
