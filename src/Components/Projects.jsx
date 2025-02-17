import React from 'react'

const Projects = () => {
    return (
        <div name="Projects" className='w-full h-screen bg-primarycolor'>
            <div className='mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='pl-3 sm:text-center sm:pl-0'>Projects</h1>
                <p className='text-fontprimary text-2xl font-medium px-3 py-2 sm:text-center sm:px-0'>Here are some projects I've worked on:</p>

                {/* Will need to include project link in form action */}
                <div className='grid grid-flow-col gap-3 overflow-x-auto sm:gap-8 sm:px-0 md:justify-center'>
                    <form action='https://github.com/FlourTM/Best-Pets' target='_blank'>
                        <div class="w-[324px] h-[324px] border-accentcolor border-4 px-4 py-4 flex flex-col bg-secondarycolor">
                            <p className='text-fontprimary text-2xl font-medium'>Best Pets</p>
                            <p className='text-fontbody font-medium text-m py-3'>An adoption agency website application for a Human Computer Interaction course project. It features available
                            pets for adoption, a pet cost calculator, along with the ability to register, log-in, change account details, save/remove pets from a list, and leave feedback.</p>
                            <div className='mt-auto ml-auto'>
                                <button type="submit" className='bg-accentcolor rounded py-1 px-5 text-fontprimary text-xl font-medium hover:bg-buttonhover'>VIEW</button>
                            </div>
                        </div>
                    </form>

                    <form action='https://github.com/CodeBlockStudios/Portfolio-Template' target='_blank'>
                        <div class="w-[324px] h-[324px] border-accentcolor border-4 px-4 py-4 flex flex-col bg-secondarycolor">
                            <p className='text-fontprimary text-2xl font-medium'>Portfolio Template</p>
                            <p className='text-fontbody font-medium text-m py-3'>A portfolio template that allows the user to show off key details about themselves, such as languages and applications
                            they have experience in, projects they've completed, display their resume, and have a contact form.</p>
                            <div className='mt-auto ml-auto'>
                                <button type="submit" className='bg-accentcolor rounded py-1 px-5 text-fontprimary text-xl font-medium hover:bg-buttonhover'>VIEW</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Projects