"use client"
import { AiFillLike } from "react-icons/ai"
import { ShoppingCart } from "../img/img"
import { FaComment, FaShare } from "react-icons/fa"
import Link from "next/link"
import { useReducer } from "react"
import { RiCloseFill } from "react-icons/ri"
import Comment from "../comments/comment"
import Comments from "../comments/comments"
const initialState = (likes, comments) => {
    return {
        isClickLike: false,
        isClickBasket: false,
        likes: Number(likes),
        comments: Number(comments),
        isShowComments: false
    }
}
const reducer = (state, { type }) => {
    switch (type) {
        case "toggleClickLike":
            let likes = !state.isClickLike ? state.likes + 1 : state.likes - 1
            let isClickLike = !state.isClickLike
            return { ...state, likes, isClickLike }
        case "toggleClickBasket":
            let isClickBasket = !state.isClickBasket
            return { ...state, isClickBasket }
        case "toggleShowComment":
            let isShowComments = !state.isShowComments
            return { ...state, isShowComments }
    }
}

export default function Video({ video, likes, comments, name, price, link, swiper }) {
    const [state, dispatch] = useReducer(reducer, initialState(likes, comments))
    const hanldeClickLike = (e) => {
        e.preventDefault()
        dispatch({ type: "toggleClickLike" })
    }
    const hanldeClickBasket = (e) => {
        e.preventDefault()
        dispatch({ type: "toggleClickBasket" })
    }
    const handleShowComments = (e) => {
        e.preventDefault()
       state.isShowComments?swiper.current.enable() :swiper.current.disable()
        dispatch({ type: "toggleShowComment" })
    }
    return (
        <div className='w-full h-full relative overflow-hidden'>
            <video autoPlay src={video} className='w-full h-full'></video>
            <div className='absolute right-5 bottom-8 h-full grid grid-rows-6 gap-10'>
                <div className="row-start-4 row-end-7 h-full flex flex-col items-center justify-between">
                    <div className="flex flex-col items-center gap-3">
                        <button onClick={hanldeClickLike}><AiFillLike size={51} className={`${state.isClickLike ? "fill-blue-500" : "fill-white"}`} /></button>
                        <p>{state.likes}</p>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <button onClick={hanldeClickBasket}> <ShoppingCart width={50} height={50} className={`${state.isClickBasket ? "fill-blue-500" : "fill-white"}`} /></button>
                        <p>حفظ</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <button onClick={handleShowComments}><FaComment size={37} color="white" /></button>
                        <p>{state.comments}</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <button><FaShare size={37} color="white" /></button>
                        <p className="text-white">مشاركة</p>
                    </div>
                </div>
            </div>
            <div className="absolute left-5 bottom-8">
                <div>
                    <div>
                        <Link href={link}> <p className='text-40 text-white'>{name}</p></Link>
                        <p className='text-2xl text-end text-white'>{price}DA</p>
                    </div>
                </div>
            </div>
            <div className={`w-full flex flex-col items-center absolute bg-primaryColor bottom-0 rounded-t-xl duration-500 transition-transform z-10 h-4/5 ${state.isShowComments ? "" : "translate-y-full"}`}>
                <div className="w-full flex justify-center">
                    <div className="h-1.5 my-2 bg-card2 rounded-full w-2/12"></div>
                </div>
                <div className="flex w-11/12 justify-between">
                    <p className="text-2xl">التعليقات</p>
                  <button onClick={handleShowComments}>  <RiCloseFill color="white" size={35} /></button>
                </div>
                <div className="w-full h-px bg-card2 my-1.5"></div>
                <div className="w-11/12 py-4 overflow-y-auto flex flex-col">
                    <Comments/>
                </div>
            </div>
        </div>
    )
}
