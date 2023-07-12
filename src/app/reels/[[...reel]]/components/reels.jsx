"use client";
import MobileReels from "./mobile/mobileReels";
import DesktopReels from "./dektop/desktopReels";
import { useWidth } from "../../../../../lib/hooks/useWidth";
import { useEffect, useState } from "react";
import { fetchReels } from "@@/lib/api/reels";
export default function Reels() {
  const { width, isLoading } = useWidth();
  const [reels, setReels] = useState([]);
  useEffect(() => {
    fetchReels()
      .then((res) => {console.log(res.data);setReels(res.data)})
      .catch((err) => console.error(err));
  },[]);
  console.log(reels);
  return isLoading ? (
    <h1 className="text-white">Loading</h1>
  ) : !isLoading && width <= 767 ? (
    <MobileReels reels={reels} />
  ) : (
    <DesktopReels reels={reels} />
  );
}
