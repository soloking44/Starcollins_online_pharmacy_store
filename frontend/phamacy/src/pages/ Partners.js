import React from 'react'
import bk1 from '../img/Wells_Fargo-Logo.wine.png'
import bk2 from '../img/gtbusd.png'
import bk3 from '../img/uba-logo-1CFD25002D-seeklogo.com.png'
import bk4 from '../img/Barclays-Logo.wine.png'
const  Partners = () => {
  return (
      <div> 
          <div>
              <p className='py-4 px-10 text-3xl font-semibold'> Partners</p>
              <div className='grid md:grid-cols-2 py-7 px-4 justify-center mx-auto'>
                  <div className='grid md:grid-cols-2'>
                      <img src={bk3} className='w-40 shadow-lg py-4 gap-y-4 md:w-60 hover:scale-105 transition-all duration-200' alt="bk3" />
                      <img src={bk4} className='w-40 shadow-lg py-4 gap-y-4 md:w-60 hover:scale-105 transition-all duration-200' alt="bk4" />
                  </div>
                  <div className='grid md:grid-cols-2'>
                      <img src={bk1} className='w-40 shadow-lg py-4 gap-y-4 md:w-60 hover:scale-105 transition-all duration-200' alt="bk1" />
                      <img src={bk2} className='w-40 shadow-lg py-4 gap-y-4 md:w-60 hover:scale-105 transition-all duration-200' alt="bk2" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default  Partners