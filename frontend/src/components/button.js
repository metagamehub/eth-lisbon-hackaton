import React from 'react'

const Button = ({ text, link, classes, onClick }) => {
    return (
        <a href={link} className={`${classes} relative w-30 flex sm:scale-85 lg:scale-90 xl:scale-100 pointer-events-none font-medium text-xl rounded-lg py-2 px-3 items-end`}>
            <div onClick={() => onClick()} className=' border-solid  border-2 rounded-[15px] px-2 border-white'>
                <h2 className='text-[15px] truncate'>{text}</h2>    
            </div>
            
        </a>
    )
}

export default Button
