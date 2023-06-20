import React from 'react'
import img1 from '../swipers/img/reels.png'
import Card from './card'
import Search from './search'
import { selep } from '../../../../lib/sleep'
export default async function CardGrid() {
	await selep()
	const nItem = 10
	const content = () => {
		return (
			<>
				<Search />
				<div className="grid grid-cols-2 gap-6 place-items-center px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
					{[...Array(10)].map((e, i) => {
						return (
							<Card
								key={i}
								title={"producto"}
								subtitle={"free!!!!"}
								img={img1}
							/>
						);
					})}
				</div>
				<div className="w-full flex justify-center py-3">
					<button className="middle none md:px-8 center mr-3 rounded-lg border border-lightContent py-3 px-6 font-sans text-xs font-bold uppercase focus:text-cyan-400 text-lightContent focus:border-none transition-all focus:ring-2 focus:ring-cyan-300  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
						المزيد
					</button>
				</div>
			</>
		);
	}
	return content()
}