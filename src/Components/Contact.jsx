import React from 'react'

const Contact = () => {
    return (
        <div name="Contact" className='w-full h-screen bg-primarycolor mx-auto px-8 flex flex-col justify-center'>
            <h1 className='pl-3 sm:text-center sm:pl-0'>Contact</h1>
            <p className='text-fontprimary text-2xl font-medium px-3 py-2 sm:text-center'>Reach me by sending an email using the form below:</p>

            <div className='sm:flex sm:items-center sm:justify-center'>
                <form className='grid px-3 text-xl sm:w-[520px] lg:w-[620px]'>
                    <input type='text' placeholder='Name' className='pl-3 py-2 my-3'></input>
                    <input type='email' placeholder='Email' className='pl-3 py-2 my-3'></input>
                    <input type='text' placeholder='Message' className='pl-3 pt-2 pb-44 my-3'></input>
                    <div className='flex items-center justify-center'>
                        <button type="submit" className='bg-secondarycolor rounded py-3 px-20 mt-4 text-fontprimary text-3xl font-medium sm:px-32'>SEND</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact