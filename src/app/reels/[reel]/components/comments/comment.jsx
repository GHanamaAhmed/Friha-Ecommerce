"use client"
import Image from "next/image"
import { BsFillReplyFill } from "react-icons/bs";
import { useState } from "react";
import { useWidth } from "../../../../../../lib/hooks/useWidth";
import { twMerge } from "tailwind-merge";
export default function Comment({ className, nameUser, imgUser, textUser, replyTo, replies, createAt, }) {
    const { width } = useWidth()
    const [isShow, setIsShow] = useState(false)
    const [repliesHook, setRepliesHoos] = useState([])
    const [isShowReplies, setIsShowReplies] = useState(false)
    const toggleShow = (e) => {
        e.preventDefault()
        setIsShow(prev => !prev)
    }
    const handleFetchReplies = (e) => {
        e.preventDefault()
        setIsShowReplies(prev => !prev)
    }
    const reponde = (e) => {
        e.preventDefault()
    }
    return (
        <div className="w-full justify-start gap-1 flex flex-col">
            <div className={twMerge("flex flex-col gap-3 py-3 px-3 rounded-sm bg-card1", className)}>
                <div className="flex justify-between w-full">
                    <button onClick={reponde} className="flex gap-1 items-center">
                        <p className="text-xs md:text-sm text-white">رد</p>
                        <BsFillReplyFill color="white"/>
                    </button>
                    <div className="flex items-center gap-2">
                        <p className="text-lightSolid text-xs md:text-sm">{createAt}</p>
                        {replyTo ? <div className="flex gap-1 items-center">
                            <p className=" text-xs md:text-sm">{nameUser}</p>
                            <p className=" text-xs md:text-sm text-lightSolid">الى</p>
                            <p className=" text-xs md:text-sm text-white">{replyTo}</p>
                        </div> : <p className=" text-xs md:text-sm text-white">{nameUser}</p>}
                       <div className="w-6 md:w-8 h-6 md:h-8 relative"> <Image src={imgUser} fill={true} alt="" /></div>
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-justify text-xs md:text-sm text-lightSolid">{isShow ? textUser : textUser.substring(0, Math.floor(width / 3))}</p>
                    {textUser && textUser.length > Math.floor(width / 3) && <button onClick={toggleShow}>{!isShow ? "عرض المذيد" : "عرض اقل"}</button>}
                </div>
            </div>
            {replies.length > 0 && <button onClick={handleFetchReplies} className="w-full text-start text-sm">
               {isShowReplies?<p key={0} className="text-red-700">اخفاء الردود</p>: <p key={1} className="text-white">عرض الردود</p>}
            </button>}
            {isShowReplies > 0 && replies.map((e, i) => {
                return <Comment key={i} className={"w-11/12"} createAt={e.createAt} imgUser={"/res/basket.svg"} nameUser={e.nameUser} textUser={e.textUser} replies={e.replies} replyTo={e.replyTo} />
            })}
        </div>
    )
}

