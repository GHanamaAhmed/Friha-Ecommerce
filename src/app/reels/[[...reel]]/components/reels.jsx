"use client";
import MobileReels from "./mobile/mobileReels";
import DesktopReels from "./dektop/desktopReels";
import { useWidth } from "../../../../../lib/hooks/useWidth";
import { useEffect, useState } from "react";
import { fetchReels } from "@@/lib/api/reels";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "@/app/redux/accountReducer";
import { useParams } from "next/navigation";
import CommentContext from "@@/components/comments/comentContext";
export default function Reels() {
  const { width, isLoading } = useWidth();
  const [reels, setReels] = useState([]);
  const { user, isAuthenticated } = useSelector((store) => store.account);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    !isAuthenticated &&
      dispatch(getInfo())
        .unwrap()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetchReels(params?.reel || "")
      .then((res) => {
        console.log(res.data);
        setReels(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(reels);
  return isLoading ? (
    <h1 className="text-white">Loading</h1>
  ) : (
    <CommentContext>
      {!isLoading && width <= 1024 ? (
        <MobileReels reels={reels} />
      ) : (
        <DesktopReels reels={reels} />
      )}
    </CommentContext>
  );
}
