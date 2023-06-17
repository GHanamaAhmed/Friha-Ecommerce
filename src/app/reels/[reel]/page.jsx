import React from 'react'
import dynamic from "next/dynamic";
const DynamicReels=dynamic(()=>import("./components/reels"),{ssr:false})
export default function Page({params}) {
  return (
    <DynamicReels/>
  )
}
