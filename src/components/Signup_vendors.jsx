import React, { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup_vendors() {
  const [formData, setFormData] = useState({
    vName: '',
    email: '',
    password: '',
    mobileNo: '',
    address: '',
    total: '',
    price: '',
    startTime: '',
    endTime: ''
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
      const response = await fetch('http://localhost:9090/vendor/register', {
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
            navigate('/Login_vendor');
           
            
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
      <div className='relative bg-[#FFA500] max-w-1280px h-screen  flex justify-center items-center z-0'>
        <div className='absolute w-[1600px] h-[980px] bg-[#F5F2F0] rounded-3xl  mt-[-5%]'>
          <h2 className='font-bold mt-[4%]  text-[40px]'>Create An Account</h2>
          <form onSubmit={handleSubmit}>
            <div className='inputs flex justify-center items-center justify-evenly mt-[70px]'>
              <div className='inputleft flex flex-col gap-12 '>
                <input type="text" name="vName" placeholder='Name' required className='w-[600px] rounded-xl p-6 border-[#FFA500] border-2' onChange={handleInputChange} />
                <input type="email" name="email" placeholder='Email Address' className='w-[600px] rounded-xl p-6 border-[#FFA500] border-2' onChange={handleInputChange} />
                <input type="password" name="password" placeholder='Password' className='w-[600px] rounded-xl p-6 border-[#FFA500] border-2' onChange={handleInputChange} />
                <input type="tel" name="mobileNo" placeholder='Mobile Number' className='w-[600px] rounded-xl p-6  border-[#FFA500] border-2' onChange={handleInputChange} />
                <input type="text" name="address" placeholder='Address' className='w-[600px] rounded-xl p-6 border-[#FFA500] border-2' onChange={handleInputChange} />
              </div>
              <div className='inputright flex flex-col gap-12'>
                <input type="number" name="total" placeholder='Number of slots' className='w-[500px] rounded-xl p-6 border-[#FFA500] border-2' onChange={handleInputChange} />
                <input type="number" name="price" placeholder='per hr slot' className='w-[500px] rounded-xl p-6 border-[#FFA500] border-2' onChange={handleInputChange} />
                <div className='flex gap-[100px]'>
                  <input type="number" name="startTime" placeholder='Start time' className='w-[200px] rounded-xl p-6 border-[#FFA500] border-2' value={formData.startTime} onChange={handleInputChange} />
                  <input type="number" name="endTime" placeholder='End Time' className='w-[200px] rounded-xl p-6 border-[#FFA500] border-2' value={formData.endTime} onChange={handleInputChange} />
                </div>
              </div>
            </div>
            <div className='submit mt-10 '>
              <button type="submit" className='bg-[#FFA500] rounded-3xl w-[250px] p-6 mt-5 text-white font-bold text-4xl' > Submit</button>
              <p className='text-xl mt-5'>Already Have an Account ? <Link to="/Login_vendor">Sign In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup_vendors;
