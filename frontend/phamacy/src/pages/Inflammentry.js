import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const Inflammentry = () => {
    const [inlamentry, seInflamentry] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/idividuacat/8/')
                seInflamentry(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <div>
            <div className='flex px-3 py-3'>
                <Link to="/" className='text-orange-400 flex items-center'>Home <MdKeyboardArrowRight /></Link>
                <Link to="/inflammentry">Anti-inflammatory</Link>
            </div>

            <div className='px-3 md:px-16 py-10'>
                <div className='border border-3 shadow-lg bg-white pb-6 px-3'>
                    <p className='text-2xl py-4 px-8 text-blue-700'>Anti-inflammatory</p>
                    <div className=''>
                        
                            <div className='grid md:grid-cols-4'>
                            {inlamentry.map((d) => (
                                    <div>

                                    <Link to={`/detail/${d.id}`}>
                                            <div className='shadow-lg hover:scale-105 transition-all duration-200'>
                                            <div>
                                                <img src={`http://localhost:8000${d.image}`} alt="" className='h-[300px]' />
                                                    <div className='p-2 px-4 pb-3'>
                                                        {/* <p className='pb-4 text-gray-500 uppercase'>{datas.companyname}</p> */}
                                                        <p className=' truncate pb-4 text-gray-600'>{d.name}</p>
                                                        <p className='text-orange-400 text-xl mb-4 font-semibold'>{d.price}</p>
                                                        <p className='w-20 p-2 border border-3 rounded-md border-blue-700 hover:bg-orange-500 hover:transition-all ease-in-out hover:text-white'><IoCartOutline size={30} /></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>


                                    </div>
                                ))}
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inflammentry