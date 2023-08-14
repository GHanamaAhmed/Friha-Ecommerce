"use client";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { SlBasket } from "react-icons/sl";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useSelector } from "react-redux";
import React from "react";
import BasketDrawer from "./basketDrawer/basketDrawer";

export default function SpeedDialWithTextInside() {
  const { products } = useSelector((store) => store.basket);
  const [openBasket, setOpenBasket] = React.useState(false);
  const closeBasket = () => {
    setOpenBasket(false);
  };
  return (
    <>
      <div className="sticky bottom-10 right-6 w-fit">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton
              onClick={(element) => {
                setOpenBasket(true);
              }}
              size="lg"
              className="relative rounded-full p-8"
            >
              <p className="absolute right-1/2 top-1/2 -translate-y-1/3 translate-x-1/2 text-white">
                {products?.length}
              </p>
              <LiaShoppingBagSolid
                className="h-10 w-10 stroke-white text-white"
                stroke="white"
              />
            </IconButton>
          </SpeedDialHandler>
        </SpeedDial>
      </div>
      {
        <BasketDrawer
          isOpen={openBasket}
          onClose={closeBasket}
          onClose2={() => {
            setOpenBasket(false);
          }}
        />
      }
    </>
  );
}
