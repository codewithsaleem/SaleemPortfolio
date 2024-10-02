import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
    return (
        <div className='pt-[4rem] md:pt-[6rem] pb-[5rem] bg-[#050505]'>
            <div className='w-[80%] mx-auto gap-[3rem] items-center'>
                <h1 className='text-[40px] font-bold uppercase text-[#ffffff] text-center'>
                    Education & <span className='text-yellow-400'>Skill</span>
                </h1>
                <div className='w-[100%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]'>
                    <div>
                        <SkillsItem
                            title="React Js Developer"
                            year="2022 - 2024"
                            text="With React, I turn ideas into interactive realities, where every click tells a story and every render brings a vision to life."
                        />
                        <SkillsItem
                            title="MERN Stack Developer"
                            year="2022 - 2024"
                            text="With the MERN stack, I weave together MongoDB, Express, React, and Node to create seamless full-stack applications that delight users."
                        />
                        <SkillsLanguage
                            skils1="HTML"
                            skils2="CSS"
                            skils3="JavaScript"
                            skils4="Node Js"
                            level1="w-[91%]"
                            level2="w-[88%]"
                            level3="w-[88%]"
                            level4="w-[92%]"
                        />
                    </div>
                    <div>
                        <SkillsItem
                            title="Next Js Developer"
                            year="2023 - 2024"
                            text="Next.js transforms the web development landscape, allowing me to build fast, SEO-friendly applications with ease and elegance."
                        />
                        <SkillsItem
                            title="Node Js Developer"
                            year="2022 - 2024"
                            text="With Node.js, I harness the power of JavaScript on the server side, building scalable applications that handle real-time data effortlessly."
                        />
                        <SkillsLanguage
                            skils1="React Js"
                            skils2="Next Js"
                            skils3="TypeScript"
                            skils4="MongoDB"
                            level1="w-[92%]"
                            level2="w-[80%]"
                            level3="w-[75%]"
                            level4="w-[90%]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
