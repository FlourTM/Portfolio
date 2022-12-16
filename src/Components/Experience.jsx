import React from 'react'

const Experience = () => {
    return (
        <div name="Experience" className='w-full h-fit bg-primarycolor'>
            <div className='mx-auto px-8 flex flex-col h-full md:items-center p-40 max-w-screen-sm'>
                <h1 className='pl-3 sm:text-center sm:pl-0'>Experience</h1>
                <p className='text-fontprimary text-2xl font-medium px-3 py-2 sm:text-center sm:px-0'>Languages and software I've worked with:</p>

                {/* Will need to change img src to link for each logo/icon */}
                <p className='text-fontprimary text-2xl pl-3 pb-2 underline underline-offset-4 py-5 sm:text-center sm:px-0 font-semibold'>Web Development & Design</p>
                <div className='pl-3 grid grid-cols-3 gap-3 place-items-start md:gap-x-16 sm:px-0 sm:place-items-center'>
                    <div className='grid items-center'>
                        <img src='../images/html.png' alt='HTML' className='w-24 mx-auto sm:w-32'></img>
                        <p className='text-fontprimary text-l font-medium text-center sm:text-xl'>HTML</p>
                    </div>
                    <div className='grid items-center pl-0'>
                        <img src='../images/css.png' alt='CSS' className='w-24 mx-auto sm:w-32'></img>
                        <p className='text-fontprimary text-l font-medium text-center sm:text-xl'>CSS</p>
                    </div>
                    <div className='grid items-center pl-0'>
                        <img src='../images/js.png' alt='JavaScript' className='w-24 mx-auto sm:w-32'></img>
                        <p className='text-fontprimary text-l font-medium text-center sm:text-xl'>JavaScript</p>
                    </div>
                    <div className='grid items-center pl-0'>
                        <img src='../images/reactjs.png' alt='ReactJS' className='w-24 mx-auto sm:w-32'></img>
                        <p className='text-fontprimary text-l font-medium text-center pl-0 sm:text-xl'>ReactJS</p>
                    </div>
                    <div className='grid items-center pl-0'>
                        <img src='../images/tailwindcss.png' alt='TailwindCSS' className='w-24 mx-auto sm:w-32'></img>
                        <p className='text-fontprimary text-l font-medium text-center pl-0 sm:text-xl'>TailwindCSS</p>
                    </div>
                    <div className='grid items-center pl-0'>
                        <img src='../images/figma.png' alt='Figma' className='w-24 mx-auto sm:w-32'></img>
                        <p className='text-fontprimary text-l font-medium text-center sm:text-xl'>Figma</p>
                    </div>
                </div>

                <p className='text-fontprimary text-2xl pl-3 pb-2 underline underline-offset-4 py-5 sm:text-center sm:px-0 font-semibold'>Other Applications & Languages</p>
                <div className='pl-3 grid grid-cols-3 gap-3 place-items-start md:gap-x-16 sm:px-0 sm:place-items-center'>
                    <div className='grid items-center pl-0'>
                        <img src='../images/c++.png' alt='C++' className='w-24 mx-auto sm:w-32'></img>
                        <p className='text-fontprimary text-l font-medium text-center sm:text-xl'>C++</p>
                    </div>
                    <div className='grid items-center pl-0'>
                        <img src='../images/java.png' alt='Java' className='w-24 mx-auto sm:w-32'></img>
                        <p className='text-fontprimary text-l font-medium text-center sm:text-xl'>Java</p>
                    </div>
                    <div className='grid items-center pl-0'>
                        <img src='../images/unity.png' alt='Unity' className='w-24 mx-auto sm:w-32'></img>
                        <p className='text-fontprimary text-l font-medium text-center sm:text-xl'>Unity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience