import React from "react";
export default function TitleSection({ className, title, subtitle, children }) {
  return (
    <div className={className}>
      <div className="flex flex-col gap-2 w-fit">
        <div className="w-fit">
          <div className="text-32 w-fit text-white md:text-40">{title}</div>
          <div className="h-[2px] w-28 bg-scandaryColor"></div>
        </div>
        <div className="subtitle w-fit text-base md:text-base">{subtitle}</div>
      </div>
      {children}
    </div>
  );
}
