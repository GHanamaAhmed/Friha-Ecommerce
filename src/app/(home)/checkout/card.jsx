"use client";
import { remveByIdFromBasket, updateBasket } from "@/app/redux/basketReducer";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
export default function Card({ basket, index }) {
  const dispatch = useDispatch();
  return (
    <div className="relative flex px-2 py-5">
      {basket?.error && (
        <button>
          <AiOutlineCloseCircle
            color="red"
            className="absolute left-2 top-5 cursor-pointer"
            onClick={() => dispatch(remveByIdFromBasket(index))}
          />
        </button>
      )}
      <div className="flex w-full flex-col justify-between md:flex-row">
        <div className="flex gap-5">
          <img
            crossOrigin="anonymous"
            className="h-28 w-28 rounded-md object-cover"
            src={basket?.thumbanil}
            alt=""
          />
          <div className="flex flex-col items-start justify-between">
            <p className="text-white ">{basket?.name}</p>
            <div className="flex gap-2">
              <p className="text-sm text-lightContent">اللون: </p>
              <div
                className={`h-5 w-5 rounded-full border`}
                style={{ backgroundColor: basket?.color }}
              ></div>
            </div>
            <p className="text-sm text-lightContent">الحجم: {basket?.size}</p>
            <p className="text-sm text-lightContent">
              الكمية: {basket?.quntity}
            </p>
            <p className="text-sm text-lightContent">السعر: {basket?.price}</p>
          </div>
        </div>
        {basket?.error && (
          <div className="mt-1 flex flex-row-reverse items-center justify-end gap-3 md:flex-col">
            <p className="text-white">الكمية المتوفرة: {basket?.maxQuntity}</p>
            <div className="flex justify-between border-blue-500">
              <Button
                onClick={() => {
                  if (basket?.color) {
                    basket?.maxQuntity - basket?.quntity > 0 &&
                      dispatch(
                        updateBasket({
                          index,
                          basket: { ...basket, quntity: basket?.quntity + 1 },
                        })
                      );
                  } else {
                    toasty("اختر اللون اولا", {
                      position: "top-left",
                      toastId: "selectColor",
                      autoClose: 5000,
                      type: "warning",
                    });
                  }
                }}
                className="rounded-none px-2 py-0.5"
                variant="filled"
                color="blue-gray"
              >
                +
              </Button>
              <p
                className={`px-2 py-0.5 ${
                  basket.quntity > basket.maxQuntity
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {basket?.quntity}
              </p>
              <Button
                onClick={() => {
                  if (basket?.color) {
                    basket?.quntity > 1 &&
                      dispatch(
                        updateBasket({
                          index,
                          basket: {
                            ...basket,
                            quntity: !basket?.quntity ? 0 : basket?.quntity - 1,
                          },
                        })
                      );
                  } else {
                    toasty("اختر اللون اولا", {
                      position: "top-left",
                      toastId: "selectColor",
                      autoClose: 5000,
                      type: "warning",
                    });
                  }
                }}
                className="rounded-none px-2 py-0.5"
                variant="filled"
                color="blue-gray"
              >
                -
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
