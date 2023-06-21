"use client";
import React, { useEffect, useState } from "react";
import img1 from "../swipers/img/reels.png";
import Card from "./card";
import Search from "./search";
import { selep } from "../../../../lib/sleep";
import CardGridLoading from "./cardGridLoading";
export default function CardGrid() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    selep().then(setIsLoading(false));
  }, []);
  const content = () => {
    return !isLoading ? (
      <>
        <Search />
        <div className="grid grid-cols-2 place-items-center gap-6 px-3 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          {[...Array(10)].map((e, i) => {
            return (
              <Card
                key={i}
                title={"producto"}
                subtitle={"free!!!!"}
                img={img1}
              />
            );
          })}
        </div>
        <div className="flex w-full justify-center py-3">
          <button className="middle none center mr-3 rounded-lg border border-lightContent px-6 py-3 font-sans text-xs font-bold uppercase text-lightContent transition-all focus:border-none focus:ring-2 active:text-cyan-400 active:ring-cyan-300 md:px-8">
            المزيد
          </button>
        </div>
      </>
    ) : (
      <CardGridLoading />
    );
  };
  return content();
}
