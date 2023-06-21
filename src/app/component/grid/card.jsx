"use client"
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useWidth } from '../../../../lib/hooks/useWidth';
export default function Card() {
	const [isLike, setIsLike] = useState(false)
	const { width } = useWidth()
	const toggleLike = () => {
		setIsLike(prev => !prev)
	}
	return (
		<div className="w-36 p-0 md:w-60 h-56 md:h-80 overflow-hidden relative rounded-lg bg-card1 grid grid-cols-1 grid-rows-6 md:grid-rows-4">
			<div className="place-self-start w-full h-full row-span-4 md:row-span-3 relative">
				<img className="w-full h-full " src="./res/blacksweatshirt.png" alt="" />
			</div>
			<div className="grid grid-row-3 row-span-2 md:row-span-1">
				<div className="flex flex-col justify-center row-span-2 items-start">
					<h1 className="text-white text-sm md:text-lg">حذاء ADIDAS</h1>
					<p className="text-white text-sm md:text-xl">2000.00 DA</p>
				</div>
				<div className='w-full items-center flex justify-between border-t-[1px] md:hidden py-px md:py-2 px-2 border-card2'>
					<p className='text-sm text-white md:text-lg'>الكمية: 15</p>
					<button onClick={toggleLike}>
					{isLike ? <AiFillHeart size={width <= 767 ? 17 : 25} color='red' /> : <AiOutlineHeart size={width <= 767 ? 17 : 25} color='white' />}
				</button>
				</div>
			</div>
			<div className='w-full items-center justify-between border-t-[1px] hidden md:flex py-px md:py-2 px-2 border-card2'>
				<p className='text-sm text-white md:text-lg'>الكمية: 15</p>
				<button onClick={toggleLike}>
					{isLike ? <AiFillHeart size={width <= 767 ? 17 : 25} color='red' /> : <AiOutlineHeart size={width <= 767 ? 17 : 25} color='white' />}
				</button>
			</div>
			<button className="absolute top-2 right-2">
				<img className="w-8 h-8" src="./res/basket.svg" alt="" />
			</button>
		</div>
	);
}
