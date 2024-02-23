import React from 'react'
import background from '../../assets/background.jpg'
import gptlogo from '../../assets/gptlogo.png'
import { Link } from 'react-router-dom';

const LandingPageHeader = () => {
  return (
    <div>

      <section
        className="w-[100%] h-[100vh] bg-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}
      >
        <div className='w-full h-screen bg-[rgba(0,0,0,0.5)]'>
          <header className='max-w-[1170px] mx-auto'>
            <div className=' grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center'>
              <figure>
                <img src={gptlogo} className='w-[250px] mt-6' />
              </figure>
              <div className='flex justify-end gap-[20px] '>
                <div className='relative flex items-center mt-4  '>

                  <svg
                    className='absolute left-2 top-[50%] transform -translate-y-1/2'
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                      fill="white"
                    ></path>
                  </svg>

                  <select
                    name=""
                    id=""
                    className='bg-[black] text-white border-[2px] border-[white] sm:p-[5px_25px] p-[5px_20px] rounded-[5px]'
                  >
                    <option value="">English</option>
                    <option value="">हिन्दी</option>
                  </select>

                </div>


                <Link to="/login">
                  <button className="bg-red-600 px-3 rounded h-8 text-white mt-4 ">
                    Sign In
                  </button>
                </Link>

              </div>
            </div>
          </header>

          <div className='max-w-[1170px] mx-auto sm:py-[150px] py-[150px] text-center text-white  '>
            <h1 className='sm:text-[50px] text-[35px] font-bold '>Enjoy big movies, hit series and more from ₹149.</h1>
            <h4 className='text-[25px] py-[20px]'>Join today. Cancel anytime.</h4>
            <h5 className='text-[25px] '>Ready to watch? Enter your email to create or restart your membership.</h5>
            <Link to="/login">
            <button className="bg-red-600 p-3 rounded font-bold ml-5 w-60 max-[960px]:w-40 max-[480px]:mt-[30px] mt-12">
              <p className="mx-auto text-2xl max-[960px]:text-xl"><label htmlFor="email">Get Started {'>'}</label></p>
            </button>
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}

export default LandingPageHeader


