import React from 'react'

const Projects = () => {
    return (
        <div name="Projects" className='w-full h-screen bg-primarycolor'>
            <div className='mx-auto px-8 flex flex-col justify-center h-full'>
                <h1 className='pl-3 sm:text-center sm:pl-0'>Projects</h1>
                <p className='text-fontprimary text-2xl font-medium px-3 py-2 sm:text-center sm:px-0'>Here are some projects I've worked on:</p>
            
                <div className='grid grid-flow-col gap-3 px-3 overflow-x-auto sm:gap-8 sm:px-0'>
                    <div class="bg-[url('../public/images/square.png')] bg-no-repeat 
                    bg-cover bg-center w-[324px] h-[324px] px-4 py-4 flex flex-col">
                        <p className='text-fontprimary text-2xl font-medium'>Project Name</p>
                        <p className='text-fontbody text-m py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam provident, illo magnam nemo ea, quo iure,
                            cumque consequuntur eaque esse architecto iusto vitae in harum! Totam sint soluta necessitatibus!</p>
                        <div className='mt-auto ml-auto'>
                            <button type="submit" className='bg-secondarycolor rounded py-1 px-5 mt-4 text-fontprimary text-xl font-medium sm:px-32'>VIEW</button>
                        </div>
                    </div>

                    <div class="bg-[url('../public/images/square.png')] bg-no-repeat 
                    bg-cover bg-center w-[324px] h-[324px] px-4 py-4 flex flex-col">
                        <p className='text-fontprimary text-2xl font-medium'>Project Name</p>
                        <p className='text-fontbody text-m py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam provident, illo magnam nemo ea, quo iure,
                            cumque consequuntur eaque esse architecto iusto vitae in harum! Totam sint soluta necessitatibus!</p>
                        <div className='mt-auto ml-auto'>
                            <button type="submit" className='bg-secondarycolor rounded py-1 px-5 mt-4 text-fontprimary text-xl font-medium sm:px-32'>VIEW</button>
                        </div>
                    </div>
                    
                    <div class="bg-[url('../public/images/square.png')] bg-no-repeat 
                    bg-cover bg-center w-[324px] h-[324px] px-4 py-4 flex flex-col">
                        <p className='text-fontprimary text-2xl font-medium'>Project Name</p>
                        <p className='text-fontbody text-m py-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam provident, illo magnam nemo ea, quo iure,
                            cumque consequuntur eaque esse architecto iusto vitae in harum! Totam sint soluta necessitatibus!</p>
                        <div className='mt-auto ml-auto'>
                            <button type="submit" className='bg-secondarycolor rounded py-1 px-5 mt-4 text-fontprimary text-xl font-medium sm:px-32'>VIEW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects