import React from 'react'
import ImageSection from '../components/image';
import TitleSection from "../../../../components/titleSection/titleSection";
import SwiperX from '../components/swiper';

import Par from '../components/par';
import InputBar from '../components/InputBarX';
export default function Page({ params }) {
	return (
		<div className="h-full w-full flex flex-col items-center overflow-x-hidden">

			<ImageSection />
			<SwiperX />
			<InputBar/>
			<Par />

		</div>
	);
}
