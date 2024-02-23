import React from 'react'

import kids from '../../assets/kids.png'
const MainSection4 = () => {
  return (

    <section className='w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py - [100px] py-[50px]'>

      <div className='max-w-[1170px] mx-auto px-[15px]'>
        <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
        <figure className='relative sm:order-1 order-2'>
            
            <img className='' src={kids} alt="" />
          </figure>
          <div className='text-white sm:order-2 order-1'>
            <h2 className='sm:text-[50px] text-[40px] font-bold'>Create profiles for kids</h2>
            <p className=' sm:text-[25px] text-[20px] pt-[30px]'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default MainSection4