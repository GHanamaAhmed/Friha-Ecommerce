"use client";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/header/navbar";
import { useEffect, useState } from "react";
import { getInfo, getInfoAdmin } from "../redux/accountReducer";
import ToastProvider from "../component/toasty/toastProvider";
import SpeedDialWithTextInside from "../component/speedDial";
export default function RootLayout({ children }) {
  const {  isAuthenticated } = useSelector(
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
  return (
    <>
      <ToastProvider>
        <Navbar />
        {children}
        <SpeedDialWithTextInside />{" "}
      </ToastProvider>
    </>
  );
}
