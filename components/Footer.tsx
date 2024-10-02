import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Footer = () => {
    return (
        <div className='pt-[8rem] pb-[4rem] bg-[#02050a]'>
            <div className='grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]'>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]'>
                        <MapIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>Address</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>
                            Sector 52, Noida, <br /> Uttar Pradesh 201307
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] p-[1.5rem]'>
                        <DevicePhoneMobileIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>Mobile</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>
                            <a href="https://wa.me/+917651845464" target='_blank' rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                [+917651845464 <br />
                                (Whatsapp)]
                            </a> <br />
                            <a href="tel:+919838302220" className="hover:text-yellow-400 transition-colors duration-300">
                                +919838302220
                            </a>
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5] p-[1.5rem]'>
                        <EnvelopeIcon className='md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black' />
                    </div>
                    <div>
                        <h1 className='text-[25px] mb-[0.2rem] font-semibold text-[white]'>Send Us Email</h1>
                        <p className='text-[17px] w-[90%] text-white opacity-60'>
                            <a href="mailto:saleem30051999@gmail.com" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                saleem30051999 <br />@gmail.com
                            </a>
                            <br />
                            <a href="mailto:sheikhsaleem273301@gmail.com" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors duration-300">
                                sheikhsaleem273301 <br />@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mt-[2rem] mx-auto item-center justify-between'>
                <div className='text-[16px] mb-[2rem] md:mb-0 text-white opacity-20'>
                    Webdev with Saleem 2024 | All Rights Reserved
                </div>
                <div className='flex items-center space-x-10'>
                    <p className='text-[16px] text-white opacity-20'>Terms & Conditions</p>
                    <p className='text-[16px] text-white opacity-20'>Privacy Policy</p>
                    <p className='text-[16px] text-white opacity-20'>Sitemap</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
