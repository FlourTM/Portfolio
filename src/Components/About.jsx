import React, { useState } from 'react'
import { FaGithub, FaEtsy } from 'react-icons/fa'

const About = () => {
    const [overGit, setOverGit] = useState(false);
    const [overEtsy, setOverEtsy] = useState(false);

    return (
        <div name="About" className='w-full h-screen bg-primarycolor'>
            <div className='mx-auto px-8 flex flex-col justify-center h-full'>
                <div className='bg-secondarycolor rounded-xl py-5 mx-auto 2xl:w-[1320px]'>
                    <h1 className='pl-3 sm:text-center sm:pl-0'>About</h1>
                    <h2 className='text-fontprimary font-medium text-4xl text-left px-3 pt-3 sm:text-center sm:px-32 lg:px-52'>Hi, I'm Gaby. Here's some little tidbits about me!</h2>
                    <p className='text-fontbody font-medium text-2xl px-3 pt-8 pb-4 sm:text-center md:px-24 xl:px-80'>I'm a full-time student who is interested in front-end development, game development, 
                    graphic design, and creating new things. I spend most of my time trying to learn new skills, running a small shop on Etsy, and hanging out with my dog!</p>
                    <div className='sm:grid sm:grid-flow-col sm:justify-center sm:gap-5'>
                        <form action='http://www.FlourTM.com/' target='_blank'>
                            <button type="submit"
                            onMouseOver={() => setOverGit(true)}
                            onMouseLeave={() => setOverGit(false)}
                                class='rounded py-3 px-8 text-accentcolor text-3xl font-medium flex items-center gap-2
                                hover:text-fontprimary'>
                                <FaGithub size='1.5em' color="rgb(201 101 103)" style={overGit ? {color: "#d5d5d5"} : {}} />
                                GitHub
                            </button>
                        </form>
                        <form action='http://www.BorderlineBee.com/' target='_blank'>
                            <button type="submit"
                            onMouseOver={() => setOverEtsy(true)}
                            onMouseLeave={() => setOverEtsy(false)}
                                className='rounded py-3 px-8 text-accentcolor text-3xl font-medium flex items-center gap-2
                                hover:text-fontprimary'>
                                <FaEtsy size='1.5em' color="rgb(201 101 103)" style={overEtsy ? {color: "#d5d5d5"} : {}} />
                                Etsy
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About