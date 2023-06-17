import React, { useEffect, useRef, useState } from 'react'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import { useSwiperSlide } from 'swiper/react'
export default function VideoPlayers({ video }) {
  const [isPlay, setIsPlay] = useState(true)
  const videoRef = useRef(null)
  const interval = useRef()
  const slide = useSwiperSlide()
  const [progress, setProgress] = useState(0)
  const checkSlide = (slide.isNext || slide.isPrev || slide.isActive)
  useEffect(() => {
    if (checkSlide) {
      interval.current = setInterval(() => {
        setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100)
      }, 1000)
      return () => { clearInterval(interval.current) }
    }
  }, [])
  useEffect(() => {
    if (checkSlide) {
      if (slide.isActive) {
        videoRef.current.play()
        setIsPlay(true)
      } else {
        videoRef.current.pause()
        setIsPlay(false)
      }
    }
  }, [slide.isActive])
  const videoHandler = (e) => {
    if (checkSlide) {
      e?.preventDefault()
      if (isPlay) {
        videoRef.current.pause()
        setIsPlay(false)
      } else {
        videoRef.current.play()
        setIsPlay(true)
      }
    }
  }
  const changeRange = (e) => {
    e.preventDefault()
    if (checkSlide) {
      setProgress(e.currentTarget.value)
      videoRef.current.currentTime = (e.currentTarget.value * videoRef.current.duration) / 100
    }
  }
  return (
    <div className='h-full w-full relative' onClick={videoHandler}>
      {checkSlide && <video autoPlay ref={videoRef} loop src={video} className='w-full h-full' />}
      <div className='absolute top-1/2 translate-x-1/2 right-1/2'>
        {isPlay == true ? <div className='opacity-0 animate-[wiggle_1s_ease-in-out]' key={1}> <BsFillPlayFill size={50} /></div> : <div className='opacity-0 animate-[wiggle_1s_ease-in-out]' key={2}> <BsFillPauseFill size={50} /></div>}
      </div>
      <input onChange={changeRange} value={`${progress}`} className='absolute h-[2px] bottom-5 h- z-20 translate-x-1/2 right-1/2 overflow-hidden  bg-gray-400 w-11/12' type="range" name="" id="" />
    </div>
  )
}
