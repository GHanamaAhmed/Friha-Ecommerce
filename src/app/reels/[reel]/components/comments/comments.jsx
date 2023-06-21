import Comment from "./comment";
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
  return (
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
