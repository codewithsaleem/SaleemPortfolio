import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Services = () => {
    return (
        <div className='bg-[#121212] pt-[4rem] md:pt-[6rem] pb-[5rem]'>
            <div className='w-[80%] mx-auto gap-[3rem] items-center'>
                <h1 className='text-[40px] font-bold uppercase text-[#ffffff] text-center'>
                    My <span className='text-yellow-400'>Services</span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[100%] mx-auto items-center gap-[3rem] mt-[4rem] text-white' >
                    <div data-aos="fade-left">
                        <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                            <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal'>
                                React is a powerful JavaScript library for building user interfaces.
                                It utilizes a component-based architecture, enabling reusable UI elements, efficient rendering via the virtual DOM, and seamless state management for dynamic web applications.
                                Front End Developer ⫸ Specialist in JavaScript, CSS, and HTML.
                            </p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="300">
                        <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
                            <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal'>
                                Node.js is a JavaScript runtime built on Chromes V8 engine, designed for building scalable network applications.
                                It features an event-driven, non-blocking I/O model, ideal for server-side development and real-time data handling.
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="500">
                        <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                            <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                            <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Full Stack</h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal'>
                                MERN combines MongoDB, Express.js, React, and Node.js to create robust fullstack applications. This JavaScript-based stack allows seamless
                                integration between frontend and backend, enabling efficient data management and dynamic user experiences in web development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
