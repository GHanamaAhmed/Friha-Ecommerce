"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button, Drawer, List } from "@material-tailwind/react";
import { AiOutlineLeft } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter, usePathname } from "next/navigation";
import Card from "./card";
import { customAxios } from "@@/lib/api/axios";
import { unSavePost } from "@@/lib/likes/togleSave";

export default function BasketDrawer({ onClose, isOpen }) {
  const [open, setOpen] = React.useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const [baskets, setBaskets] = useState([]);
  const [order, setOrder] = useState([]);
  const addOrder = useCallback(
    (val) => {
      console.log(val);
      setOrder((prev) => [...prev.filter((e) => e?.id != val?.id), val]);
    },
    [setOrder]
  );
  const removeOrder = useCallback(
    (id) => {
      setOrder((prev) => prev.filter((e) => e?.id != id));
      setBaskets((prev) => prev.filter((e) => e?.productId != id));
      unSavePost({ id }).catch((err) => console.error(err));
    },
    [setOrder]
  );
  const price = useMemo(
    () =>
      order.reduce((sum, i) => {
        return Number(sum) + Number(i?.price);
      }, 0),
    [order, isOpen]
  );
  useEffect(() => {
    customAxios
      .get("/basket")
      .then((res) => {
        setBaskets([...res?.data]);
      })
      .catch((err) => console.error(err));
  }, [isOpen]);
  const closeDrawer = () => {
    onClose();
  };
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  const changeRouter = (e, path) => {
    e.preventDefault();
    router.push(path);
  };
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
              <p className="text-red-500">(2 عناصر)</p>
              <p className="text-white"> المنتجات المحفوظة</p>{" "}
              <AiOutlineLeft color="white" />
            </div>
            {baskets.map((e, i) => (
              <Card
                key={i}
                basket={e}
                onAddOrder={addOrder}
                onRemove={removeOrder}
              />
            ))}
          </div>
          <div className="flex w-full flex-col items-center gap-5">
            <div className="flex w-5/6 justify-between">
              <p className="text-white">:المجموع</p>
              <p className="text-white">{price}dz</p>
            </div>
            <Button
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
