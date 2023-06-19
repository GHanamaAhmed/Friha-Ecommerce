"use client"
function SwiperLoadingComponent() {
  const nItems = 10
  const content = () => {
    return (
      <div className='flex gap-3 flex-nowrap overflow-auto md:overflow-hidden'>
        {[...Array(nItems)].map((e, i) => (
          <div
            key={i}
            role="status"
            className="space-y-8 relative animate-pulse p-0 md:space-y-0 md:space-x-8 md:flex md:items-center"
          >
            <div className="rounded-lg m-0 h-72 w-52 md:h-80 md:w-60 max-h-none max-w-none  bg-gray-700 px-4 flex justify-center items-center">
              <svg
                className="w-12 h-12 text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
              </svg>

              <div className='flex flex-col absolute bottom-4 gap-4 right-4 z-10'>
                <div className="h-4 bg-gray-300 rounded-full w-16"></div>
                <div className="h-2 bg-gray-300 rounded-full w-10"></div>
              </div >
            </div>
          </div>
        ))}
      </div>
    )
  }
  return content()
}
export default function SwiperLoading() {
  return (
    <SwiperLoadingComponent />
  )
}
