import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='py-16 px-4 bg-gray-100'>
            <div className='grid md:grid-cols-3'>
                <div>
                    <p className='text-2xl font-semibold'>About</p>
                    <p className='py-6 text-gray-500'>
                        StarCollins Online Pharmacy Store, is Nigeria’s
                        first integrative pharmacy, the leading pharmacy
                        chain in Nigeria and the fastest growing in West Africa. We are committed
                        to our mission of helping people achieve optimum
                        health and vitality, while delivering superior value to stakeholders.
                    </p>
                </div>
                <div>
                    <p className='text-2xl font-semibold'>Page Links</p>
                    <p className='flex flex-col gap-y-2 mt-4 py-6 text-gray-500'>
                        <Link className='hover:text-blue-700'>About Starcollins online Pharmacy store</Link>
                        <Link className='hover:text-blue-700'>Careers</Link>
                        <Link className='hover:text-blue-700'>Rewards</Link>
                        <Link className='hover:text-blue-700'>Shoping Information</Link>
                    </p>
                </div>
                <div>
                    <p className='text-2xl font-semibold '>Policy Links</p>
                    <p className='flex flex-col gap-y-2 mt-4 py-6 text-gray-500'>
                        <Link className='hover:text-blue-700'>Privacy Policy</Link>
                        <Link className='hover:text-blue-700'>Terms of Service</Link>
                        <Link className='hover:text-blue-700'>Refund Policy</Link>
                        <Link className='hover:text-blue-700'>Shipping Policy</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer