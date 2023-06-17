import React from 'react'
import SwiperX from './swiper'

export default function page() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
        <ImageSection/>
        <SwiperX/>
        <InputBarX/>
        <Par/>
    </div>
  )
}
