import Image from 'next/image'

export default function Card({ img, title, subtitle}) {
    return (
        <div className='md:w-[275px] w-[250px] h-[250px] md:h-[275px] rounded-lg bg-card1 p-4 grid grid-cols-1 grid-rows-2'>
            <div className='place-self-start relative'>
                <div className='p-4 w-20 h-20 bg-lightSolid rounded-lg'>
                    <Image src={img}  priority alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-2 justify-center'>
                <p className='text-lightSolid text-xl'>{title}</p>
                <p className='text-lightContent'>{subtitle}</p>
            </div>
        </div>
    )
}
