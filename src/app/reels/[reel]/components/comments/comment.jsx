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
                    <div className="flex gap-1 items-center">
                        <button onClick={reponde} className="text-xs">رد</button>
                        <BsFillReplyFill />
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-lightSolid text-xs">{createAt}</p>
                        {replyTo ? <div className="flex gap-1 items-center">
                            <p className=" text-xs">{nameUser}</p>
                            <p className=" text-xs text-lightSolid">الى</p>
                            <p className=" text-xs">{replyTo}</p>
                        </div> : <p className=" text-xs">{nameUser}</p>}
                        <Image src={imgUser} width={25} height={25} alt="" />
                    </div>
                </div>
                <div className="w-full">
                    <p className="text-justify text-xs text-lightSolid">{isShow ? textUser : textUser.substring(0, Math.floor(width / 3))}</p>
                    {textUser && textUser.length > Math.floor(width / 3) && <button onClick={toggleShow}>{!isShow ? "عرض المذيد" : "عرض اقل"}</button>}
                </div>
            </div>
            {replies.length > 0 && <div onClick={handleFetchReplies} className="w-full text-sm">
               {isShowReplies?<p className="text-rose-600">اخفاء الردود</p>: <p>عرض الردود</p>}
            </div>}
            {isShowReplies > 0 && replies.map((e, i) => {
                return <Comment key={i} className={"w-11/12"} createAt={e.createAt} imgUser={"/res/basket.svg"} nameUser={e.nameUser} textUser={e.textUser} replies={e.replies} replyTo={e.replyTo} />
            })}
        </div>
    )
}

