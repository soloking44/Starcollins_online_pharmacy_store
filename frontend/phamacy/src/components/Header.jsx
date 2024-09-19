import React from 'react'

const Header = () => {
    return (
        <div className='w-full bg-white shadow-lg t-10 left-0 right-0 fixed z-50'>
            <div className='flex justify-between items-start py-2 px-3'>
                <div>
                    <p>Star Collins </p>
                </div>
                <div className='hidden md:flex'>
                    Welcome to star collins online Phamacy sotre!
                </div>
                <div>
                    <p>+2348067967713</p>
                </div>
            </div>
        </div>
    )
}

export default Header
