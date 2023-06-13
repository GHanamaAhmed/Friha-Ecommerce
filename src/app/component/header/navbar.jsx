"use client"
import { useEffect, useState } from "react"
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai";
import { selep } from "../../../../lib/sleep"
function NavbarComponent() {
    const [positionScroll, setPositinScroll] = useState(globalThis.window?.scrollY)
    const [headerPosition, setHeaderPosition] = useState("")
    useEffect(() => {
        const handlePosition = () => {
            if (positionScroll < globalThis.window?.scrollY) {
                    setHeaderPosition("-translate-y-full")
            } else {
                setHeaderPosition("")
            }
            setPositinScroll(globalThis.window.scrollY)
        }
        window.addEventListener('scroll', handlePosition)
        return () => window.removeEventListener("scroll", () => { })
    }, [positionScroll])
    return (
        <header className={`w-full fixed bg-primaryColor top-0 bg- z-50 px-4 md:px-14 ${headerPosition} duration-500 flex items-center justify-between py-2`}>
            <div className='justify-between gap-3 items-center hidden md:flex'>
                <button className='text-white border transition-all duration-200 border-white hover:bg-white hover:text-primaryColor py-2 px-4'>انشاء حساب</button>
                <button className='text-white'>تسجيل الدخول</button>
                <Link href={"#"} target='_blank'> <FaInstagram color='white' /></Link>
                <Link href={"#"} target='_blank'> <FaFacebookF color='white' /></Link>
            </div>
            <AiOutlineMenu size={25} className='md:hidden' color='white' />
            <div className='flex gap-2 items-center'>
                <h1 className='text-white font-sans font-semibold'>FRI7A</h1>
                <img src="./res/Friha.png" width={50} alt="" />
            </div>
        </header>
    )
}

export default async function Navbar() {
    await selep()
    return <NavbarComponent />
}

