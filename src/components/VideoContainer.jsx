import React from 'react'

const VideoContainer = () => {
  return (
    <div className='lg:pt-8'>
        <h1 className='text-center text-red-900 font-bold text-2xl'>Shop Introduction</h1>

        <div className='py-4'>
            <video
            className='rounded-lg w-full h-96 lg:h-120 object-cover'
            controls
            autoPlay
            loop
            muted
            src="https://res.cloudinary.com/drk7m7qcx/video/upload/v1762913309/sneaker_intro_caki7t.mp4"
            />
        </div>
    </div>
  )
}

export default VideoContainer