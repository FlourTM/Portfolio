import React from 'react'

const Experience = () => {
    return (
        <div name="Experience" className='w-full h-screen'>
            <div className='mx-auto px-8 flex flex-col justify-center h-full md:items-center'>
                <h1 className='pl-3 sm:text-center sm:pl-0'>Experience</h1>
                <p className='text-gray-200 text-2xl font-medium px-3 py-2 sm:text-center sm:px-0'>Languages and software I've worked with:</p>
                
                <p className='text-gray-200 text-2xl pl-3 pb-2 underline underline-offset-4 py-8 sm:text-center sm:px-0'>Web Development</p>
                <div className='grid grid-flow-col gap-3 pl-3 pr-5 overflow-x-auto sm:gap-8 sm:px-0'>
                    <div className='w-28'>
                        <img src='../images/square.png' alt='square1'></img>
                        <p className='text-gray-200 text-xl font-medium text-center'>HTML</p>
                    </div>
                    <div className='w-28'>
                        <img src='../images/square.png' alt='square2'></img>
                        <p className='text-gray-200 text-xl font-medium text-center'>CSS</p>
                    </div>
                    <div className='w-28'>
                        <img src='../images/square.png' alt='square3'></img>
                        <p className='text-gray-200 text-xl font-medium text-center'>PHP</p>
                    </div>
                    <div className='w-28'>
                        <img src='../images/square.png' alt='square4'></img>
                        <p className='text-gray-200 text-xl font-medium text-center'>JavaScript</p>
                    </div>
                    <div className='w-28'>
                        <img src='../images/square.png' alt='square5'></img>
                        <p className='text-gray-200 text-xl font-medium text-center'>ReactJS</p>
                    </div>
                    <div className='w-28'>
                        <img src='../images/square.png' alt='square6'></img>
                        <p className='text-gray-200 text-xl font-medium text-center'>TailwindCSS</p>
                    </div>
                </div>

                <p className='text-gray-200 text-2xl pl-3 pb-2 underline underline-offset-4 py-8 sm:text-center sm:px-0'>Design</p>
                <div className='grid grid-flow-col gap-3 pl-3 pr-5 overflow-x-auto sm:px-0 sm:place-items-center md:gap-8'>
                    <div className='w-28'>
                        <img src='../images/square.png' alt='square1'></img>
                        <p className='text-gray-200 text-xl font-medium text-center'>HTML</p>
                    </div>
                    <div className='w-28'>
                        <img src='../images/square.png' alt='square2'></img>
                        <p className='text-gray-200 text-xl font-medium text-center'>CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience