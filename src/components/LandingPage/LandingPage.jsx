import React from 'react'
import LandingPageHeader from './LandingPageHeader'
import LandingPageFooter from './LandingPageFooter'
import LandingPageBody from './LandingPageBody'
const LandingPage = () => {
  return (
    <>
    <div className='bg-black'>
    <LandingPageHeader/>
    <LandingPageBody/>
    <LandingPageFooter/>
    </div>
    </>
  )
}

export default LandingPage