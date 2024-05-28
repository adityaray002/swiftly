import React, { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Signup_user() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobileNo: '',
        vehicleNo: ''   
      });
      const navigate = useNavigate();
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:9090/user/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (response.ok) {
            toast('🦄 Registered Successful!', {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              
              onClose: ()=>{
                console.log()
                navigate('/Login_user');
               
                
              }
              });
           
           
          } else {
            // Handle error
            console.error('Signup failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
  return (
    <>
    <div class="bg-[#FFA500] w-screen min-h-screen relative items-center flex justify-center">
            <div className='w-[28%] h-[70%] bg-[#F6FBF9] absolute rounded-2xl ' >
                <div className='mt-10 text-[30px] font-bold text-[40px]'><p>Create An Account</p></div>
                <form onSubmit={handleSubmit}>
                        <div className='flex flex-col  m-5 mt-[3vh]  items-center '>
                            <input type="text" name="name" required placeholder='Name' className='p-5 w-[80%]'  onChange={handleInputChange}/>

                        </div>
                        <div className='flex flex-col  m-5 mt-[3vh]  items-center'>
                            <input type="email" name="email" required placeholder='Email Address' className='p-5 w-[80%]' onChange={handleInputChange}/>
                        </div>
                        <div className='flex flex-col  m-5 mt-[3vh]  items-center '>
                            <input type="password" name="password" required placeholder='Password' className='p-5 w-[80%]' onChange={handleInputChange}/>

                        </div>
                        <div className='flex flex-col  m-5 mt-[3vh]  items-center '>
                            <input type="tel" name="mobileNo" required placeholder='Mobile Number' className='p-5 w-[80%]' onChange={handleInputChange}/>

                        </div>
                        <div className='flex flex-col  m-5 mt-[3vh]  items-center '>
                            <input type="text" name="vehicleNo" required placeholder='Vehicle Number' className='p-5 w-[80%]' onChange={handleInputChange}/>

                        </div>
                        <div className='mt-[5vh]'>
                        <button type="submit" className=' rounded-md w-[200px] p-4 mb-4 bg-[#FFA500]'> Submit</button>
                        </div>
                </form>
                <div className='mt-[1vh]'><p>Dont't have An Account? <Link to="/Login_user">Sign In</Link></p></div>
            </div>

    </div>
    </>
  )
}

export default Signup_user