"use client"
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../component/header/navbar";
import { useEffect } from "react";
import { getInfo } from "../redux/accountReducer";
export default function RootLayout({ children }) {
  const { user, isLoading,isAuthenticated } = useSelector((store) => store.account);
  const dispatch = useDispatch();
  useEffect(() => {
    !isAuthenticated &&
      dispatch(getInfo())
        .unwrap()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
