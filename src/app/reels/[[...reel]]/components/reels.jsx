"use client";
import MobileReels from "./mobile/mobileReels";
import DesktopReels from "./dektop/desktopReels";
import { useWidth } from "../../../../../lib/hooks/useWidth";
export default function Reels() {
  const { width,isLoading } = useWidth();
  return isLoading ?<h1 className="text-white">Loading</h1>:!isLoading&&width<=767?<MobileReels/>:<DesktopReels/>
}
 