import React from 'react'
import family from '../img/maternity-7890356_1280.jpg'
const HealthTools = () => {
    return (
        <div className='px-3 pb-5'>
            <div className='bg-white'>
                <div className='bg-blue-600 py-8'>
                    <p className='text-center text-white text-3xl font-semibold'>Health Tools & Services</p>
                    <p className='px-5 mt-4 text-white'>
                        Check out our new "Health Tools and Services" section. It includes a range of interactive calculators and resources that promote better health awareness and lifestyle management. You'll find BMI and heart age calculators, as well as personalized wellness insights. These user-friendly tools provide instant, actionable data to help you take control of your well-being journey.
                    </p>
                    <div className='py-5'>
                        <img src={family} alt="family" className=' object-cover w-full h-80 object-center' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthTools