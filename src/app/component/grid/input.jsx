import React from 'react'
import { useState } from 'react';
export default function InputBar() {
    return (
        <>
            <Menu />
            <Input />
        </>
    )
}
function Menu() {

    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = () => {
        setIsOpen(prev => !prev)
    }
    return (
        <div className='relative'>
            <button
                data-ripple-light="true"
                data-popover-target="menu"
                onClick={handleMenu}
                className="middle none md:px-8 center mr-3 rounded-lg border border-lightContent py-3 px-6 font-sans text-xs font-bold uppercase focus:text-teal-400 text-lightContent focus:border-none transition-all focus:ring-2 focus:ring-teal-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
                النوع
            </button>
            <ul
                role="menu"
                data-popover="menu"
                data-popover-placement="bottom"
                className={`absolute ${isOpen ? "" : "hidden"}  -bottom-2 mx-1 translate-y-full right-0 z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-lightSolid p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none`}
            >
                <li
                    role="menuitem"
                    className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                   الخيار الاول
                </li>
                <li
                    role="menuitem"
                    className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                     الخيار الثاني
                </li>
                <li
                    role="menuitem"
                    className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                    الخيار الثالث
                </li>
            </ul>
        </div>
    )
}
function Input() {
    return (
        <div className="relative h-11 w-full bg-transparent min-w-[200px]">
            <input
                className="peer md:min-w-[250px] text-lightContent h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-400 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
            />
            <label className="before:content[' '] bg-transparent after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full text-lightContent select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-teal-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-teal-400 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            ماهي الملابس التي تبحث عنها
            </label>
        </div>
    )
}
