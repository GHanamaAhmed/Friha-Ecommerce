"use client";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
  Badge,
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
            <Badge content={products?.length} overlap="circular" color="green"  withBorder>
              <IconButton
                onClick={() => {
                  setOpenBasket(true);
                }}
                size="lg"
                className="rounded-full p-8"
              >
                <LiaShoppingBagSolid
                  className="h-10 w-10 stroke-white text-white"
                  stroke="white"
                />
              </IconButton>
            </Badge>
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
