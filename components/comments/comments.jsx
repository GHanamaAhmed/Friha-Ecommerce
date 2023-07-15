"use client";
import { useContext, useEffect } from "react";
import Comment from "./comment";
import { commentContext } from "./comentContext";
import { fetchComments } from "@@/lib/api/comment";
import { useParams, usePathname } from "next/navigation";
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
export default function Comments() {
  const { comments, isLoading, setComments, setIsLoading } =
    useContext(commentContext);
  const params = useParams();
  const pathName = usePathname();
  useEffect(() => {
    const req = {
      type: pathName.includes("reel") ? "reel" : "product",
      postId: params?.product || window.history.state  || params?.reel,
    };
    console.log(req);
    (window.history.state || params?.product || params?.reel) &&
      fetchComments(req)
        .then((res) => {
          setComments(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    !window.history.state && setIsLoading(false);
  }, [window.history.state]);
  return isLoading ? (
    <LoadingComments />
  ) : (
    <div className="flex w-11/12 flex-col overflow-y-auto py-4">
      <div className="flex w-full flex-col justify-start gap-3">
        {comments?.map((e, i) => {
          console.log(e);
          return (
            <Comment
              key={i}
              userId={e?._id}
              className={"w-full"}
              createAt={formatDate(e?.createAt)}
              imgUser={e?.Photo}
              nameUser={`${e?.lastName}`}
              textUser={e?.text}
              commentId={e?.commentId}
              nReplies={Number(e?.replies)}
              isRoot={true}
            />
          );
        })}
      </div>
    </div>
  );
}
function LoadingComments() {
  return (
    <div className="flex w-11/12 animate-pulse flex-col overflow-y-auto pt-4">
      <div className="flex w-full flex-col justify-start gap-1">
        {[...Array(3)].map((e, i) => {
          return (
            <div
              key={i}
              className={
                "mb-2 flex flex-col gap-3 rounded-sm bg-card1 px-3 pt-3"
              }
            >
              <div className="flex w-full items-center justify-between">
                <div></div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-56 rounded-full bg-gray-700"></div>
                  <div className="relative h-6 w-6  rounded-full bg-gray-700 md:h-8 md:w-8"></div>
                </div>
              </div>
              <div className="mb-4 h-14 w-full bg-gray-700"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
