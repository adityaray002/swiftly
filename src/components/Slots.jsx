


import React, { useEffect, useState } from "react";
 import userprofile from '../assets/userprofile.png';
import Proceed from "./Proceed";
import { useNavigate } from "react-router-dom";
function Slots() {
  // setTheArray(oldArray => [...oldArray, newElement]);

  const [selectedSlots, setSelectedSlots] = useState(new Set())

    
  const handleSlotClick = (index) => {
    const updatedSlots = [...slots];
    var slot = updatedSlots[index];
    
    if(!slot.isSelected && slot.available > 0) {
      selectedSlots.add(slot);
    } else {
      selectedSlots.delete(slot);
    }
    slot.isSelected = !slot.isSelected

    setSlots(updatedSlots);
    
    console.log(selectedSlots);
    
  };


  const userEmail = localStorage.getItem("userEmail");



  const navigate = useNavigate();
  const handleSubmit =  () => {
    const selectedSlotsArray = Array.from(selectedSlots); // Convert Set to Array
    navigate(`/Proceed?selectedSlots=${JSON.stringify(selectedSlotsArray)}`);
   
  };

  const vid = localStorage.getItem("id");
 
  let API = "http://localhost:9090/vendor/getvendor/";
  let slotsAPI = "http://localhost:9090/slots/";

  const [vendors, setVendors] = useState([]);
  const [slots, setSlots] = useState([]);
  const fetchApiData = async (url) => {
    try {
      const resp = await fetch(url + vid);
      const data = await resp.json();

      setVendors(data);

    } catch (error) {
      console.log(error);
    }
  };
  const fetchSlotsData = async (url) => {
    try {
      const resp = await fetch(url + vid);
      const s = await resp.json();

      setSlots(s.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
    fetchSlotsData(slotsAPI);
  }, []);

  // Dynamically render buttons using array mapping
  const renderButtons = () => {
    const buttons = [];
    for (let index = 0; index < slots.length; index++) {

      var slot = slots[index];

      let borderColor = "#FFA500"
      if(slot.available < 1) {
        borderColor = "#BABABA"
      } else if(slot.isSelected) {
        borderColor = "#007CF1"
      } else {
        borderColor = "#FFA500"
      }

      buttons.push(            
        <button
          key={index}
          className="w-[10vw] h-[7vh] rounded-full m-7 bg-transparent py-4 px-8 border-4"
          style={{borderColor: borderColor}}
          onClick={() => handleSlotClick(index)} // Pass slot data here
        >
          <p className="w-full text-2xl font-medium" style={{color: borderColor}}>
            {slot.startTime}:00-{slot.endTime }:00
          </p>
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="w-[40vw] h-[9vh] bg-[#FFA500]  rounded-full  text-left flex">
          <div className="image w-[80px] h-[80px] ms-[8%] mt-2 ">
            <img
              className="w-full object-contain min-h-0"
               src={userprofile}
              alt="logo"
              srcSet=""
            />
          </div>

          <div className="address  ms-5 mt-4">
            <div className="orgName w-[30%] text-5xl font-bold">
              <p className="me-[50px]">{vendors.vName}</p>
            </div>
            <div className="location font-light ">
              <p>{vendors.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center flex">
        <div className="w-[80%] h-[60vh]  mt-[5%] text-left ">
          {renderButtons()}
        </div>
      </div>
      <div className="justify-center flex">
        <div className="w-[80%] ">
          <div className="text-right ">
            <button
              className="w-[10vw] h-[7vh] bg-[#007CF1]"
              type="submit"
              onClick={handleSubmit}
            >
              <p className="w-full text-2xl font-medium text-white" >Proceed</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slots;