"use client"
import TitleSection from '../../../../components/titleSection/titleSection'
import { Button, Input, Menu, MenuHandler, MenuItem, MenuList, Option, Select } from '@material-tailwind/react'
import { BsChevronDown } from 'react-icons/bs';
import { useState } from 'react';
export default function Search() {
    return (
        <TitleSection className={"w-full flex flex-col"} title={"المنتجات"} subtitle={"تشكيلة متنوعة من المنتجات ذات الجودة العالية"}>
            <div className='gap-3 flex items-center'>
                <Select variant="outlined" label="Select Version">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                </Select>
                <Input label="ماهي الملابس التي تبحث عنها" />
            </div>
        </TitleSection>
    )
}
