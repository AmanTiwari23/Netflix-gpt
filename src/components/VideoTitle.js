import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold w-1/4'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white  p-4 px-12 text-xl text-black rounded-lg hover:bg-opacity-80 '>▶️Play</button>
        <button className='bg-gray-500 mx-2 p-4 px-12 text-xl text-white bg-opacity-50 rounded-lg >More Info</button hover:bg-opacity-90'>More Info</button>
      </div>
    </div>  
  )
}

export default VideoTitle
 