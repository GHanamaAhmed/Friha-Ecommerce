"use client"
import { useEffect, useState } from "react"
export function useWidth() {
    const [width, setWidth] = useState()
    useEffect(() => {
        setWidth(globalThis.innerWidth)
        globalThis.addEventListener("resize", () => {
            setWidth(globalThis.innerWidth)
        })
        return () => globalThis.removeEventListener("resize", () => { })
    }, [])
    return { width }
}
