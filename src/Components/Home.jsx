import React from 'react'

const Mainpage = () => {
  return (
    <>
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
    </>
  )
}

export default Mainpage