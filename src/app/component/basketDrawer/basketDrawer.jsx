"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Drawer, List } from "@material-tailwind/react";
import { AiOutlineLeft } from "react-icons/ai";
import Card from "./card";
import { useDispatch, useSelector } from "react-redux";
import { changeIsOrder } from "@/app/redux/basketReducer";
import { useRouter } from "next/navigation";
export default function BasketDrawer({ onClose, isOpen }) {
  const [open, setOpen] = React.useState(false);
  const { products } = useSelector((state) => state.basket);
  const router = useRouter();
  const dispatch = useDispatch();
  const closeDrawer = () => {
    onClose();
  };
  const some = useMemo(() => {
    return products.reduce((some, e) => some + e?.price * e?.quntity, 0);
  }, [products]);
  const disable = useMemo(() => {
    const c = products.every(
      (e) => e?.color && e?.size && e?.color != "الكل" && e?.size != "الكل"
    );
    return c ? false : true;
  }, [products]);
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="overflow-y-scroll bg-primaryColor"
        placement="right"
        size={400}
      >
        <List className="flex flex-col justify-between">
          <div>
            <div className="mt-5 flex items-center justify-end gap-2">
              <p className="text-red-500">({products?.length} عناصر)</p>
              <p className="text-white"> المنتجات المحفوظة</p>{" "}
              <AiOutlineLeft color="white" />
            </div>
            {products?.map((e, i) => (
              <Card basket={e} index={i} key={i} />
            ))}
          </div>
          <div className="flex w-full flex-col items-center gap-5">
            <div className="flex w-5/6 justify-between">
              <p className="text-white">:المجموع</p>
              <p className="text-white">{some}dz</p>
            </div>
            <Button
              disabled={disable}
              onClick={() => {
                dispatch(changeIsOrder(true));
                setOpen(false);
                router.push("/checkout");
              }}
              variant="filled"
              color="green"
              className="w-4/5 py-2 text-lg"
            >
              طلب
            </Button>
          </div>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
