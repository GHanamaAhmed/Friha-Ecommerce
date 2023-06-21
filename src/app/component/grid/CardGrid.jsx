import React from "react";
import img1 from "../swipers/img/reels.png";
import Card from "./card";
import Search from "./search";
import { selep } from "../../../../lib/sleep";
export default async function CardGrid() {
  await selep();
  const content = () => {
    return (
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
    );
  };
  return content();
}
