import React from 'react'
import TitleSection from '../../../../components/titleSection/titleSection'
import { BsArrowLeft } from 'react-icons/bs';
export default function ImageSection(img,alt,name,price) {
  return (
		<div className="w-full h-full Grid grid-cols-5  place-items-start">
			<div className="w-full h-full col-span-3">
				<img className="w-full h-full" src="/res/item.png" alt="" />
			</div>
			<div className="w-full h-full col-span-2 text-end px-4 py-2">
				<TitleSection title="adidas" subtitle="20DA"></TitleSection>
			</div>
			<button className="absolute top-2 left-2">
				<BsArrowLeft color='white' size='1.5rem' />
			</button>
		</div>
	);
}
