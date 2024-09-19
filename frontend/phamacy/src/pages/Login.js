import React from 'react'

const Login = () => {
    return (
        <div className='bg-gray-200 mb-10'>
            <div className='flex justify-center mx-auto gap-y-8 mt-10 mb-4'>
                <div className='border border-3 border-white p-3 shadow-lg py-10'>
                    <p className='text-center py-2 text-2xl font-semibold'>Register to Starcollins online pharmacy store </p>
                    <form action="" className='py-4'>

                        <div>
                            <input type="text" className='p-2 w-[400px] border border-3 border-gray-400 my-3' placeholder='E-mail' />
                        </div>
                        <div>
                            <input type="text" className='p-2 w-[400px] border border-3 border-gray-400 my-3' placeholder='Phone Number' />
                        </div>
                        <div>
                            <input type="password" className='p-2 w-[400px] border border-3 border-gray-400 my-3' placeholder='Password' />
                        </div>
                        <button className='bg-black p-2 px-5 rounded-md text-white'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
