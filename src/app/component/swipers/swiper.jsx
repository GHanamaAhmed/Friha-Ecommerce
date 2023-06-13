"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, FreeMode } from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import Short from './short';
import { selep } from '../../../../lib/sleep';
function SwiperComponent() {
    const [width, setWidth] = useState(globalThis.window?.innerWidth)
    useEffect(() => {
        setWidth(globalThis.window.innerWidth)
        globalThis.window.addEventListener("resize", () => {
            setWidth(globalThis.window.innerWidth)
        })
        return () => globalThis.window.innerWidth.removeEventListener("resize", () => { })
    }, [])
    return (
        <Swiper
            modules={[A11y, Navigation, Pagination, FreeMode]}
            spaceBetween={50}
            slidesPerView={width > 1280 ? 4.5 : width > 767 ? 3.5 : width < 640 ? 1.5 : 2.5}
            scrollbar={{ draggable: true }}
            freeMode={true}
            navigation={
                {
                    nextEl: ".nextEl",
                    prevEl: ".prevEl"
                }
            }
        >
            <SwiperSlide > <Short /></SwiperSlide>
            <SwiperSlide > <Short /></SwiperSlide>
        </Swiper>
    )
}
export default async function Swipers() {
   await selep()
    return (
        <SwiperComponent/>
    )
}
