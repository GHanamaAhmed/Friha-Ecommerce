function Cards() {
    return (
        <div className='md:w-[275px] animate-pulse w-[250px] h-[250px] md:h-[275px] rounded-lg'>
            <div className="w-full h-full bg-gray-700 rounded-lg md:h-72 dark:bg-gray-600" />
        </div>
    )
}

export default function StepsLoading() {
    return (
        <>
            <div className='w-full  h-full flex flex-col sm:flex-row items-center justify-around gap-3'>
                <Cards />
                <Cards />
                <Cards />
            </div>
            <img className='w-full h-full hidden sm:block absolute top-1/3 right-1/2 translate-x-1/2 -z-10' src={"./res/BG.png"} alt='Image' />
            <img className='w-full h-5/6 sm:hidden absolute top-1/2 -translate-y-1/2  right-1/2 translate-x-1/2 -z-10' src={"./res/BG1.png"} alt='Image' />
        </>
    )
}