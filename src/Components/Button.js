import React from 'react'

const Contact = (properties) => {
  return (
    <button
        className='bg-orange-700 text-gray-200 py-2 px-6 
        rounded md:ml-8 hover:bg-orange-800 duration-200 text-xl'>
            
        {properties.children}
    </button>
  )
}

export default Contact