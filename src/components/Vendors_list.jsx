import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import userprofile from "../assets/userprofile.png";

function Vendors_list() {
  let API = "http://localhost:9090/vendor/getvendors";
  // const[vendors,setVendors] = useState({
  //     vNmae: '',
  //     address: '',
  //     startTime: '',
  //     endTime: '',
  //     price: ''
  // });

  const [data, setData] = useState();

  const navigate = useNavigate();

  const fetchApiData = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      setData(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  let vID;
  const getId = (id) => {
    vID = id;
    console.log(vID);
    localStorage.setItem("id", vID);
    navigate("/Slots");
  };

  return (
    <div>
      <div className=" justify-center flex mt-10">
        <div className="serachbar w-[35vw] h-[8vh] bg-[#F5F2F0] rounded-full items-center flex">
          <input
            type="text"
            placeholder="Search for Parking locations..."
            className="w-full h-full rounded-full bg-[#F5F2F0] mx-[50px] outline-none "
          />
        </div>
      </div>

      {data &&
        data.map((data, i) => {
          return (
            <>
              <div className="  justify-center flex mt-20">
                <div className="card w-[60vw] h-[20vh] bg-[#FBCD75] rounded-3xl flex">
                  <div className="left  w-[50%] h-full flex flex-col justify-between ">
                    <div className="upperpart flex  mt-6 ms-[50px]">
                      <div className=" w-[60px] h-[60px] ">
                        <img
                          src={userprofile}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <div className="address  ms-5">
                        <div className="orgName w-[30%] text-4xl font-bold">
                          <p className="me-[50px]">{data.vName}</p>
                        </div>
                        <div className="location font-light ">
                          <p>{data.address}</p>
                        </div>
                      </div>
                    </div>

                    <div className="lowerpart  w-[70%] mb-5 ">
                      <p className="font-medium text-lg me-20 text-[#333A73]">
                        Timing : {data.startTime}.00 am - {data.endTime}.00pm
                      </p>
                    </div>
                  </div>
                  <div className="right  w-[50%] flex items-center">
                    <div className="ms-[65%]">
                      <p className="font-medium ">Price : {data.price}/hr</p>
                      <button
                        className="w-[7vw] h-[5vh] bg-[#007CF1] rounded-2xl mt-1 font-bold  text-xl text-white"
                        onClick={() => {
                          getId(data.vId);
                        }}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default Vendors_list;
