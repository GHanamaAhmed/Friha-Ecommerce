import React from 'react'
import img1 from '../swipers/img/reels.png'
import Card from './card'
import Search from './search'
export default function CardGrid() {
	const nItem = 10
	const content = () => {
		return (
			<>
				<Search />
				<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 md:gap-8">
					{[...Array(10)].map((e, i) => {
						return <Card key={i} title={"producto"} subtitle={"free!!!!"} img={img1} />
					})}
				</div>
			</>
		)
	}
	return content()
}