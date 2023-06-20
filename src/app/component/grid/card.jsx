import React from 'react'
export default function Card() {
    return (
			<div className="w-36 p-0 md:w-60 h-56 md:h-80 overflow-hidden relative rounded-lg bg-card1 grid grid-cols-1 grid-rows-6 md:grid-rows-4">
				<div className="place-self-start w-full h-full row-span-4 md:row-span-3 relative">
					<img className="w-full h-full " src="./res/blacksweatshirt.png" alt="" />
				</div>
				<div className="flex flex-col gap-2 row-span-2 md:row-span-1 justify-center">
					<div className="grid grid-rows-2 grid-cols-2 px-3">
						<div className="col-span-2 text-end">
							<h1 className="text-lightSolid text-lg">حذاء ADIDAS</h1>
						</div>
						<div className="flex flex-row justify-between col-span-2  text-end">
							<button className="text-white py-px px-4  hover:shadow-trueblue hover:shadow-sm bg-gradient-to-r  from-trueblue via-cyan-700 to-azure bg-[position:_0%_0%] hover:bg-[position:_100%_100%] bg-[size:_200%] transition-all duration-500 rounded-lg">
								شراء
							</button>
							<p className="text-lightContent text-base">20DA</p>
						</div>
					</div>
				</div>

				<button className="absolute top-2 right-2">
					<img className="w-8 h-8" src="./res/basket.svg" alt="" />
				</button>
			</div>
		);
}
