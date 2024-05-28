import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Login_vendor() {
  return (
    <div class="bg-[#FFA500] w-screen min-h-screen relative items-center flex justify-center">
            <div className='w-[28%] h-[70%] bg-[#F6FBF9] absolute rounded-2xl ' >
                <div className='mt-10 text-[30px] font-bold text-[40px]'><p>Login</p></div>
                <div className='flex flex-col  m-5 mt-[10vh]  items-center '>
                    <input type="email" name="email" placeholder='Email Address' className='p-5 w-[80%]' />

                </div>
                <div className='flex flex-col  m-5 mt-[5vh]  items-center'>
                    <input type="password" name="password" placeholder='Password' className='p-5 w-[80%]' />
                </div>
                <div className='mt-[15vh]'>
                <button type="submit" className=' rounded-md w-[200px] p-4 mb-4 bg-[#FFA500]' > Submit</button>
                </div>
                <div className='mt-[3vh]'><p>Dont't have An Account? <Link to="/Signupvendor">Sign up</Link></p></div>
            </div>

    </div>
  )
}

export default Login_vendor