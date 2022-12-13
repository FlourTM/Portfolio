import React from 'react'

const Mainpage = () => {
  return (
    <div name="Home" className='w-full h-screen'>
      <div className='mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-orange-700 text-2xl text-left pl-3 pb-4 sm:pr-72 sm:text-center'>Hi, my name is</p>
        <h2 className='text-gray-200 font-bold text-5xl text-right px-3 sm:text-center'>Full Name</h2>
        <h3 className='text-gray-400 font-bold text-3xl text-right px-3 pt-4 sm:text-center'>Occupation/Major</h3>
        <p className='text-gray-500 font-medium text-2xl px-3 py-8 sm:text-center sm:px-24 lg:px-80'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veniam provident, illo magnam nemo ea, quo iure,
          cumque consequuntur eaque esse architecto iusto vitae in harum! Totam sint soluta necessitatibus!</p>
        <div className='flex items-center justify-center'>
          <button type="submit" className='border-4 border-orange-700 rounded py-3 px-12 text-orange-700 text-3xl font-medium'>VIEW RESUME</button>
        </div>
      </div>
    </div>
  )
}

export default Mainpage