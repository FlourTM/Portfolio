import React from 'react'

const Contact = () => {
    return (
        <div name="Contact" className='w-full h-screen bg-primarycolor mx-auto px-8 flex flex-col justify-center'>
            <div className='bg-secondarycolor rounded-xl pb-5 mx-auto sm:w-[620px] lg:w-[720px]'>
                <h1 className='pl-3 sm:text-center sm:pl-0'>Contact</h1>
                <p className='text-fontprimary text-2xl font-medium px-3 py-2 sm:text-center'>Reach me by sending an email using the form below:</p>

                <div className='sm:flex sm:items-center sm:justify-center'>
                    {/* Put form service provider link in action tag */}
                    <form method="POST" action="https://getform.io/f/6bb889ea-462e-447c-9cba-f1e4ca7e46d9" target='_blank' className='grid px-3 text-xl sm:w-[520px] lg:w-[620px]'>
                        <input name="name" type='text' placeholder='Name' className='pl-3 py-2 my-3 bg-formbg border-b-4 border-r-4 border-accentcolor' required></input>
                        <input name="email" type='email' placeholder='Email' className='pl-3 py-2 my-3 bg-formbg border-b-4 border-r-4 border-accentcolor' required></input>
                        <textarea name="message" placeholder='Message' className='pl-3 pt-2 pb-44 sm:pb-20 my-3 bg-formbg border-b-4 border-r-4 border-accentcolor' required></textarea>
                        <div className='flex items-center justify-center'>
                            <button type="submit" className='bg-accentcolor rounded py-3 px-20 mt-4 text-fontprimary text-3xl font-medium sm:px-32 hover:bg-buttonhover'>SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact