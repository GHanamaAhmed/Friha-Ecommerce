"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";

export default function Par() {
	return (
		<>
			<p className="text-start text-lightSolid p-4 m-2">
				Step into the spotlight with our Blue Lightning Shoe: a perfect blend of
				style and comfort. Its striking blue color and sleek design make a bold
				fashion statement. Engineered for durability and enhanced performance,
				its your go-to choice for any occasion. Unleash your unique style with
				the Blue Lightning Shoe.
			</p>
		</>
	);
}
