import React from 'react'
export default function TitleSection({ className, title, subtitle, children }) {
    return (
        <div className={className}>
            <div className='gap-2 flex flex-col'>
                <p className='text-32 text-white md:text-40'>{title}</p>
                <p className='text-base subtitle md:text-base'>{subtitle}</p>
            </div>
            {children}
        </div>
    )
}
