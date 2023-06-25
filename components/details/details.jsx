"use client";
import "swiper/css";
import "swiper/css/navigation";
import TitleSection from "../titleSection/titleSection";
import { AiFillLike, AiFillMessage } from "react-icons/ai";
import { FaShare, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Example from "./menu";
import { useEffect, useReducer, useState } from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import Comments from "../comments/comments";
import { selep } from "@@/lib/sleep";
import Pictures from "./pictures";
const initialState = (
  isShowComments,
  isLikeIt,
  likes,
  left,
  comments,
  isLoading
) => {
  return {
    isShowComments,
    isLikeIt,
    likes,
    left,
    comments,
    isLoading,
  };
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "handleLike":
      let likes = state.isLikeIt ? state.likes - 1 : state.likes + 1;
      let isLikeIt = !state.isLikeIt;
      return { ...state, likes, isLikeIt };
    case "toggleComments":
      let isShowComments = payload;
      return { ...state, isShowComments };
    case "toggleLoading":
      let isLoading = payload;
      return { ...state, isLoading };
  }
};
export default function Details({ idReel, isOnlyPrudact }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState(isOnlyPrudact ? 0 : 1, false, 121, 77, 78, true)
  );
  useEffect(() => {
    selep().then(() => {
      dispatch({ type: "toggleLoading", payload: false });
    });
  }, []);
  const handleLike = () => {
    dispatch({ type: "handleLike" });
  };
  const showComments = () => {
    dispatch({ type: "toggleComments", payload: 1 });
  };
  const hideComments = () => {
    dispatch({ type: "toggleComments", payload: 0 });
  };
  return (
    <div className="flex h-full w-full flex-col items-center">
      {state.isLoading ? (
        <LoadingDetails isOnlyPrudact={isOnlyPrudact} />
      ) : (
        <>
          <div className={`w-11/12`}>
            <TitleSection title={"حذاء"} subtitle={"200DA"} />
          </div>
          {!isOnlyPrudact && (
            <div className="flex w-full flex-row items-center justify-center py-3">
              <div className="flex w-11/12 flex-row-reverse justify-evenly rounded-md bg-card1 px-10">
                <button
                  onClick={handleLike}
                  className="likeDesktop flex flex-row items-center justify-evenly gap-2"
                >
                  <p
                    className={`text-lg  font-bold ${
                      state.isLikeIt ? "text-azure" : "text-lightSolid"
                    } `}
                  >
                    {state.likes}
                  </p>
                  <AiFillLike
                    size={40}
                    className={`${
                      state.isLikeIt ? "fill-azure" : "fill-white"
                    }`}
                  />
                </button>
                <Tabs value={state.isShowComments} className="w-3/5">
                  <TabsHeader
                    className="rounded-none border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                      className:
                        "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                    }}
                  >
                    <Tab onClick={hideComments} value={0}>
                      <div className="flex flex-row items-center justify-around gap-4">
                        <p className={`text-lg  font-bold text-lightSolid `}>
                          {state.left}
                        </p>
                        <FaShoppingCart size={40} color="white" />
                      </div>
                    </Tab>
                    <Tab onClick={showComments} value={1}>
                      <div className="flex flex-row items-center justify-around gap-4">
                        <p className="text-lg  font-bold text-lightSolid">
                          {state.comments}
                        </p>
                        <AiFillMessage size={40} color="white" />
                      </div>
                    </Tab>
                  </TabsHeader>
                </Tabs>
                <button className="shareDesktop">
                  <FaShare size={40} color="white" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {!state.isShowComments && (
        <div
          className={`h-full w-full`}
        >
          <div className="col-span-8 flex h-full w-full flex-col  items-center">
            <div className="flex h-5/6 w-full flex-col items-center justify-start">
              <div className="flex w-full flex-col items-start gap-3">
                <div className="w-full px-5">
                  <div className="relative h-64 w-8/12">
                    <Image
                      fill={true}
                      priority
                      src={"/res/item.png"}
                      alt=""
                      className="h-full w-full rounded-md"
                    />
                  </div>
                </div>
                <div className="w-11/12 px-5">
                  <Pictures direction={"horizontal"} />
                </div>
                <div className="flex w-fit gap-3 px-5">
                  <Example />
                </div>
                <div className="px-5">
                  <p className="font-Hacen-Tunisia text-xl text-scandaryColor">
                    الوصف
                  </p>
                  <p className="text-justify text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit fuga nesciunt quaerat distinctio incidunt asperiores
                    saepe sint, nobis aspernatur? Enim velit nobis eos deserunt?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {state.isShowComments && (
        <div className="flex h-full w-full items-start justify-end pt-10">
          <div className="w-11/12">
            <Comments />
          </div>
        </div>
      )}
    </div>
  );
}

function LoadingDetails({ isOnlyPrudact }) {
  return (
    <div className="flex h-full w-full animate-pulse flex-col items-center pt-7">
      <div className="w-11/12 pt-4">
        <div class="mb-4 h-2.5 w-48 rounded-full bg-gray-700"></div>
        <div class="mb-4 h-2 w-40 rounded-full bg-gray-700"></div>
      </div>
      {!isOnlyPrudact && (
        <div className="flex w-full flex-row items-center justify-center py-3">
          <div className="mb-4 flex h-14 w-11/12 flex-row-reverse justify-evenly rounded-md bg-gray-700 px-10"></div>
        </div>
      )}
    </div>
  );
}
