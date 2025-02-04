"use client";
import React, { memo, useCallback, useEffect } from "react";
import {
  Button,
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
import { customAxios } from "@@/lib/api/axios";
import Login from "@@/components/login/login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/app/redux/accountReducer";
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
  // {
  //   path: "/likes",
  //   prefix: <AiFillHeart />,
  //   text: "الملابس التي اعجبتك",
  // },
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
export default memo(function DrawerComponent({ onClose, isOpen }) {
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, user } = useSelector((store) => store.account);
  const [openBasket, setOpenBasket] = React.useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const closeDrawer = () => {
    setOpen(false);
    onClose();
  };
  const closeBasket = useCallback(() => {
    setOpenBasket(false);
    setOpen(true);
  });
  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  const changeRouter = (e, path) => {
    e.preventDefault();
    if (path == "/logout") {
      dispatch(logout());
      return;
    }
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
                loader={() => user?.Photo}
                src={user?.Photo}
                width={50}
                height={50}
                alt=""
              />
              <div className="flex gap-2">
                <h1 className="font-Hacen-Tunisia text-2xl text-gray-300">
                  {user?.firstName}
                </h1>
                <h1 className="font-Hacen-Tunisia text-2xl text-gray-300">
                  {user?.lastName}
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
            {isAuthenticated &&
              account.map((e, i) => {
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
            {!isAuthenticated && (
              <Login>
                {" "}
                <button className="mt-3 w-full border border-white px-4 py-2 text-white transition-all duration-200 hover:bg-white hover:text-primaryColor">
                  تسجيل الدخول{" "}
                </button>
              </Login>
            )}
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
});
