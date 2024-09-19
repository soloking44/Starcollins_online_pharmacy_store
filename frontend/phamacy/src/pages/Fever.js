import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from 'axios';
import { IoCartOutline } from "react-icons/io5";



const Fever = () => {
    const [fever, setFever] = useState([])

    useEffect(() => {
        const getFever = async () => {
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/idividuacat/9/')
                setFever(res.data)
                // console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getFever()
    }, [])

    return (
        <div>
            <div className='flex px-3 py-3'>
                <Link to="/" className='text-orange-400 flex items-center'>Home <MdKeyboardArrowRight /></Link>
                <Link to="/inflammentry">Fevers</Link>
            </div>

            <div className='px-3 md:px-16 py-10'>
                <div className='border border-3 shadow-lg bg-white pb-6 px-3'>
                    <p className='text-2xl py-4 px-8 text-blue-700'>Fevers, Headache & Migraine</p>
                    <p className=' text-gray-500 py-3 text-center'>Buy medications for fevers, headache & migraine at HealthPlus Limited. Check Price and Buy Online. ✓ Best Offers.  Brands include Bonababe, Calpol, Emcap, Emzor, GSK, Ibucap, May & Baker, Nurofen, Panadol & Tabalon.</p>
                    <div className='grid md:grid-cols-4 items-center gap-x-3 gap-y-6 mt-2'>
                        {fever.map((datas) => (
                            <div className='hover:scale-105 transition-all duration-300 shadow-lg mb-3'>
                                <Link>
                                    <div key={datas.id}>
                                        <p>
                                            <img src={`http://localhost:8000${datas.image}`} className='h-[250px]' alt={datas.id} />
                                        </p>
                                        <p className='p-4'>{datas.name}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Fever
