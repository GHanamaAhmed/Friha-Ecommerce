"use client";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/header/navbar";
import { useEffect, useState } from "react";
import { getInfo, getInfoAdmin } from "../redux/accountReducer";
import { toasty } from "../component/toasty/toast";
import ToastProvider from "../component/toasty/toastProvider";
import SpeedDialWithTextInside from "../component/speedDial";
export default function RootLayout({ children }) {
  const { user, isLoading, isAuthenticated } = useSelector(
    (store) => store.account
  );
  const dispatch = useDispatch();
  useEffect(() => {
    !isAuthenticated &&
      dispatch(getInfo())
        .unwrap()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    dispatch(getInfoAdmin());
  }, []);
  const [positionScroll, setPositinScroll] = useState(
    globalThis.window?.scrollY
  );
  const [headerPosition, setHeaderPosition] = useState("");
  useEffect(() => {
    const handlePosition = () => {
      if (positionScroll < globalThis.window?.scrollY) {
        setHeaderPosition("-translate-y-full");
      } else {
        setHeaderPosition("");
      }
      setPositinScroll(globalThis.window.scrollY);
    };
    window.addEventListener("scroll", handlePosition);
    return () => window.removeEventListener("scroll", () => {});
  }, [positionScroll]);
  useEffect(() => {
    console.log(positionScroll + globalThis.screen.height / 2);
  }, [positionScroll]);
  return (
    <>
      <ToastProvider>
        <Navbar />
        {children}
        {/* <SpeedDialWithTextInside />{" "} */}
      </ToastProvider>
    </>
  );
}
