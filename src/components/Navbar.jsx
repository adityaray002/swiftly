// import React from 'react'
// import car from '../assets/car.png'
// import userprofile from '../assets/userprofile.png'
// import { Link,useNavigate} from "react-router-dom";
// function Navbar() {
//   const navigate = useNavigate();
//   const swiftly = () => {
//     navigate('/');
//   };
//   return (
//     <>
//     <div className='main flex justify-between  p-3'>
//     <div className='navbarRight flex items-center mx-5'>
//         <span className='text-4xl font-bold' onClick={swiftly}>Swiftly</span>
//         <img src={car} alt="logo" srcset="" />
    
//     </div>
//     <div className="navbarleft flex items-center gap-8 mx-5">
//         <button className='bg-[#F5F5F5] py-5 px-10 rounded'>Home</button>
//         <button className='bg-[#F5F5F5] py-5 px-10 rounded'>Contact</button>
//         <img src={userprofile} alt="" srcset="" className=' size-16'/>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Navbar


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import car from '../assets/car.png';
import userprofile from '../assets/userprofile.png';

function Navbar() {
  const navigate = useNavigate();

  const swiftly = () => {
    navigate('/');
  };

  return (
    <div className='main flex justify-between p-3'>
      <div className='navbarRight flex items-center mx-5'>
        {/* Assuming you want "Swiftly" to be a clickable link */}
        <Link to="/" className="text-4xl font-bold" onClick={swiftly}>
          Swiftly
        </Link>
        <img src={car} alt="logo" />
      </div>
      <div className="navbarleft flex items-center gap-8 mx-5">
        <Link to="/" className='bg-[#F5F5F5] py-4 px-10 rounded'>Home</Link>
        <Link to="/contact" className='bg-[#F5F5F5] py-4 px-10 rounded'>Contact</Link>
        <img src={userprofile} alt="user profile" className='size-16'/>
      </div>
    </div>
  );
}

export default Navbar;
