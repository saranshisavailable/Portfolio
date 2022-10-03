import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png'
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {

    return (
        <div id='Skills' className='pb-16 lg:pb-0 lg:h-screen w-full bg-[#0a192f] text-gray-300  '>
            {/* container */}
            <div className=''>
                <div className='max-w-[1000px] h-full mx-auto  px-4 '>
                    <div className=''>
                        <h1 className='text-4xl font-bold border-b-4 border-pink-600 inline'>Skills</h1>
                        <p className='py-4'>These are the technologies I've worked with</p>
                    </div>
                    <div className=' grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 text-center  '>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={HTML} alt="" />
                            <p className='py-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={CSS} alt="" />
                            <p className='py-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="" />
                            <p className='py-4'>JavaScript</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={ReactImg} alt="" />
                            <p className='py-4'>React</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={GitHub} alt="" />
                            <p className='py-4'>GitHub</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Node} alt="" />
                            <p className='py-4'>Node</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Tailwind} alt="" />
                            <p className='py-4'>Tailwind</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Mongo} alt="" />
                            <p className='py-4'>Mongo</p>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills