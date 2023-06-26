import React from 'react'
import Swipers from "../../component/swipers/swiper";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { Suspense } from "react";
import TitleSection from "../../../../components/titleSection/titleSection";
import Steps from "../../component/steps/steps";
import StepsLoading from "../../component/steps/stepsLoading";
import CardGrid from "../../component/grid/cardGrid";
import Footer from "../../component/footer/footer";
export default function Likes() {
  return (
		<>
			<div className="w-full pb-8">
				<section className="px-4 pt-20 md:px-14">
					<TitleSection
						className={"flex w-full items-center justify-between"}
						title={"مقاطع صغيرة"}
						subtitle={"شاهد المقاطع التي أعجبتك سابقا"}
					>
						<div className="hidden gap-7 md:flex">
							<button className="prevEl">
								<BsFillArrowRightCircleFill fill="white" size={35} />
							</button>
							<button className="nextEl">
								<BsFillArrowLeftCircleFill fill="white" size={35} />
							</button>
						</div>
					</TitleSection>
					<div className="mt-10 w-full">
						<Swipers />
					</div>
				</section>
				<section className="mt-10 flex w-full  flex-col gap-3 px-4 md:mt-40 md:px-14">
					<CardGrid />
				</section>
				<Footer />
			</div>
		</>
	);
}
