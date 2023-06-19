"use client"
import { AiFillLike } from "react-icons/ai"
import { ShoppingCart } from "../img/img"
import { FaComment, FaShare } from "react-icons/fa"
import Link from "next/link"
import { useReducer } from "react"
import { RiCloseFill } from "react-icons/ri"
import { usePathname } from "next/navigation";
import Comments from "../comments/comments"
import VideoPlayers from "./videoPlayers"
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
export default function Video({ video, likes, comments, name, price, link, swiper, tools }) {
    const [state, dispatch] = useReducer(reducer, initialState(likes, comments))
    const pathName = usePathname()
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
        state.isShowComments ? swiper.current.enable() : swiper.current.disable()
        dispatch({ type: "toggleShowComment" })
    }
    const share = () => {
        if (navigator.share) {
            navigator.share({
                title: 'FrihaClothes',
                url: pathName
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(err => {
                console.log(
                    "Error while using Web share API:");
                console.log(err);
            });
        } else {
            alert("Browser doesn't support this API !");
        }
    }
    const postComment = (e) => {
        e.preventDefault()
    }
    return (
        <div className='w-full h-full relative overflow-hidden'>
            <VideoPlayers video={video} />
            {tools===true &&<><div className='absolute right-5 bottom-8 h-full grid grid-rows-6 gap-10'>
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
                        <button onClick={share}><FaShare size={37} color="white" /></button>
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
                    <div className="w-11/12 gap-2 py-2 items-center flex justify-between">
                        <div className="w-full p-0 m-0 relative bg-transparent">
                            <textarea
                                className="peer resize-none w-full h-10 rounded-md bg-transparent px-3 py-2 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label className="before:content[' '] bg-transparent after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                اكتب تعليق
                            </label>
                        </div>
                        <button
                            onClick={postComment}
                            className="py-2.5 mb-1.5 px-4 h-fit none center rounded-lg border border-lightContent font-sans text-xs font-bold uppercase text-lightContent transition-all disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            نشر
                        </button>
                    </div>
                    <div className="w-full h-px bg-card2 mb-1.5"></div>
                    <Comments />
                </div></>}
        </div>
    )
}
