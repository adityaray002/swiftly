
import React, { useState } from 'react';
import userprofile from '../assets/userprofile.png';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import SpinnerLoader from './SpinnerLoader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Proceed() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedSlotsData = JSON.parse(searchParams.get("selectedSlots"));
  const vid = selectedSlotsData[0].vendorId;
  const [vendors, setVendors] = useState({});
  const [isPaying, setIsPaying] = useState(false); // State to indicate payment in progress
    const userName =localStorage.getItem("userEmail")
  useEffect(() => {
    const API = "http://localhost:9090/vendor/getvendor/";
    const fetchApiData = async (url) => {
      try {
        const resp = await fetch(url + vid);
        const data = await resp.json();
        setVendors(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApiData(API);
  }, []);
  
  const navigate = useNavigate();

  const handlepay = async () => {
    setIsPaying(true); // Update state to indicate payment in progress

    try {
        await new Promise((resolve) => setTimeout(resolve, 5000));
      const response = await fetch(`http://localhost:9090/book/slots/${userName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(selectedSlotsData)
      });

      if (response.ok) {
        // Payment successful, navigate to booking details page
        toast('🦄 Payment Successful!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          
          });
        setIsPaying(false);
        setTimeout(() => {
          setIsPaying(false);
          navigate(`/Booking_details?selectedSlots=${encodeURIComponent(JSON.stringify(selectedSlotsData))}`);
        }, 2500); 
       
      } else {
        // Handle error
        throw new Error('Failed to make payment');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
      setIsPaying(false);
    }
  };

  return (
    <div>
      <div className='flex justify-center '>
        <div className='w-[40vw] h-[9vh] bg-[#FFA500]  rounded-full  text-left flex'>
          <div className='image w-[80px] h-[80px]  ms-[8%] mt-2 '>
            <img className='w-full object-contain min-h-0' src={userprofile} alt="logo" srcset="" />
          </div>
          <div className='address  ms-5 mt-4'>
            <div className='orgName w-[30%] text-5xl font-bold'><p className='me-[50px]'>{vendors.vName}</p></div>
            <div className='location font-light '><p> {vendors.address}</p></div>
          </div>
        </div>
      </div>
      <div className='justify-center flex'>
        <div className='w-[30%] h-[60vh]  mt-[5%] text-left  '>
          <div className='slectedSlots w-full  justify-between flex text-5xl '>
            <div className='left '><p className=' font-normal'>Selected Slot :</p></div>
            <div className='right font-light text-4xl'>{selectedSlotsData.length}</div>
          </div>
          <div className='price justify-between flex text-5xl mt-[10%] mb-[10%]'>
            <div className='left'><p className='font-normal'>Price Per Slot :</p></div>
            <div className='right font-light text-4xl'>{vendors.price}</div>
          </div>
          <div className='grandTotal justify-between flex text-5xl'>
            <div className='left'><p className='font-normal'>Grand Total :</p></div>
            <div className='right font-light text-4xl'>{vendors.price * selectedSlotsData.length}</div>
          </div>
          <div className='pay justify-center flex rounded-full'>
            {/* Conditional rendering of SpinnerLoader when isPaying is true */}
            {isPaying ? (
              <SpinnerLoader />
            ) : (
              <button type="submit" className=' rounded-md w-[200px] p-4  bg-[#FFA500] text-white mt-[15%] text-3xl ' onClick={handlepay}> Pay</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proceed;

