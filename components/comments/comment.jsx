"use client";
import Image from "next/image";
import { BsFillReplyFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { useWidth } from "../../lib/hooks/useWidth";
import { twMerge } from "tailwind-merge";
import { fetchReels } from "@@/lib/api/reels";
import { fetchReplies, removeComment, sendComment } from "@@/lib/api/comment";
import { useParams, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { commentContext } from "./comentContext";
import { AiFillDelete } from "react-icons/ai";
import Login from "../login/login";
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
  setParentReplies,
  isRoot,
  userId,
}) {
  const { user, isAuthenticated } = useSelector((store) => store.account);
  const { width } = useWidth();
  const [isShow, setIsShow] = useState(false);
  const [repliesHook, setRepliesHoos] = useState([]);
  const [isShowReplies, setIsShowReplies] = useState(false);
  const [replies, setReplies] = useState([]);
  const [nreplies, setnReplies] = useState(nReplies);
  const [isShowReponde, setIsShowReponde] = useState(false);
  const { setComments, comments, setNComments } = useContext(commentContext);
  const [text, setText] = useState("");
  const params = useParams();
  const pathName = usePathname();
  useEffect(() => {
    setnReplies(isShowReplies ? replies?.length : nreplies);
  }, [replies]);
  const toggleShow = (e) => {
    e.preventDefault();
    setIsShow((prev) => !prev);
  };
  const handleFetchReplies = (e) => {
    e.preventDefault();
    const req = {
      type: pathName.includes("reel") ? "reel" : "product",
      postId: params?.product || window.history.state || params?.reel,
      commentId,
    };
    if (!isShow) {
      (window.history.state || params?.product || params?.reel) &&
        fetchReplies(req)
          .then((res) => {
            setReplies(res.data);
          })
          .catch((err) => console.error(err));
    }
    setIsShowReplies((prev) => !prev);
  };
  const toggleShowReponde = (e) => {
    e.preventDefault();
    setIsShowReponde((prev) => !prev);
  };
  const deleteComment = (e) => {
    e.preventDefault();
    removeComment({ id: commentId })
      .then((res) => {
        isRoot &&
          setComments((prev) => prev.filter((e) => e.commentId != commentId));
        !isRoot &&
          setParentReplies((prev) =>
            prev.filter((e) => e.commentId != commentId)
          );

        setNComments((prev) => prev - 1);
      })
      .catch((err) => console.error(err));
  };
  const postComment = (e) => {
    e.preventDefault();
    sendComment({
      type: pathName.includes("reel") ? "reel" : "product",
      postId:
        (typeof window.history.state == "string" && window.history.state) ||
        params?.product ||
        params?.reel,
      text,
      toUserCommentId: commentId,
    })
      .then((res) => {
        const newComment = {
          _id: user?._id,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          role: user?.role,
          Photo: user?.Photo,
          createAt: res.data?.createAt,
          commentId: res.data?._id,
          replies: 0,
          text,
        };

        setReplies([...replies, newComment]);
        setIsShowReponde(false);
        setIsShowReplies(true);
        setNComments((prev) => prev + 1);
      })
      .catch((err) => console.error(err));
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
          <div className="flex items-center gap-1">
            {userId == user?._id && (
              <button
                onClick={deleteComment}
                className="flex items-center gap-1"
              >
                <p className="text-xs text-white md:text-sm">رد</p>
                <AiFillDelete color="white" />
              </button>
            )}
            <button
              onClick={toggleShowReponde}
              className="flex items-center gap-1"
            >
              <p className="text-xs text-white md:text-sm">رد</p>
              <BsFillReplyFill color="white" />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-lightSolid md:text-sm">{createAt}</p>
            {replyTo ? (
              <div className="flex items-center gap-1">
                <p className=" overflow-hidden text-ellipsis  text-xs text-white md:text-sm">
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
            <button className="text-white" onClick={toggleShow}>
              {!isShow ? "عرض المذيد" : "عرض اقل"}
            </button>
          )}
        </div>
      </div>
      {nreplies > 0 && (
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
      {isShowReponde && (
        <div className="flex w-11/12 items-start justify-between gap-2 py-2">
          <div className="relative m-0 w-full bg-transparent p-0">
            <textarea
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
              className="peer w-full resize-none rounded-md bg-transparent px-3 py-2 font-sans text-sm font-normal text-lightContent outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none bg-transparent text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              {`الرد على ${nameUser}`}{" "}
            </label>
          </div>
          {isAuthenticated && (
            <button
              onClick={postComment}
              className="none center mb-1.5 h-fit rounded-lg border border-lightContent px-4 py-2.5 font-sans text-xs font-bold uppercase text-lightContent transition-all active:border-scandaryColor active:text-scandaryColor disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              ارسال
            </button>
          )}
          {!isAuthenticated && (
            <Login>
              <button className="none center mb-1.5 h-fit rounded-lg border border-lightContent px-4 py-2.5 font-sans text-xs font-bold uppercase text-lightContent transition-all active:border-scandaryColor active:text-scandaryColor disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                نشر
              </button>
            </Login>
          )}
        </div>
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
              textUser={e?.text}
              commentId={e?.commentId}
              nReplies={Number(e?.replies)}
              replyTo={nameUser}
              setParentReplies={setReplies}
              userId={e?._id}
            />
          );
        })}
    </div>
  );
}
