import React from 'react'

const Mainpage = () => {
  return (
    <>
      {/* Home */}
    <div className='grid gap-40 mt-12'>
      <div className='my-20'>
        <p className='text-orange-700 text-2xl text-right pr-52 pb-2 md:pr-72 md:text-center'>Hi, my name is</p>
        <h2 className='text-gray-200 font-bold text-5xl text-right px-7 md:text-center'>Full Name</h2>
        <h3 className='text-gray-400 font-bold text-3xl text-right px-7 pt-2 md:text-center'>Occupation/Major</h3>
        <p className='text-gray-500 font-medium text-2xl px-7 py-6 md:text-center md:px-52'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam provident, illo magnam nemo ea, quo iure,
          cumque consequuntur eaque esse architecto iusto vitae in harum! Totam sint soluta necessitatibus!</p>
        <div className='flex items-center justify-center'>
          <button type="submit" className='border-4 border-orange-700 rounded py-3 px-16 text-orange-700 text-3xl font-medium'>VIEW RESUME</button>
        </div>
      </div>

      {/* About */}
      <div className='my-20'>
        <h1 className='md:text-center md:pl-0'>About</h1>
        <h2 className='text-gray-200 font-medium text-4xl text-left px-7 pt-3 md:text-center md:px-52'>Hi, I'm Name. Nice to meet you. Please take a look around!</h2>
        <p className='text-gray-500 font-medium text-2xl pl-7 py-6 md:text-center md:px-52'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam provident, illo magnam nemo ea, quo iure,
          cumque consequuntur eaque esse architecto iusto vitae in harum! Totam sint soluta necessitatibus!</p>
      </div>

      {/* Experience */}
      <div className= 'my-20'>
        <h1 className='md:text-center md:pl-0'>Experience</h1>
        <p className='text-gray-200 text-2xl font-medium pl-7 py-2 md:text-center'>Languages and software I've worked with:</p>
        <p className='text-gray-200 text-2xl pl-7 pb-2 underline underline-offset-4 py-8 md:text-center'>Web Development</p>
        <p className='text-gray-200 text-2xl pl-7 pb-2 underline underline-offset-4 py-8 md:text-center'>Design</p>
      </div>

      {/* Projects */}
      <div className= 'my-20'>
        <h1 className='md:text-center md:pl-0'>Projects</h1>
        <p className='text-gray-200 text-2xl font-medium pl-7 py-2 md:text-center'>Here are some projects I've worked on:</p>
      </div>

      {/* Contact */}
      <div className= 'my-20'>
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
    </div>
    </>
  )
}

export default Mainpage