import React from "react";

export default function Card({ basket }) {
  return (
    <div className="flex px-2 py-5">
      <div className="flex gap-5">
        <img
          crossOrigin="anonymous"
          className="h-28 w-28 rounded-md object-cover"
          src={basket?.thumbanil}
          alt=""
        />
        <div className="flex flex-col items-start justify-between">
          <p className="text-white ">{basket?.name}</p>
          <p className="text-sm text-lightContent">اللون: {basket?.color}</p>
          <p className="text-sm text-lightContent">الحجم: {basket?.size}</p>
          <p className="text-sm text-lightContent">الكمية: {basket?.quntity}</p>
          <p className="text-sm text-lightContent">السعر: {basket?.price}</p>
        </div>
      </div>
    </div>
  );
}
