import React from 'react'

export default function Card() {
    return (
        <div className='w-36 p-0 md:w-60 h-56 md:h-80 overflow-hidden rounded-lg bg-card1 grid grid-cols-1 grid-rows-6'>
            <div className='place-self-start w-full h-full row-span-4 relative'>
                <img className='w-full h-full ' src="./res/item.png" alt="" />
            </div>
            <div className='flex flex-col gap-2 row-span-2 justify-center'>
                <div className='grid grid-rows-2 grid-cols-2 px-3'>
                    <div className='col-span-2'>
                        <h1 className='text-lightSolid text-lg'>حذاء ADIDAS</h1>
                    </div>

                    <div className='flex flex-col col-span-2  text-end'>
                        <p className='text-lightContent text-base'>20DA</p>
                        <button className='' >
                            شراء
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
