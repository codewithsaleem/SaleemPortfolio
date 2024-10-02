import React from 'react';
import Particle from './particle';
import TextEffect from './textEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Home = () => {
    const handlePDF = () => {
        const pdfPath = '/pdf/Saleem Resume.pdf'; // Your PDF file path
        window.open(pdfPath, '_blank');
    };

    return (
        <div className="bg-[url('/images/banner.jpg')] bg-cover bg-center pb-[5rem] pt-[6rem] md:pt-[8rem]">
            <Particle />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] mt-[2rem] md:text-[50px] text-white font-bold'>
                        HI, I'M <span className='text-yellow-400'>MOHD SALEEM!</span>
                    </h1>
                    <TextEffect />
                    <p className='mt-[2rem] text-[18px] text-[#ffffff92]'>
                        API developer and MERN expert, creating fast and reliable web services for great apps.
                        MERN developer with a focus on APIs, building smooth and efficient web applications.
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration:200 py-[1rem] text-[18px] 
                            font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2' onClick={() => handlePDF()}>
                            <p>
                                Download Cv
                            </p>
                            <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                        </button>
                        <Link href="#blog" className="">
                            <button className='flex items-center space-x-2'>
                                <PlayCircleIcon className='w-[3rem] h-[3rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]' />
                                <p className='text-[20px] font-semibold text-white hover:text-yellow-400'>
                                    Watch The Video
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='lg:ml-[8rem] bg-[#55e6a5] lg:flex items-center rounded-full lg:w-[400px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[400px] w-[300px] h-[300px] relative'>
                    <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Home;
