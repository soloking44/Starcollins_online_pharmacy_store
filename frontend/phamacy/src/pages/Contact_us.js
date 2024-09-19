import React from 'react'

function Contact_us() {
    return (
        <div>
            <div className='py-10 flex justify-center mx-auto'>
                <div>
                    <p className='py-3 text-center text-3xl font-semibold text-blue-600 capitalize'>Contact Starcollins online Pharmacy store</p>
                    <p className='text-center px-16 pt-6'>
                        If you have any question, Kindly click on the chat button below to chat with us live between 7:00 am and 9:00 pm every day or leave a message outside of these hours. We will attend to you as soon as possible.
                    </p>
                    <div className='flex justify-center mt-5'>
                        <p className='bg-yellow-500 text-white p-2 py-3 px-2'>Chat with a Pharmacist or Support</p>
                    </div>
                    <p className='py-5 text-gray-500 text-center'>
                        Alternatively you can reach us by phone or email using the following contact details
                        <p className='py-4'>
                            <p className='pb-3 text-blue-600'><b className='text-black'>Email:</b> customercare@StarcollinsonlinePharmacy.com</p>

                            <p className='text-blue-600'><b className='text-black'>Tel:</b> +234 8067967713</p>

                        </p>
                    </p>
                </div>
            </div>
            <div className='flex justify-center mt-4 py-6'>
                <form action="" method="get">
                    <div className='grid md:grid-cols-2 gap-x-6 gap-y-4'>
                        <input type="text" className='w-[400px] border border-3 border-gray-400 p-2 rounded-md' placeholder='Your Name' />
                        <input type="text" className='w-[400px] border border-3 border-gray-400 p-2 rounded-md' placeholder='Your Email' />
                    </div>
                    <div className='py-4 flex flex-col justify-center'>
                        <textarea name="" className='border border-3 border-gray-400' id="" cols="100" rows="10">
                            kkk
                        </textarea>
                        <p className='p-2 py-3 bg-orange-500 w-40 mt-4 text-center font-semibold text-white'>Send Message</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact_us
