import React from "react";
import { commentContext } from "../comments/comentContext";
import Comments from "../comments/comments";
import { useContext, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import TitleSection from "../titleSection/titleSection";
import Login from "../login/login";
import { useSelector } from "react-redux";
export default function DesktopComments() {
  const [text, setText] = useState("");
  const { postComment, comments } = useContext(commentContext);
  const { isAuthenticated } = useSelector((store) => store.account);
  const params = useParams();
  const pathName = usePathname();
  return (
    <div className="flex h-full w-full items-start justify-end pt-10">
      <div className="flex w-11/12 flex-col gap-5">
        <div className="flex w-11/12 items-start justify-between gap-2 py-2">
          <div className="relative m-0 w-full bg-transparent p-0">
            <textarea
              value={text}
              onChange={(e) => setText(e.currentTarget.value)}
              className="peer w-full resize-none rounded-md bg-transparent px-3 py-2 font-sans text-sm font-normal text-lightContent outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-scandaryColor focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none bg-transparent text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-blue-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-scandaryColor peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-scandaryColor peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-scandaryColor peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              اكتب تعليق
            </label>
          </div>
          {isAuthenticated && (
            <button
              onClick={(e) => {
                e.preventDefault();
                postComment({
                  type: pathName.includes("reel") ? "reel" : "product",
                  postId:
                    params?.product || window.history.state || params?.reel,
                  text,
                });
                setText("");
              }}
              className="none center mb-1.5 h-fit rounded-lg border border-lightContent px-4 py-2.5 font-sans text-xs font-bold uppercase text-lightContent transition-all active:border-scandaryColor active:text-scandaryColor disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              نشر
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
        <Comments />
      </div>
    </div>
  );
}
