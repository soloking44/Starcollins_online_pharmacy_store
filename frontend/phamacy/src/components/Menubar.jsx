import React from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Menubar = () => {
    return (
        <div className='border-b-2 mb-4 relative z-50 mt-5'>
            <div className='hidden md:flex  justify-center mx-auto mt-5 mb-2 '>
                <ul className='flex gap-x-7'>
                    <Link className='flex items-center relative group'>
                        <p className='flex items-center px-3'>
                            <span>Pain Management</span>
                            <FaAngleDown className=' rotate-180 group-hover:rotate-0' />
                        </p>
                        <ul className='hidden group-hover:flex flex-col absolute right-0 top-5 py-2 gap-1 p-6 w-60 text-gray-600 gap-y-7 border-b-2 border-r-2 border-l-2 border-gray-300 bg-white'>
                            <Link to="/inflammentry" className='mt-5'>Anty Inflammentry</Link>
                            <Link>Body Pain</Link>
                            <Link>Joint Pain</Link>
                            <Link to="/fevar">Feva's & Headach</Link>
                            <Link to="/musle">Muscle Relaxants</Link>
                            <Link>Nerve Pain Treatment</Link>
                        </ul>
                    </Link>
                    <p className='flex items-center'>Baby Product &nbsp;<FaAngleDown /></p>
                    <Link to="/prescription-Assistance">Prescription Assistance</Link>
                    <p className='flex items-center'>Reproductive Health &nbsp; <FaAngleDown /></p>
                    <Link to="/contact_us">Contact Us</Link>
                    <p>Store Locator</p>
                </ul>

            </div>
        </div>
    )
}

export default Menubar
