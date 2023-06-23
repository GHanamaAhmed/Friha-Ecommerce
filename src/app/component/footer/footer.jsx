import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'


export default function Footer() {
  console.log("ght");
    return (
        <div className='w-full flex flex-col px-2 md:px-14 gap-7 items-end'>
            <div className='flex flex-col gap-7 md:flex-row-reverse md:justify-between w-full items-end'>
                <div className='flex gap-2 items-center'>
                    <h1 className='text-white font-sans font-semibold'>FRI7A</h1>
                    <img src="./res/Friha.png" width={50} alt="" />
                </div>
                <div className='flex flex-col md:flex-row-reverse md:gap-7 gap-2'>
                    <div className='flex flex-col md:flex-row gap-2'>
                        <p className='text-lightContent'>info@example.com</p>
                        <p className='text-lightContent'>+91 12345 09876</p>
                    </div>
                    <div className='flex gap-5 justify-end md:justify-start'>
                        <Link href={"#"} target='_blank'> <FaInstagram size={25} color='white' /></Link>
                        <Link href={"#"} target='_blank'> <FaFacebookF size={25} color='white' /></Link>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-end md:items-start gap-7'>
                <div className='h-1 w-11/12 bg-card1 rounded-full self-center'></div>
                <div className="w-full flex justify-end text-end md:justify-start"><h2 className='text-lightContent font-semibold'>Designed and built by <p className='inline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Pavan MG</p> with <p className='inline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Love</p> & <p className='inline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Coffee</p></h2></div>
            </div>
        </div>
    )
}
