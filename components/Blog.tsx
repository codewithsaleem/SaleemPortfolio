import { ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import YoutubeVideo from './YoutubeVideo'

const Blog = () => {
    return (
        <div className='bg-[#121212] pt-[4rem] md:pt-[6rem] pb-[5rem]'>
            <div className='w-[80%] mx-auto gap-[3rem] items-center'>
                <h1 className='text-[40px] font-bold uppercase text-[#ffffff] text-center'>
                    My <span className='text-yellow-400'>Blog</span>
                </h1>
                {/* <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] mx-auto' >
                    <div data-aos="fade-right">
                        <div className='w-[100%] relative h-[400px]'>
                            <Image
                                src="/images/blog3.jpg"
                                alt='blog'
                                layout='fill'
                                objectFit='object-cover'
                            />
                        </div>
                        <div className='w-[90%] text-center mx-auto bg-[#09101a] relative mb-[2rem] mt-[-1rem]'>
                            <div className='w-[fit] px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                                Februray 10, 2024
                            </div>
                            <div className='flex flex-col md:flex-row flex-center mt-[1rem] space-x-4'>
                                <div className='flex items-center space-x-3'>
                                    <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                                    <p className='text-white'>By Mohd Saleem</p>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                                    <p className='text-white'>Comments(5)</p>
                                </div>
                            </div>
                            <p className='mt-[1rem] text-white text-[18px] font-semibold'>
                                Next Js Fullstack Development
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <div className='w-[100%] relative h-[400px]'>
                            <Image
                                src="/images/blog2.jpg"
                                alt='blog'
                                layout='fill'
                                objectFit='object-cover'
                            />
                        </div>
                        <div className='w-[90%] text-center mx-auto bg-[#09101a] relative mb-[2rem] mt-[-1rem]'>
                            <div className='w-[fit] px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                                April 10, 2024
                            </div>
                            <div className='flex flex-col md:flex-row flex-center mt-[1rem] space-x-4'>
                                <div className='flex items-center space-x-3'>
                                    <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                                    <p className='text-white'>By Mohd Saleem</p>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                                    <p className='text-white'>Comments(5)</p>
                                </div>
                            </div>
                            <p className='mt-[1rem] text-white text-[18px] font-semibold'>
                                Next Js New Features
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="600">
                        <div className='w-[100%] relative h-[400px]'>
                            <Image
                                src="/images/blog1.jpg"
                                alt='blog'
                                layout='fill'
                                objectFit='object-cover'
                            />
                        </div>
                        <div className='w-[90%] text-center mx-auto bg-[#09101a] relative mb-[2rem] mt-[-1rem]'>
                            <div className='w-[fit] px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto'>
                                August 10, 2024
                            </div>
                            <div className='flex flex-col md:flex-row flex-center mt-[1rem] space-x-4'>
                                <div className='flex items-center space-x-3'>
                                    <UserCircleIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                                    <p className='text-white'>By Mohd Saleem</p>
                                </div>
                                <div className='flex items-center space-x-3'>
                                    <ChatBubbleLeftRightIcon className='w-[1.5rem] mx-auto h-[1.5rem] text-[#55e6a5]' />
                                    <p className='text-white'>Comments(8)</p>
                                </div>
                            </div>
                            <p className='mt-[1rem] text-white text-[18px] font-semibold'>
                                Next Js New Features
                            </p>
                        </div>
                    </div>
                </div> */}
                <YoutubeVideo />
            </div>
        </div>
    )
}

export default Blog
