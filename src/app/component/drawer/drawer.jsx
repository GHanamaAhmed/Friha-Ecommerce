"use client";
import React, { useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { MdOutlineSupervisorAccount, MdLogout } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { AiFillHeart, AiOutlineHome } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import Image from "next/image";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter, usePathname } from "next/navigation";
import BasketDrawer from "../basketDrawer/basketDrawer";
const account = [
  {
    path: "/account",
    prefix: <MdOutlineSupervisorAccount />,
    text: "الملف الشخصي",
  },
  {
    path: "/logout",
    prefix: <MdLogout />,
    text: "تسجيل الخروج",
  },
];
const savedOperation = [
  {
    prefix: <LuShoppingCart />,
    text: "السلة",
  },
  {
    path: "/likes",
    prefix: <AiFillHeart />,
    text: "الملابس التي اعجبتك",
  },
];
const pub = [
  {
    path: "/",
    prefix: <AiOutlineHome />,
    text: "الصفحة الرئيسية",
  },
  {
    path: "/reels",
    prefix: <BsCameraReels />,
    text: "ريلز",
  },
];
export default function DrawerComponent({ onClose, isOpen }) {
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, user } = useAuth0();
  const [openBasket, setOpenBasket] = React.useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const closeDrawer = () => {
    setOpen(false);
    onClose();
  };
  const closeBasket = () => {
    setOpenBasket(false);
    setOpen(true);
  };
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  const changeRouter = (e, path) => {
    e.preventDefault();
    router.push(path);
  };
  return (
    <>
      <React.Fragment>
        <Drawer
          open={open}
          onClose={closeDrawer}
          className="bg-primaryColor"
          placement="right"
        >
          {isAuthenticated && (
            <div className="mb-2 flex items-center justify-start gap-3 bg-gray-900 px-6 py-8">
              <Image
                className="rounded-full"
                loader={() => user.picture}
                src={user.picture}
                width={50}
                height={50}
                alt=""
              />
              <div className="flex gap-2">
                <h1 className="font-Hacen-Tunisia text-2xl text-gray-300">
                  {user.given_name}
                </h1>
                <h1 className="font-Hacen-Tunisia text-2xl text-gray-300">
                  {user.family_name}
                </h1>
              </div>
            </div>
          )}
          {!isAuthenticated && (
            <div className="mb-2 flex items-center justify-end gap-3 bg-gray-900 px-6 py-8">
              <h1 className="text-2xl text-gray-300">Friha clothes</h1>
              <Image src="/res/Friha.png" width={50} height={50} alt="" />
            </div>
          )}
          <List>
            <p className="mr-6 mt-1 text-lightSolid">العامة</p>
            {pub.map((e, i) => {
              console.log(pathName);
              return (
                <ListItem
                  onClick={(element) => changeRouter(element, e.path)}
                  key={i}
                  className={`gap-5 py-4 text-lightSolid ${
                    (pathName == "/" && e.path != "/reels") ||
                    (pathName.includes(e.path) && e.path == "/reels")
                      ? "bg-scandaryColor bg-opacity-30 text-scandaryColor"
                      : "text-lightSolid"
                  } hover:bg-scandaryColor hover:bg-opacity-30 hover:text-scandaryColor focus:bg-scandaryColor focus:bg-opacity-30 focus:text-scandaryColor active:bg-scandaryColor active:bg-opacity-30 active:text-scandaryColor`}
                >
                  <ListItemPrefix>{e.prefix}</ListItemPrefix>
                  {e.text}
                </ListItem>
              );
            })}

            <p className="mr-6 mt-4 text-lightSolid">العمليات المحفوظة</p>
            {savedOperation.map((e, i) => {
              return (
                <ListItem
                  onClick={(element) => {
                    if (!e?.path) {
                      setOpen(false);
                      setOpenBasket(true);
                    } else {
                      e?.path && changeRouter(element, e.path);
                    }
                  }}
                  key={i}
                  className={`gap-5 py-4 text-lightSolid ${
                    pathName.includes(e.path)
                      ? "bg-scandaryColor bg-opacity-30 text-scandaryColor"
                      : "text-lightSolid"
                  } hover:bg-scandaryColor hover:bg-opacity-30 hover:text-scandaryColor focus:bg-scandaryColor focus:bg-opacity-30 focus:text-scandaryColor active:bg-scandaryColor active:bg-opacity-30 active:text-scandaryColor`}
                >
                  <ListItemPrefix>{e.prefix}</ListItemPrefix>
                  {e.text}
                </ListItem>
              );
            })}
            <p className="mr-6 mt-1 text-lightSolid">الحساب</p>
            {account.map((e, i) => {
              return (
                <ListItem
                  onClick={(element) => changeRouter(element, e.path)}
                  key={i}
                  className={`gap-5 py-4 text-lightSolid ${
                    pathName.includes(e.path)
                      ? "bg-scandaryColor bg-opacity-30 text-scandaryColor"
                      : "text-lightSolid"
                  } hover:bg-scandaryColor hover:bg-opacity-30 hover:text-scandaryColor focus:bg-scandaryColor focus:bg-opacity-30 focus:text-scandaryColor active:bg-scandaryColor active:bg-opacity-30 active:text-scandaryColor`}
                >
                  <ListItemPrefix>{e.prefix}</ListItemPrefix>
                  {e.text}
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </React.Fragment>
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
