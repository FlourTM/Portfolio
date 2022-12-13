import React from 'react'

const Contact = () => {
    return (
        <div className='my-20'>
            <h1 className='md:text-center md:pl-0'>Contact</h1>
            <p className='text-gray-200 text-2xl font-medium pl-7 py-2 md:text-center'>Reach me by sending an email using the form below:</p>

            <form className='grid px-7 text-xl md:px-40'>
                <input type='text' placeholder='Name' className='pl-3 py-2 my-3'></input>
                <input type='email' placeholder='Email' className='pl-3 py-2 my-3'></input>
                <input type='text' placeholder='Message' className='pl-3 pt-2 pb-44 my-3'></input>
                <div className='flex items-center justify-center'>
                    <button type="submit" className='bg-orange-700 rounded py-3 px-20 mt-3 mb-12 text-gray-200 text-3xl font-medium md:px-32'>SEND</button>
                </div>
            </form>
        </div>
    )
}

export default Contact