import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-screen'>
            <div className='mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='pl-3 sm:text-center sm:pl-0'>About</h1>
                <h2 className='text-gray-200 font-medium text-4xl text-left px-3 pt-3 sm:text-center sm:px-32 lg:px-52'>Hi, I'm Name. Nice to meet you. Please take a look around!</h2>
                <p className='text-gray-500 font-medium text-2xl px-3 py-8 sm:text-center sm:px-24 lg:px-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam provident, illo magnam nemo ea, quo iure,
                    cumque consequuntur eaque esse architecto iusto vitae in harum! Totam sint soluta necessitatibus!</p>
            </div>
        </div>
    )
}

export default About