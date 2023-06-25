"use client";
import { useEffect, useState } from "react";
import Comment from "./comment";
import { selep } from "@@/lib/sleep";
const data = [
  {
    className: "w-11/12",
    nameUser: "John",
    imgUser: "john.jpg",
    textUser: "This is the first comment.",
    replyTo: null,
    replies: [
      {
        className: "w-11/12",
        nameUser: "Alice",
        imgUser: "alice.jpg",
        textUser: "Reply to the first comment.",
        replyTo: "John",
        replies: [
          {
            className: "w-11/12",
            nameUser: "Bob",
            imgUser: "bob.jpg",
            textUser: "Reply to Alice's reply.",
            replyTo: "Alice",
            replies: [],
            createAt: "2023-06-15",
          },
        ],
        createAt: "2023-06-15",
      },
      {
        className: "w-11/12",
        nameUser: "Bob",
        imgUser: "bob.jpg",
        textUser: "Another reply to the first comment.",
        replyTo: "John",
        replies: [],
        createAt: "2023-06-15",
      },
    ],
    createAt: "2023-06-15",
  },
  {
    className: "",
    nameUser: "Mary",
    imgUser: "mary.jpg",
    textUser: "This is another comment.",
    replyTo: null,
    replies: [],
    createAt: "2023-06-16",
  },
  {
    className: "w-11/12",
    nameUser: "Alice",
    imgUser: "alice.jpg",
    textUser: "This is a standalone comment.",
    replyTo: null,
    replies: [],
    createAt: "2023-06-17",
  },
];

export default function Comments() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    selep().then(() => {
      setIsLoading(false);
    });
  }, []);
  return isLoading ? (
    <LoadingComments />
  ) : (
    <div className="flex w-11/12 flex-col overflow-y-auto py-4">
      <div className="flex w-full flex-col justify-start gap-3">
        {data.map((e, i) => {
          return (
            <Comment
              key={i}
              className={"w-full"}
              createAt={e?.createAt}
              imgUser={"/res/basket.svg"}
              nameUser={e?.nameUser}
              textUser={e?.textUser}
              replies={e?.replies}
              replyTo={e?.replyTo}
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
              className={"flex flex-col mb-2 gap-3 rounded-sm bg-card1 px-3 pt-3"}
            >
              <div className="flex w-full items-center justify-between">
                <div></div>
                <div className="flex items-center gap-2">
                  <div class="h-2 w-56 rounded-full bg-gray-700"></div>
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
