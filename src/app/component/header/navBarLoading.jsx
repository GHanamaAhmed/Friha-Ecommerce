export default function NavBarLoading() {
  return (
    <header
      className={`bg- fixed top-0 z-50 flex w-full items-center justify-between px-4 py-5 duration-500 md:px-14`}
    >
      <div className="hidden items-center justify-between gap-3 md:flex">
        <p className="h-2 w-20 rounded-lg bg-gray-700" />
        <p className="h-2 w-20 rounded-lg bg-gray-700" />
        <p className="h-4 w-4 rounded-sm bg-gray-700" />
        <p className="h-4 w-4 rounded-sm bg-gray-700" />
      </div>
      <p className="h-8 w-8 rounded-lg bg-gray-700 md:hidden" />
      <div className="flex items-center gap-2">
        <p className="h-2 w-20 rounded-lg bg-gray-700" />
        <p className="h-8 w-8 rounded-lg bg-gray-700" />
      </div>
    </header>
  );
}
