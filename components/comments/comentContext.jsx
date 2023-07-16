"use client";
import React, { createContext, useEffect, useState } from "react";
import { fetchComments, sendComment } from "@@/lib/api/comment";
import { useSelector } from "react-redux";

export const commentContext = createContext();

export default function CommentContext({ children }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nComments, setNComments] = useState(0);
  const { user } = useSelector((store) => store.account);
  const postComment = (req) => {
    sendComment(req)
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
          text: req?.text,
        };
        setComments([...comments, newComment]);
        setNComments((prev) => prev + 1);
      })
      .catch((err) => console.error(err));
  };
  return (
    <commentContext.Provider
      value={{
        comments,
        isLoading,
        postComment,
        setComments,
        setIsLoading,
        nComments,
        setNComments,
      }}
    >
      {children}
    </commentContext.Provider>
  );
}
