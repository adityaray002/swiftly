import React, { useEffect,useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login_user() {




    const [formData, setFormData] = useState({ 
        email: '',
        password: ''   
      });
      const navigate = useNavigate();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
          
        });
        console.log(name);
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
          // console.log(formData);
          let response = await fetch('http://localhost:9090/user/authenticateUsers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)

          });
      
          let resp=await response.json()
          console.log(resp.data);
          if (resp.data==="Authenticated User") {
            localStorage.setItem("userEmail",formData.email);
            // Handle successful response
            toast('🦄 Login Successfull!', {
              position: "top-center",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              onClose: () => {
                navigate('/getvendors');
              }
            });
          } else if(resp.data==="Incorrect Password") {
            // Handle unsuccessful response
            // const errorData = await response.json();
            // console.error('Login failed:', errorData.message);
            toast.error('Incorrect Password. Please try again.', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
            });
          }else{
            // const errorData = await response.json();
            // console.error('Login failed:', errorData.message);
            toast.error('No user is not found for this email!!!', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light"
            });
          }
        } catch (error) {
          // Handle fetch error
          console.error('Error:', error);
          toast.error('An error occurred. Please try again later.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
          });
        }
      };
      
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div class="bg-[#FFA500] w-screen min-h-screen relative items-center flex justify-center">
    
    <div className='w-[28%] h-[70%] bg-[#F6FBF9] absolute rounded-2xl ' >
        <div className='mt-10 text-[30px] font-bold text-[40px]'><p>Login</p></div>
        <div className='flex flex-col  m-5 mt-[10vh]  items-center '>
            <input type="email" name="email" placeholder='Email Address'required className='p-5 w-[80%]' onChange={handleInputChange}/>

        </div>
        <div className='flex flex-col  m-5 mt-[5vh]  items-center'>
            <input type="password" name="password" placeholder='Password'required className='p-5 w-[80%]'onChange={handleInputChange} />
        </div>
        <div className='mt-[15vh] submit'>
        <button type="submit" className=' rounded-md w-[200px] p-4 mb-4 bg-[#FFA500]' > Submit</button>
        </div>
        <div className='mt-[3vh]'><p>Dont't have An Account? <Link to="/Signupuser">Sign up</Link></p></div>
    </div>
    

    </div>
    </form>
    </>
  )
}

export default Login_user