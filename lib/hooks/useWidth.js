import { useEffect, useState } from "react"
export const useWidth = () => {
    const [width, setWidth] = useState(globalThis?.innerWidth || 360)
    useEffect(() => {
        setWidth(globalThis.innerWidth)
        globalThis.addEventListener("resize", () => {
            setWidth(globalThis.innerWidth)
        })
        return () => globalThis.removeEventListener("resize", () => { })
    }, [])
    return { width }
}
