import React from 'react'
import TitleSection from '../../../../components/titleSection/titleSection';
import { BsArrowLeft } from 'react-icons/bs';

export default function ImageSection() {
  return (
		<div className="w-full grid grid-rows-7 h-full gap-3">
			<div className="w-full h-full row-span-4">
				<img className="w-full h-full" src="/res/item.png" alt="" />
			</div>
			<div className="w-full  row-span-3 text-end px-2">
				<TitleSection title={"adidas"} subtitle={"20 da"}  />
			</div>
			<button className="absolute top-2 left-2">
				<BsArrowLeft color='white' size='25px'/>
			</button>
		</div>
	);
}
