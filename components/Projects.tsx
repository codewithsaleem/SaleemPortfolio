import Image from 'next/image'
import React from 'react'

const Projects = () => {
    return (
        <div className='bg-[#121212] pt-[2rem] md:pt-[4rem] pb-[3rem]'>
            <div className='w-[80%] mx-auto gap-[3rem] items-center'>
                <h1 className='text-[40px] font-bold uppercase text-[#ffffff] text-center'>
                    Pro <span className='text-yellow-400'>Jects</span>
                </h1>
                <div className='w-[100%] mx-auto pt-[1rem] md:pt-[3rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem]'>
                    <div data-aos="fade-up">
                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                            <Image
                                src="/images/p1.jpg"
                                alt="portfolio"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                            <Image
                                src="/images/p2.jpg"
                                alt="portfolio"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600">
                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                            <Image
                                src="/images/p3.jpg"
                                alt="portfolio"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="800">
                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                            <Image
                                src="/images/p4.jpg"
                                alt="portfolio"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1000">
                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                            <Image
                                src="/images/p5.jpg"
                                alt="portfolio"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1300">
                        <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                            <Image
                                src="/images/p1.jpg"
                                alt="portfolio"
                                layout="fill"
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
