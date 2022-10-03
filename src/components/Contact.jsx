import React from 'react'

const Contact = () => {
    return (
        <div id='Contact' className='h-screen w-full bg-[#0a192f] text-gray-300 '>
            <div className='max-w-[1000px] flex flex-col justify-center items-center mx-auto p-4'>

                <form action="" className='flex flex-col gap-4  '>
                    <div>
                        <h1 className='text-4xl font-bold border-b-4 border-pink-600 inline'>Contact</h1>
                        <p className='py-4 mb-4 '>//Submit the form below or shoot me an email - saranshsharma12345@gmail.com</p>
                    </div>

                    <input type="text" placeholder='Name' className='p-2  bg-[#ccd6f6]' />
                    <input type="text" placeholder='Email' className='p-2 bg-[#ccd6f6]' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='bg-[#ccd6f6] p-2'></textarea>
                    <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let' s Collaobrate</button>
                </form>
            </div>
        </div >
    )
}

export default Contact