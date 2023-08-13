import React from "react";
import Reels from "./components/reels";
import CommentContext from "@@/components/comments/comentContext";
export default function Page({ params }) {
  return (
    <CommentContext>
      <Reels />
    </CommentContext>
  );
}
