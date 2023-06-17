"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, FreeMode } from "swiper";
import { BsArrowLeft } from "react-icons/bs";
import { useState, useEffect } from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import img1 from "../../../../public/res/item.png";
export default function SwiperX() {
	return (
		<div className={`p-1 overflow-clip `}>
			<Swiper
				slidesPerView={10}
				spaceBetween={75}
				scrollbar={{ draggable: true }}
				className="MySwiper"
				centeredSlides={true}
				freeMode={true}
				navigation={true}
				modules={[FreeMode, Navigation]}
			>
				<SwiperSlide className="p-2">
					<Image
						priority
						className="rounded-lg m-1 h-15 w-20 md:h-80 md:w-60 max-h-none max-w-none"
						src={img1}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className="p-2">
					<Image
						priority
						className="rounded-lg m-1 h-15 w-20 md:h-80 md:w-60 max-h-none max-w-none"
						src={img1}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className="p-2">
					<Image
						priority
						className="rounded-lg m-1 h-15 w-20 md:h-80 md:w-60 max-h-none max-w-none"
						src={img1}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className="p-2">
					<Image
						priority
						className="rounded-lg m-1 h-15 w-20 md:h-80 md:w-60 max-h-none max-w-none"
						src={img1}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className="p-2">
					<Image
						priority
						className="rounded-lg m-1 h-15 w-20 md:h-80 md:w-60 max-h-none max-w-none"
						src={img1}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide className="p-2">
					<Image
						priority
						className="rounded-lg m-1 h-15 w-20 md:h-80 md:w-60 max-h-none max-w-none"
						src={img1}
						alt=""
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
