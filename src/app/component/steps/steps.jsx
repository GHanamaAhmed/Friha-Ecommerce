"use client"
import Card from "./card"
import img1 from "./img/icon.svg"
import img2 from "./img/icon-1.svg"
import img3 from "./img/icon-2.svg"
import { selep } from "../../../../lib/sleep"
export default async function Steps() {
    await selep()
    return (
        <>
            <div className='w-full  h-full flex flex-col sm:flex-row items-center justify-around gap-3'>
                <Card key={1} img={img1} title={"الخطوة الاولى"} subtitle={"سيبسشيبسيشبشبسشيبسيشبيسب"} />
                <Card key={2} img={img2} title={"الخطوة الاولى"} subtitle={"سيبسشيبسيشبشبسشيبسيشبيسب"} />
                <Card key={3} img={img3} title={"الخطوة الاولى"} subtitle={"سيبسشيبسيشبشبسشيبسيشبيسب"} />
            </div>
            <img className='w-full h-full hidden sm:block absolute top-1/3 right-1/2 translate-x-1/2 -z-10' src={"./res/BG.png"} alt='Image' />
            <img className='w-full h-5/6 sm:hidden absolute top-1/2 -translate-y-1/2  right-1/2 translate-x-1/2 -z-10' src={"./res/BG1.png"} alt='Image' />
        </>
    )
}
