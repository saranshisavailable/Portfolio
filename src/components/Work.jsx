import React from 'react'
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const Work = () => {
    return (
        <div id='Work' className='md:h-screen w-full bg-[#0a192f] text-gray-300 '>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 '>
                <div>
                    <h1 className='text-4xl font-bold border-b-4 border-pink-600 inline'>Work</h1>
                    <p className='py-8'>// Checkout some of my recent work</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-4'>
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md   mx-auto content-div'
                    >
                        <div className='h-full flex flex-col justify-center items-center gap-10 opacity-0 group-hover:opacity-100 '>
                            <div>
                                <p className='font-bold text-2xl tracking-wider text-white '>React JS application</p>
                            </div>
                            <div className='flex gap-8'>

                                <a href="/"> <button className='px-4 py-3 bg-white  text-gray-700 font-bold rounded-md    '>Demo</button></a>
                                <a href="/"> <button className='px-4 py-3 bg-white text-gray-700 font-bold rounded-md '>Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${realEstate})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md   mx-auto content-div'
                    >
                        <div className='h-full flex flex-col justify-center items-center gap-10 opacity-0 group-hover:opacity-100 '>
                            <div>
                                <p className='font-bold text-2xl tracking-wider text-white '>React JS application</p>
                            </div>
                            <div className='flex gap-8'>

                                <a href="/"> <button className='px-4 py-3 bg-white  text-gray-700 font-bold rounded-md    '>Demo</button></a>
                                <a href="/"> <button className='px-4 py-3 bg-white text-gray-700 font-bold rounded-md '>Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md   mx-auto content-div'
                    >
                        <div className='h-full flex flex-col justify-center items-center gap-10 opacity-0 group-hover:opacity-100 '>
                            <div>
                                <p className='font-bold text-2xl tracking-wider text-white '>React JS application</p>
                            </div>
                            <div className='flex gap-8'>

                                <a href="/"> <button className='px-4 py-3 bg-white  text-gray-700 font-bold rounded-md    '>Demo</button></a>
                                <a href="/"> <button className='px-4 py-3 bg-white text-gray-700 font-bold rounded-md '>Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${realEstate})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md   mx-auto content-div'
                    >
                        <div className='h-full flex flex-col justify-center items-center gap-10 opacity-0 group-hover:opacity-100 '>
                            <div>
                                <p className='font-bold text-2xl tracking-wider text-white '>React JS application</p>
                            </div>
                            <div className='flex gap-8'>

                                <a href="/"> <button className='px-4 py-3 bg-white  text-gray-700 font-bold rounded-md    '>Demo</button></a>
                                <a href="/"> <button className='px-4 py-3 bg-white text-gray-700 font-bold rounded-md '>Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${WorkImg})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md   mx-auto content-div'
                    >
                        <div className='h-full flex flex-col justify-center items-center gap-10 opacity-0 group-hover:opacity-100 '>
                            <div>
                                <p className='font-bold text-2xl tracking-wider text-white '>React JS application</p>
                            </div>
                            <div className='flex gap-8'>

                                <a href="/"> <button className='px-4 py-3 bg-white  text-gray-700 font-bold rounded-md    '>Demo</button></a>
                                <a href="/"> <button className='px-4 py-3 bg-white text-gray-700 font-bold rounded-md '>Code</button></a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${realEstate})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md   mx-auto content-div'
                    >
                        <div className='h-full flex flex-col justify-center items-center gap-10 opacity-0 group-hover:opacity-100 '>
                            <div>
                                <p className='font-bold text-2xl tracking-wider text-white '>React JS application</p>
                            </div>
                            <div className='flex gap-8'>

                                <a href="/"> <button className='px-4 py-3 bg-white  text-gray-700 font-bold rounded-md    '>Demo</button></a>
                                <a href="/"> <button className='px-4 py-3 bg-white text-gray-700 font-bold rounded-md '>Code</button></a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Work