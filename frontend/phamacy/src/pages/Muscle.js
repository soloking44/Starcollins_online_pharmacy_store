import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import ms from '../img/Musle/ms.webp'
const Muscle = () => {
    const musle = [
        {
            id: 1,
            companyName: 'HealthPlus Pharmacy',
            title: 'Libre Tizanidine 2mg x10',
            amount: '₦750.00 NGN',
            img: ms
        },
    ]
    return (
        <div>
            <div className='flex px-3 py-3'>
                <Link to="/" className='text-orange-400 flex items-center'>Home <MdKeyboardArrowRight /></Link>
                <Link to="/inflammentry">Musle</Link>
            </div>

            <div className='px-3 md:px-16 py-10'>
                <div className='border border-3 shadow-lg bg-white pb-6 px-3'>
                    <p className='text-2xl py-4 px-8 text-blue-700'>Muscle Relaxants</p>
                    {/* <p className=' text-gray-500 py-3 text-center'>Buy medications for fevers, headache & migraine at HealthPlus Limited. Check Price and Buy Online. ✓ Best Offers.  Brands include Bonababe, Calpol, Emcap, Emzor, GSK, Ibucap, May & Baker, Nurofen, Panadol & Tabalon.</p> */}
                    <div className='grid md:grid-cols-4 gap-x-3 gap-y-6 mt-2'>
                        {musle.map((datas) => {
                            return (
                                <Link>
                                    <div className='shadow-lg hover:scale-105 transition-all duration-200'>
                                        <div>
                                            <img src={datas.img} alt="" className='h-[300px]' />
                                            <div className='p-2 px-4 pb-3'>
                                                <p className='pb-4 text-gray-500 uppercase'>{datas.companyName}</p>
                                                <p className=' truncate pb-4 text-gray-600'>{datas.title}</p>
                                                <p className='text-orange-400 text-xl mb-4 font-semibold'>{datas.amount}</p>
                                                <p className='w-20 p-2 border border-3 rounded-md border-blue-700 hover:bg-orange-500 hover:transition-all ease-in-out hover:text-white'><IoCartOutline size={30} /></p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Muscle
