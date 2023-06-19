import React from 'react'
import dynamic from "next/dynamic";
const DynamicReels = dynamic(() => import("./components/reels"), { ssr: false })
export function generateStaticParams() {
  return [...Array(10)].map((e, i) => ({ reel: i.toString() }))
}
export default function Page({ params }) {
  return (
    <DynamicReels />
  )
}
