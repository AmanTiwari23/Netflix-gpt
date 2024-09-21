import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-lg md:text-5xl font-bold w-1/4'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-2 md:m-0'>
        <button className='bg-white py-1 md:py-4 px-2 md:px-12 text-lg md:text-xl text-black rounded-lg hover:bg-opacity-80 '>▶️Play</button>
        <button className='hidden md:inline-block bg-gray-500 mx-2 p-4 px-12 text-xl text-white bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>  
  )
}

export default VideoTitle;
 