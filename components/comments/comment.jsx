"use client";
import Image from "next/image";
import { BsFillReplyFill } from "react-icons/bs";
import { useState } from "react";
import { useWidth } from "../../lib/hooks/useWidth";
import { twMerge } from "tailwind-merge";
import { fetchReels } from "@@/lib/api/reels";
import { fetchReplies } from "@@/lib/api/comment";
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};
export default function Comment({
  className,
  nameUser,
  imgUser,
  textUser,
  replyTo,
  createAt,
  commentId,
  nReplies,
}) {
  const { width } = useWidth();
  const [isShow, setIsShow] = useState(false);
  const [repliesHook, setRepliesHoos] = useState([]);
  const [isShowReplies, setIsShowReplies] = useState(false);
  const [replies, setReplies] = useState([]);
  const toggleShow = (e) => {
    e.preventDefault();
    setIsShow((prev) => !prev);
  };
  const handleFetchReplies = (e) => {
    e.preventDefault();
    const req = {
      type: "reel",
      postId: window.history.state,
      commentId,
    };
    if (!isShow) {
      console.log(replies);
      window.history.state &&
        fetchReplies(req)
          .then((res) => {
            setReplies(res.data);
            console.log(res);
          })
          .catch((err) => console.error(err));
    }
    setIsShowReplies((prev) => !prev);
  };
  const reponde = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex w-full flex-col justify-start gap-1">
      <div
        className={twMerge(
          "flex flex-col gap-3 rounded-sm bg-card1 px-3 py-3",
          className
        )}
      >
        <div className="flex w-full justify-between">
          <button onClick={reponde} className="flex items-center gap-1">
            <p className="text-xs text-white md:text-sm">رد</p>
            <BsFillReplyFill color="white" />
          </button>
          <div className="flex items-center gap-2">
            <p className="text-xs text-lightSolid md:text-sm">{createAt}</p>
            {replyTo ? (
              <div className="flex items-center gap-1">
                <p className=" overflow-hidden text-ellipsis text-xs md:text-sm">
                  {nameUser}
                </p>
                <p className=" text-xs text-lightSolid md:text-sm">الى</p>
                <p className=" overflow-hidden text-ellipsis text-xs text-white md:text-sm">
                  {replyTo}
                </p>
              </div>
            ) : (
              <p className=" overflow-hidden text-ellipsis text-xs text-white md:text-sm">
                {nameUser}
              </p>
            )}
            <div className="relative h-6 w-6 md:h-8 md:w-8">
              {" "}
              <Image src={imgUser} fill={true} alt="" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-justify text-xs text-lightSolid md:text-sm">
            {isShow ? textUser : textUser.substring(0, Math.floor(width / 3))}
          </p>
          {textUser && textUser.length > Math.floor(width / 3) && (
            <button onClick={toggleShow}>
              {!isShow ? "عرض المذيد" : "عرض اقل"}
            </button>
          )}
        </div>
      </div>
      {nReplies > 0 && (
        <button
          onClick={handleFetchReplies}
          className="w-full text-start text-sm"
        >
          {isShowReplies ? (
            <p key={0} className="text-red-700">
              اخفاء الردود
            </p>
          ) : (
            <p key={1} className="text-white">
              عرض الردود
            </p>
          )}
        </button>
      )}
      {isShowReplies > 0 &&
        replies.map((e, i) => {
          return (
            <Comment
              key={i}
              className={"w-11/12"}
              createAt={formatDate(e?.createAt)}
              imgUser={e?.Photo}
              nameUser={`${e?.lastName}`}
              textUser={"sdfdsaf"}
              commentId={e?.commentId}
              nReplies={e?.replies}
              replyTo={nameUser}
            />
          );
        })}
    </div>
  );
}
