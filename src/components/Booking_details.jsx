import React from 'react'
import userprofile from '../assets/userprofile.png'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
function Booking_details() {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedSlotsData = JSON.parse(searchParams.get("selectedSlots"));
console.log(selectedSlotsData)
 const vid = selectedSlotsData[0].vendorId;
 const [vendors, setVendors] = useState({});
 console.log(vendors);
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
  const userName = localStorage.getItem("userEmail");
  return (
    <div>
        
         <div className='flex justify-center '>
            <div className='w-[30vw] h-[9vh] bg-[#FFA500]  rounded-full  flex items-center justify-center'>
                <div className='text-5xl text-white font-medium'> <p>BOOKING DETAILS</p></div>
                
               
            </div>
        </div>
        <div className='justify-center flex'>
            <div className='w-[30%] h-[60vh]  mt-[5%] text-left '>
                <div className='slectedSlots w-full  justify-between flex text-5xl '>
                    <div className='left '><p className='font-normal'>Booking ID :</p></div>
                    <div className='right font-light text-3xl'>{userName}</div>
                </div>
                <div className='price justify-between flex text-5xl mt-[10%] mb-[10%]'>
                    <div className='left'><p className='font-light font-normal'>Selected Site :</p></div>
                    <div className='right font-light text-3xl'>{vendors.vName}</div>
                </div>
                <div className='grandTotal justify-between flex text-5xl'>
                    <div className='left'><p className='font-light font-normal'>Slots Booked :</p></div>
                    <div className='right font-light text-3xl'>{selectedSlotsData.length}</div>
                </div>
                <div className='grandTotal justify-between flex text-5xl mt-[10%]'>
                    <div className='left'><p className='font-light font-normal'>Amount Paid :</p></div>
                    <div className='right font-light text-3xl'>{vendors.price * selectedSlotsData.length}</div>
                </div>
                <div className='grandTotal  flex text-5xl mt-[10%]  justify-between'>
                    <div className='left'><p className='font-light font-normal'>Slot Details :</p></div>
                    <div>
                    {selectedSlotsData && selectedSlotsData.map((slot, i) => (
                        <div className='flex justify-between' key={i}>
                            <div className='left font-light text-3xl mb-8'>{slot.startTime}:00 -</div>
                            <div className='right font-light text-3xl mb-8'>{slot.endTime}:00</div>
                        </div>
                    ))}
                </div>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Booking_details