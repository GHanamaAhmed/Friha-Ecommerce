
import reel from "./img/reels.png"
import Image from "next/image"
export default function Short() {
    return (
        <div>
            <div className='relative flex justify-start items-center'>
               <Image priority className='rounded-lg m-0 h-72 w-52 md:h-80 md:w-60 max-h-none max-w-none' src={reel} alt="reel" />
                <div className='flex flex-col absolute bottom-4 right-4 z-10'>
                    <p className='text-32 text-white'>حذاء</p>
                    <p className='text-sm text-white'>200 DA</p>
                </div >
            </div>
        </div>
    )
}
