import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {
    const navigate = useNavigate();
  return (
    <div className=''>
        <div className='bg-Home bg-no-repeat bg-cover bg-center bg-fixed w-screen min-h-screen relative '>
            <div className=''>
                    <div className='absolute  mt-[5%] ms-[6%]'> 
                        <div className='heading  font-bold text-left text-white'><p className='text-[150px]'>SWIFTLY</p> </div>
                        <div className='subHeading text-[#E56E1A]   text-left mt-[5%]'>
                            <div className='w-[55%]'> <p className='text-[60px] text-[#E56E1A] font-bold font-customFont'>Hand over your keys get space with ease </p></div>
                        
                        </div>
                        <div className='   text-left mt-[10%]'> <button className='w-[10vw] h-[6vh] bg-[#FFA500] rounded-2xl ' onClick={() => navigate("/Login_signup_dashboard")}><p  className='font-extrabold  text-xl text-white'>BOOK NOW</p></button></div>
                    </div>
            </div>
           


        </div>
        
    </div>
  )
}

export default Home