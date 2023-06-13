import { twMerge } from 'tailwind-merge';
export default function TitleSectionLoading({ className, title, subtitle, children }) {
    return (
        <div className={twMerge("animate-pulse",className)}>
            <div className='gap-2 flex flex-col pt-5'>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2.5"></div>
            </div>
            {children && <div className='justify-between gap-3 items-center hidden md:flex'>
                <p className="w-20 h-2 bg-gray-700 rounded-lg" />
                <p className="w-20 h-2 bg-gray-700 rounded-lg" />
            </div>}
        </div>
    )
}
