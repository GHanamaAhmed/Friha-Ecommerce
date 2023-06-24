"use client";
import { AiFillLike } from "react-icons/ai";
import { ShoppingCart } from "../img/img";
import { FaComment, FaShare, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useReducer } from "react";
import { RiCloseFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Comments from "../../../../../../components/comments/comments";
import VideoPlayers from "./videoPlayers";
const initialState = (likes, comments) => {
  return {
    isClickLike: false,
    isClickBasket: false,
    likes: Number(likes),
    comments: Number(comments),
    isShowComments: false,
  };
};
const reducer = (state, { type }) => {
  switch (type) {
    case "toggleClickLike":
      let likes = !state.isClickLike ? state.likes + 1 : state.likes - 1;
      let isClickLike = !state.isClickLike;
      return { ...state, likes, isClickLike };
    case "toggleClickBasket":
      let isClickBasket = !state.isClickBasket;
      return { ...state, isClickBasket };
    case "toggleShowComment":
      let isShowComments = !state.isShowComments;
      return { ...state, isShowComments };
  }
};
export default function Video({
  video,
  likes,
  comments,
  name,
  price,
  link,
  swiper,
  tools,
}) {
  const [state, dispatch] = useReducer(reducer, initialState(likes, comments));
  const pathName = usePathname();
  const hanldeClickLike = (e) => {
    e.preventDefault();
    dispatch({ type: "toggleClickLike" });
  };
  const hanldeClickBasket = (e) => {
    e.preventDefault();
    dispatch({ type: "toggleClickBasket" });
  };
  const handleShowComments = (e) => {
    e.preventDefault();
    state.isShowComments ? swiper.current.enable() : swiper.current.disable();
    dispatch({ type: "toggleShowComment" });
  };
  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "FrihaClothes",
          url: pathName,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch((err) => {
          console.log("Error while using Web share API:");
          console.log(err);
        });
    } else {
      alert("Browser doesn't support this API !");
    }
  };
  const postComment = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative h-full w-full overflow-hidden">
      <VideoPlayers video={video} />
      {tools === true && (
        <>
          <div className="absolute bottom-8 right-5 grid h-full grid-rows-6 gap-10">
            <div className="row-start-4 row-end-7 flex h-full flex-col items-center justify-between">
              <div className="flex flex-col items-center gap-3">
                <button onClick={hanldeClickLike}>
                  <AiFillLike
                    size={40}
                    className={`${
                      state.isClickLike ? "fill-blue-500" : "fill-white"
                    }`}
                  />
                </button>
                <p>{state.likes}</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <button onClick={hanldeClickBasket}>
                  {" "}
                  <FaShoppingCart
                    size={40}
                    className={`${
                      state.isClickBasket ? "fill-blue-500" : "fill-white"
                    }`}
                  />
                </button>
                <p>حفظ</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button onClick={handleShowComments}>
                  <FaComment size={40} color="white" />
                </button>
                <p>{state.comments}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <button onClick={share}>
                  <FaShare size={40} color="white" />
                </button>
                <p className="text-white">مشاركة</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-5">
            <div>
              <div>
                <Link href={link}>
                  {" "}
                  <p className="text-40 text-white">{name}</p>
                </Link>
                <p className="text-end text-2xl text-white">{price}DA</p>
              </div>
            </div>
          </div>
          <div
            className={`absolute bottom-0 z-10 flex h-4/5 w-full flex-col items-center rounded-t-xl bg-primaryColor transition-transform duration-500 ${
              state.isShowComments ? "" : "translate-y-full"
            }`}
          >
            <div className="flex w-full justify-center">
              <div className="my-2 h-1.5 w-2/12 rounded-full bg-card2"></div>
            </div>
            <div className="flex w-11/12 justify-between">
              <p className="text-2xl">التعليقات</p>
              <button onClick={handleShowComments}>
                {" "}
                <RiCloseFill color="white" size={35} />
              </button>
            </div>
            <div className="flex w-11/12 items-center justify-between gap-2 py-2">
              <div className="relative m-0 w-full bg-transparent p-0">
                <textarea
                  className="peer h-10 w-full resize-none rounded-md bg-transparent px-3 py-2 font-sans text-sm font-normal text-lightContent outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none bg-transparent text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-600 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-cyan-600 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-cyan-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  اكتب تعليق
                </label>
              </div>
              <button
                onClick={postComment}
                className="none center mb-1.5 h-fit rounded-lg border border-lightContent px-4 py-2.5 font-sans text-xs font-bold uppercase text-lightContent transition-all active:border-cyan-700 active:text-cyan-600 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                نشر
              </button>
            </div>
            <div className="mb-1.5 h-px w-full bg-card2"></div>
            <Comments />
          </div>
        </>
      )}
    </div>
  );
}
