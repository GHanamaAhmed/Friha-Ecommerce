
import Search from "./search"

export default function CardGridLoading() {
    return (
        <>
            <Search />
            <div className="grid grid-cols-2 gap-6 place-items-center px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-8">
                {[...Array(10)].map((e, i) => {
                    return <Card key={i} />
                })}
            </div>
        </>
    )
}
function Card() {
    return (
        <div className='w-36 p-0 md:w-60 h-56 md:h-80 overflow-hidden rounded-lg bg-card1'>
            <div className="w-full h-full bg-gray-700 rounded-lg dark:bg-gray-600" />
        </div>
    )
}
