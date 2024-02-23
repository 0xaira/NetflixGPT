import React from 'react'

import tvtab from '../../assets/4.png'
const MainSection3 = () => {
  return (

    <section className='w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py - [100px] py-[50px]'>

      <div className='max-w-[1170px] mx-auto px-[15px]'>
        <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
          <div className='text-white'>
            <h2 className='sm:text-[50px] text-[40px] font-bold'>Watch everywhere</h2>
            <p className=' sm:text-[25px] text-[20px] pt-[30px]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <figure className='relative'>
            <video className='absolute w-[60%] left-[20%] bottom-[40%] z-[1]' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" ></video>
            <img className='relative z-[2]' src={tvtab} alt="" />
          </figure>
        </div>
      </div>

    </section>
  )
}

export default MainSection3