import React from 'react'
import Card  from '../steps/card'
import img1 from '../swipers/img/reels.png'
export default function CardGrid() {
  return (
		<div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 md:gap-8">
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
			<Card title={"producto"} subtitle={"free!!!!"} img={img1} />
		</div>
	);
}
