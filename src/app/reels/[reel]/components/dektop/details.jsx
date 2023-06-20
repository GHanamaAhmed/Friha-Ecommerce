"use client";
import { Navigation, A11y, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import TitleSection from "../../../../../../components/titleSection/titleSection";
import { AiFillLike } from "react-icons/ai";
import { ShoppingCart } from "../img/img";
import { FaComment, FaShare, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Example from "./menu";
import { useState } from "react";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";
import Comments from "../comments/comments";
export default function Details({ idReel }) {
	const [isShowComments, setIsShowComment] = useState(1);
	const [isLikeIt, setIsLikeIt] = useState(false);
	const [likes, setLikes] = useState(121);
	const [left, setleft] = useState(77);
	const [comments, setComments] = useState(78);
	const handleLike = () => {
		console.log(likes);
		setLikes((prev) => (!isLikeIt ? prev + 1 : prev - 1));
		setIsLikeIt((prev) => !prev);
	};
	const showComments = () => {
		setIsShowComment(1);
	};
	const hideComments = () => {
		setIsShowComment(0);
	};
	return (
		<div className="w-full h-full flex flex-col items-center">
			<div className="w-11/12">
				<TitleSection title={"حذاء"} subtitle={"200DA"} />
			</div>
			<div className="w-full py-3 flex flex-row justify-center items-center">
				<div className="w-11/12 flex px-10 flex-row-reverse justify-evenly bg-card1 rounded-md">
					<button
						onClick={handleLike}
						className="likeDesktop  flex flex-row justify-evenly items-center gap-2"
					>
						<p
							className={`font-bold  text-lg ${
								isLikeIt ? "text-azure" : "text-lightSolid"
							} `}
						>
							{likes}
						</p>
						<AiFillLike
							size={40}
							className={`${isLikeIt ? "fill-azure" : "fill-white"}`}
						/>
					</button>
					<Tabs value={isShowComments} className="w-3/5">
						<TabsHeader
							className="rounded-none border-blue-gray-50 bg-transparent p-0"
							indicatorProps={{
								className:
									"bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
							}}
						>
							<Tab onClick={hideComments} value={0}>
								<div className="flex flex-row justify-around items-center gap-4">
									<p className={`font-bold  text-lg text-lightSolid `}>
										{left}
									</p>
									<FaShoppingCart size={40} color="white" />
								</div>
							</Tab>
							<Tab onClick={showComments} value={1}>
								<div className="flex flex-row justify-around items-center gap-4">
									<p className="font-bold  text-lg text-lightSolid">
										{comments}
									</p>
									<FaComment size={40} color="white" />
								</div>
							</Tab>
						</TabsHeader>
					</Tabs>
					<button className="shareDesktop">
						<FaShare size={40} color="white" />
					</button>
				</div>
			</div>
			{!isShowComments && (
				<div className="w-full h-full grid pt-10 grid-rows-1 grid-cols-12">
					<div className="col-span-8 w-full h-full flex flex-col  items-center">
						<div className="w-full h-5/6 flex flex-col justify-start items-center">
							<div className="w-full flex items-center flex-col gap-3">
								<div className="h-56 w-80 relative">
									<Image fill={true} priority src={"/res/item.png"} alt="" className="rounded-md w-full h-full" />
								</div>
								<div className="w-full flex justify-around">
									<Example />
								</div>
								<div className="px-5">
									<p className="text-justify text-white">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Fugit fuga nesciunt quaerat distinctio incidunt asperiores
										saepe sint, nobis aspernatur? Enim velit nobis eos deserunt?
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-4 w-full h-full flex justify-center">
						<div className="h-96">
							<Swiper
								className="h-full"
								modules={[Navigation, A11y, FreeMode]}
								spaceBetween={50}
								slidesPerView={4}
								direction="vertical"
							>
								<SwiperSlide>
									<Image
										width={100}
										height={100}
										priority
										src={"/res/item.png"}
										alt=""
										className="rounded-lg"
									/>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			)}
			{isShowComments && (
				<div className="w-full h-full flex justify-end items-start pt-10">
					<div className="w-11/12">
						<Comments />
					</div>
				</div>
			)}
		</div>
	);
}
