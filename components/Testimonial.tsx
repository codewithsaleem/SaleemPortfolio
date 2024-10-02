import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
    return (
        <div className='bg-[#121121] pt-[4rem] md:pt-[8rem]'>
            <div className='w-[80%] mx-auto gap-[3rem] items-center'>
                <h1 className='text-[40px] font-bold uppercase text-[#ffffff] text-center'>
                    Client <span className='text-yellow-400'>Review</span>
                </h1>
                <div className='pt-[5rem] pb-[4rem] mx-auto' >
                    <TestimonialSlider />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
