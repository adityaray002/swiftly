import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Login_signup_dashboard() {
  const navigate = useNavigate();
  return (
    <div className='w-full   flex min-h-screen'>
      <div className='left w-[50%]  inset-y-0 right-0  bg-[#FFA500] '>
        <div className='wrapper  text-right '>
            <div className='heading text-6xl font-bold mt-[15%] w-[400px]  ms-[60%] text-white'><p>For Users</p></div>
              <div className='subheading text-[40px] font-normal w-[390px]  text-right mt-[6%] mb-[8%] leading-loose ms-[60%]'>
                <p>Worried about 
                    parking space  ?
                   <span className='font-bold'>Secure</span> your spot 
                </p>
              </div>
              <div className='w-[400px] ms-[53%] '> <button className='w-[10vw] h-[6vh] bg-white rounded-2xl mt-1  ms-[50%]'onClick={() => navigate("/Login_user")}><p  className='font-bold  text-3xl text-[#FFA500]'>login</p></button></div>
             
            <div className='text mt-10 text-2xl w-[400px] ms-[59%] font-light'><p>Don't have an account ? <Link to="/Signupuser">Signup</Link></p></div>
          </div>
      </div>
      <div className='right w-[50%]'>
        <div className='wrapper    '>
              <div className='heading text-6xl font-bold mt-[15%] w-[400px]   text-[#FFA500] ms-[8%]'><p>For Vendors</p></div>
                <div className='subheading text-[40px] font-normal w-[390px] text-left  mt-[6%] mb-[8%] leading-loose  ms-[10%]'>
                  <p>List your space,
                    boost your revenue 
                    We <span className='font-bold'>handle</span> the rest !!
                  </p>
                </div>
                <div className='w-[400px]  ms-[6%]'> <button className='w-[10vw] h-[6vh] bg-[#FFA500] rounded-2xl mt-1 'onClick={() => navigate("/Login_vendor")}><p  className='font-bold  text-3xl text-white'>login</p></button></div>
              
              <div className='text mt-10 text-2xl w-[400px]  font-light  text-left ms-[10%]'><p>Don't have an account ? <Link to="/Signupvendor">Signup</Link></p></div>
          </div>


      </div>
    </div>
  )
}

export default Login_signup_dashboard