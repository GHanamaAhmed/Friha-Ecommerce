"use client";
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaShare, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useContext, useEffect, useReducer } from "react";
import { RiCloseFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import VideoPlayers from "./videoPlayers";
import MobileComents from "../../../../../../components/comments/mobileComents";
import { likePost, unLikePost } from "@@/lib/likes/togleLike";
import Login from "@@/components/login/login";
import { useSelector } from "react-redux";
import { commentContext } from "@@/components/comments/comentContext";
const initialState = (likes, comments, isLike) => {
  return {
    isClickLike: isLike,
    likes: Number(likes),
    comments: Number(comments),
    isShowComments: false,
  };
};
const reducer = (state, { type, value, payload }) => {
  switch (type) {
    case "initialize":
      return { ...state, ...payload };
    case "toggleClickLike":
      let likes = !state.isClickLike ? state.likes + 1 : state.likes - 1;
      let isClickLike = !state.isClickLike;
      return { ...state, likes, isClickLike };
    case "toggleShowComment":
      let isShowComments = value;
      return { ...state, isShowComments };
  }
};

export default function Video({
  id,
  video,
  likes,
  comments,
  name,
  price,
  link,
  swiper,
  tools,
  isLike,
  productId,
}) {
  const { nComments } = useContext(commentContext);
  const [state, dispatch] = useReducer(
    reducer,
    initialState(likes, nComments, isLike)
  );
  const { isAuthenticated } = useSelector((store) => store.account);
  const pathName = usePathname();
  useEffect(() => {
    dispatch({
      type: "initialize",
      payload: {
        likes,
        comments: nComments,
        isClickLike: isLike,
      },
    });
  }, [nComments]);
  const hanldeClickLike = (e) => {
    e.preventDefault();
    const req = { type: "reel", postId: id };
    if (state.isClickLike) {
      unLikePost(req)
        .then((res) => dispatch({ type: "toggleClickLike" }))
        .catch((err) => console.error(err));
    } else {
      likePost(req)
        .then((res) => dispatch({ type: "toggleClickLike" }))
        .catch((err) => console.error(err));
    }
  };
  const closeComments = (value) => {
    !value ? swiper.current.enable() : swiper.current.disable();
    dispatch({ type: "toggleShowComment", value });
  };
  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "FrihaClothes",
          url: "http://localhost:3000/reels/" + window.history.state,
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
  const postComment = (text) => {};
  return (
    <div className="relative h-full w-full overflow-hidden">
      <VideoPlayers video={video} />
      {tools === true && (
        <>
          <div className="absolute bottom-8 right-5 grid h-full grid-rows-6 gap-10">
            <div className="row-start-4 row-end-7 flex h-full flex-col items-center justify-around">
              <div className="flex flex-col items-center gap-3">
                {!isAuthenticated ? (
                  <Login>
                    <button>
                      <AiFillLike size={40} className={"fill-white"} />
                    </button>
                  </Login>
                ) : (
                  <button onClick={hanldeClickLike}>
                    <AiFillLike
                      size={40}
                      className={`${
                        state.isClickLike ? "fill-blue-500" : "fill-white"
                      }`}
                    />
                  </button>
                )}
                <p>{state.likes}</p>
              </div>
              {productId && (
                <div className="flex flex-col items-center gap-3">
                  <Link href={`http://localhost:3000/products/${productId}`}>
                    {" "}
                    <FaShoppingCart size={40} className={"fill-white"} />
                  </Link>
                  <p>شراء</p>
                </div>
              )}
              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    closeComments(true);
                  }}
                >
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
                {price > 0 && (
                  <p className="text-end text-2xl text-white">{price}DA</p>
                )}
              </div>
            </div>
          </div>
          <MobileComents
            show={state.isShowComments}
            onClose={closeComments}
            onPostComment={postComment}
          />
        </>
      )}
    </div>
  );
}
