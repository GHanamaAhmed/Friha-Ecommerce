import Search from "./search";
export default function CardGridLoading() {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center gap-6 px-3 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
        {[...Array(10)].map((e, i) => {
          return <Card key={i} />;
        })}
      </div>
    </>
  );
}
function Card() {
  return (
    <div className="h-56 w-36 overflow-hidden rounded-lg bg-card1 p-0 md:h-80 md:w-60">
      <div className="h-full w-full rounded-lg bg-gray-700 dark:bg-gray-600" />
    </div>
  );
}
