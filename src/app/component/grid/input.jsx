"use client"
import React from 'react'
import {
    Menu as Menu2,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Input as Input2
} from "@material-tailwind/react";
import { ChevronDownIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';
export default function InputBar() {
    return (
        <>
            <Menu text={"النوع"} />
            <Input />
        </>
    )
}
function Menu({ text }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <Menu2 open={isOpen} handler={setIsOpen}>
            <MenuHandler>
                <Button color='green' className="flex items-center gap-3 font-Hacen-Tunisia" onClick={handleMenu}>
                    {text}
                </Button>
            </MenuHandler>
            <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
        </Menu2>
    );
}
function Input() {
    return (
        <div className="relative h-11 w-full bg-transparent min-w-[200px]">
            <Input2 color='green' className='text-white' label="ماهي الملابس التي تبحث عنها" />
        </div>
    )
}
