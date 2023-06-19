"use client"
import { Navigation, A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import TitleSection from '../../../../../../components/titleSection/titleSection';
import { AiFillLike } from 'react-icons/ai';
import { ShoppingCart } from '../img/img';
import { FaComment, FaShare } from 'react-icons/fa';
import Image from "next/image";
import Example from './menu';
import { useState } from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Comments from '../comments/comments';
export default function Details({ idReel }) {
    const [isShowComments, setIsShowComment] = useState(1)
    const [isLikeIt, setIsLikeIt] = useState(false)
    const [likes, setLikes] = useState(15)
    const [comments, setComments] = useState(12)
    const handleLike = () => {
        console.log(likes);
        setLikes(prev => !isLikeIt?prev+1:prev-1)
        setIsLikeIt(prev => !prev)
    }
    const showComments = () => {
        setIsShowComment(1)
    }
    const hideComments = () => {
        setIsShowComment(0)
    }
    return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='w-11/12'>
                <TitleSection title={"حذاء"} subtitle={"200DA"} />
            </div>
            <div className='w-full py-3'>
                <div className='w-full flex px-10 flex-row-reverse justify-around'>
                    <button onClick={handleLike} className='likeDesktop relative flex justify-center items-center'>
                        <AiFillLike size={50} className={`${isLikeIt?"fill-blue-500":"fill-white"}`} />
                        <p className='absolute top-1/2 -translate-y-1/3 right-1/2 translate-x-1/2'>{likes}</p>
                    </button>
                    <Tabs value={isShowComments} className="w-full">
                        <TabsHeader
                            className="rounded-none border-blue-gray-50 bg-transparent p-0"
                            indicatorProps={{
                                className: "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                            }}
                        >
                            <Tab onClick={hideComments} value={0}>
                                <ShoppingCart width={50} height={50} className={"fill-white"} />
                            </Tab>
                            <Tab onClick={showComments} className='flex relative justify-center flex-col items-center gap-3' value={1}>
                                <FaComment size={50} color="white" />
                                <p className='absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2'>{comments}</p>
                            </Tab>
                        </TabsHeader>
                    </Tabs>
                    <button className='shareDesktop'><FaShare size={50} color="white" /></button>
                </div>
            </div>
            {!isShowComments && <div className='w-full h-full grid pt-10 grid-rows-1 grid-cols-12'>
                <div className='col-span-8 w-full h-full flex flex-col  items-center'>
                    <div className='w-full h-5/6 flex flex-col justify-start items-center'>
                        <div className='w-full flex items-center flex-col gap-3'>
                            <div className='h-56 w-80 relative'>
                                <Image
                                    fill={true}
                                    priority
                                    src={"/res/item.png"}
                                    alt=""
                                />
                            </div>
                            <div className='w-full flex justify-around'>
                                <Example />
                            </div>
                            <div className='px-5'>
                                <p className='text-justify text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit fuga nesciunt quaerat distinctio incidunt asperiores saepe sint, nobis aspernatur? Enim velit nobis eos deserunt?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 w-full h-full flex justify-center'>
                    <div className='h-96'>
                        <Swiper
                            className='h-full'
                            modules={[Navigation, A11y, FreeMode]}
                            spaceBetween={50}
                            slidesPerView={4}
                            direction='vertical'
                        >
                            <SwiperSlide>
                                <Image
                                    width={100}
                                    height={100}
                                    priority
                                    src={"/res/item.png"}
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>}
            {isShowComments && <div className='w-full h-full flex justify-end items-start pt-10'>
                <div className='w-11/12'>
                    <Comments />
                </div>
            </div>}
        </div>
    )
}