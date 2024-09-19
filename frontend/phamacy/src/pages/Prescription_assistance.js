import React from 'react'
import assistance from '../img/Musle/assistance.webp'

import woman1 from '../img/Musle/woman-1.avif'
import woman2 from '../img/Musle/woman-2.avif'
import woman3 from '../img/Musle/woman-3.avif'

const Prescription_assistance = () => {
    const womans = [
        {
            id: 1,
            title: 'Convenience',
            description: 'No more waiting in line – have your medications delivered directly to your home.',
            img: woman1
        },
        {
            id: 2,
            title: 'Sefty',
            description: 'All our medications are sourced from certified manufacturers and pharmacies.',
            img: woman2
        },
        {
            id: 3,
            title: 'Consultation',
            description: 'Need advice? Our pharmacists are here to guide you 24/7.',
            img: woman3
        },
    ]
    return (
        <div className='pt-6'>
            <div className='grid md:grid-cols-2'>
                <div>
                    <img src={assistance} alt="assistance" />
                </div>
                <div>
                    <div className='px-16 py-16'>
                        <p className='text-blue-800 text-2xl md:text-2xl font-semibold mb-6'>
                            Trusted Prescription Medications, Delivered Safely to Your Doorstep.</p>
                        <p className='text-center text-xl text-gray-500'>Your health is our top priority. <br />Get your prescriptions with ease and confidence.</p>
                        <div className='flex flex-col justify-center items-center py-10'>
                            <p className='p-2 bg-yellow-500 px-3 w-72 py-3 text-center text-xl font-semibold text-white mb-6'>Chart with our Pharmacist</p>
                            <p className='p-2 bg-blue-600 px-3 w-72 py-3 text-center text-xl font-semibold text-white'>Chart with our Pharmacist</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='bg-yellow-500 mb-10 pb-16'>
                <p className='py-16 text-4xl text-center text-white'>Benefits</p>
                <div className='flex justify-center mx-auto'>
                    <div className='grid md:grid-cols-3 px-6 gap-x-3 gap-y-4'>
                        {womans.map((mydatas) => {
                            return (
                                <div className='bg-white flex flex-col p-10'>
                                    <p className='text-black text-2xl font-semibold pb-3'>{mydatas.title}</p>
                                    <p className='py-3 text-sm text-gray-600'>{mydatas.description}</p>
                                    <img src={mydatas.img} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prescription_assistance