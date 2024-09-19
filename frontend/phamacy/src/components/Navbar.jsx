import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import  logo  from '../img/logo.png'


function Navbar() {
    return (
        <div className='flex justify-between items-center py-2 px-4 pt-16'>
            <Link to="/">
                <div><img src={logo} className='w-20' alt="logo" /></div>
            </Link>
            <div className='hidden md:flex'>
                <div className='flex items-center w-[500px] border border-1 border-red-600 p-2 rounded-md'>
                    <input type="text" placeholder='Search.....' className='w-full border-none outline-none' />
                    <p className=''>
                        <FiSearch className='' size={30} />
                    </p>

                </div>
            </div>

            <div className='flex items-center px-2 gap-x-4'>
                <p>
                    <FiSearch className='flex md:hidden' size={30} />
                </p>
                <Link to="/login">
                    <FaRegUser className='cursor-pointer' size={25} />
                </Link>
                <p className=' relative'>
                    <Link to="/cart">
                        <IoCartOutline className='cursor-pointer' size={25} />
                        <b class=' absolute top-[-10px] left-5 bg-red-600 text-white rounded-full h-5 w-5 text-center'>3</b>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Navbar
