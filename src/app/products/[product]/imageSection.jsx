import React from 'react'
import TitleSection from '../../../../components/titleSection/titleSection';

export default function imageSection() {
  return (
		<div className="w-full grid grid-cols-5">
			<div className="w-full h-full col-span-3">
				<img src="../../../../public/res/item.png" alt="" />
			</div>
			<div className="w-full h-full col-span-2">
				<TitleSection title={"adidas"} subtitle={"20 da"} />
			</div>
			<button className="absolute top-2 right-2">
				<img className="w-8 h-8" src="./res/basket.svg" alt="" />
			</button>
		</div>
	);
}
