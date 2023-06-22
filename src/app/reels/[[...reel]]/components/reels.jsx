"use client";
import MobileReels from "./mobile/mobileReels";
import DesktopReels from "./dektop/desktopReels";
import { useWidth } from "../../../../../lib/hooks/useWidth";
export default async function Reels() {
  const { width } = useWidth();
  return <>{width <= 767 ? <MobileReels /> : <DesktopReels />}</>;
}
