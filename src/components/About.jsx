import React from 'react'

const About = () => {
    return (
        <div id='about' className='h-screen w-full bg-[#0a192f]  '>
            <div className='w-full h-screen flex flex-col text-gray-300  justify-center items-center'>
                <div className=" max-w-[1000px]  px-4 ">
                    <div className='py-8 sm:px-4  sm:text-right w-1/2 '>
                        <h1 className='text-4xl font-bold border-b-4 inline border-pink-600 '>About</h1>
                    </div>
                    <div className='flex flex-col gap-8 sm:flex-row sm:justify-center '>
                        <div className=' sm:w-1/2 sm:text-right '> <h1 className='text-4xl font-bold  '>Hi. I'm Saransh, nice to meet you. Please take a look around.</h1>
                        </div>
                        <div className='sm:w-1/2 '> <p>
                            I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                        </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About