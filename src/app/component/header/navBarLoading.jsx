export default function NavBarLoading() {
    return (
        <header className={`w-full fixed top-0 bg- z-50 px-4 md:px-14 duration-500 flex items-center justify-between py-5`}>
            <div className='justify-between gap-3 items-center hidden md:flex'>
                <p className="w-20 h-2 bg-gray-700 rounded-lg" />
                <p className="w-20 h-2 bg-gray-700 rounded-lg" />
                <p className="w-4 h-4 bg-gray-700 rounded-sm" />
                <p className="w-4 h-4 bg-gray-700 rounded-sm" />
            </div>
            <p className="w-8 h-8 bg-gray-700 rounded-lg md:hidden" />
            <div className='flex gap-2 items-center'>
                <p className="w-20 h-2 bg-gray-700 rounded-lg" />
                <p className="w-8 h-8 bg-gray-700 rounded-lg" />
            </div>
        </header>
    )
}
