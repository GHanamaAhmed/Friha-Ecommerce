function Cards() {
  return (
    <div className="h-[250px] w-[250px] animate-pulse rounded-lg md:h-[275px] md:w-[275px]">
      <div className="h-full w-full rounded-lg bg-gray-700 dark:bg-gray-600 md:h-72" />
    </div>
  );
}

export default function StepsLoading() {
  return (
    <>
      <div className="flex  h-full w-full flex-col items-center justify-around gap-3 sm:flex-row">
        {[...Array(3)].map((e, i) => (
          <Cards key={i} />
        ))}
      </div>
      <img
        className="absolute right-1/2 top-1/3 -z-10 hidden h-full w-full translate-x-1/2 sm:block"
        src={"./res/BG.png"}
        alt="Image"
      />
      <img
        className="absolute right-1/2 top-1/2 -z-10 h-5/6 w-full  -translate-y-1/2 translate-x-1/2 sm:hidden"
        src={"./res/BG1.png"}
        alt="Image"
      />
    </>
  );
}
