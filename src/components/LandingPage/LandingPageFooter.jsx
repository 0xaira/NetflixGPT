import React from 'react';

const LandingPageFooter = () => {
  return (
    <footer className='w-[100%] bg-black border-t-[8px] border-t-[#605d5d] sm:py - [100px] py-[50px]'>
      <div className='max-w-[1170px] mx-auto px-[15px]'>
        <h3 className='text-[#ccc] text-[18px]'>Question? Call <a href="tel:000-800-919-1694">000-800-919-1694</a></h3>
        <div className='py-[30px] grid sm:grid-cols-4 grid-cols-1'>
          <div>
            <ul className='text-[#ccc]'>
              <li className='mb-[10px]'><a className='underline' href="#">Faq</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Investor Relations</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Privacy</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Speed Test</a></li>
            </ul>
          </div>

          <div>
            <ul className='text-[#ccc]'>
              <li className='mb-[10px]'><a className='underline' href="#">Help Centre</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Jobs</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Cookie Preferences</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Legal Norices</a></li>
            </ul>
          </div>

          <div>
            <ul className='text-[#ccc]'>
              <li className='mb-[10px]'><a className='underline' href="#">Accounts</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Ways to Watch</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Corporate Information</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Only on Netflix</a></li>
            </ul>
          </div>

          <div>
            <ul className='text-[#ccc]'>
              <li className='mb-[10px]'><a className='underline' href="#">Media Centre</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Terms of Use</a></li>
              <li className='mb-[10px]'><a className='underline' href="#">Contact Us</a></li>

            </ul>
          </div>
        </div>
        <div>
          <div className='relative flex items-center mt-[1px]  '>

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
          <h3 className='text-[#ccc] mt-4'>Netflix India</h3>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;
