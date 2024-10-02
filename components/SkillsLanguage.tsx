import React from 'react'
interface Props {
    skils1: string
    skils2: string
    skils3: string
    skils4: string
    level1: string
    level2: string
    level3: string
    level4: string
}
const SkillsLanguage = ({ skils1, skils2, skils3, skils4, level1, level2, level3, level4 }: Props) => {
    return (
        <div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    {skils1}
                </h1>
                <span className={`${level1} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    {skils2}
                </h1>
                <span className={`${level2} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    {skils3}
                </h1>
                <span className={`${level3} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
            <div className='relative mb-[3rem]'>
                <h1 className='p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold'>
                    {skils4}
                </h1>
                <span className={`${level4} bottom-0 h-[6px] absolute bg-[#55e6a5]`}></span>
            </div>
        </div>
    )
}

export default SkillsLanguage
