import React from "react";
import starx from "../assets/StarX91-Logo.svg";
import dash from "../assets/dashboard.svg";
import drone from "../assets/drone.svg";
import control from "../assets/square.svg";
import group from "../assets/group.svg";
import setting from "../assets/settings.svg";
import add from "../assets/add.svg";

const Navbar = () => {
  return (
    <div className="bg-[#101010] sticky top-0 flex justify-between w-full h-20">
      {/* STARX91 LOGO */}
      <div className="bg-[#FFFFFF] sticky my-4 ml-10 mx-auto px-5 rounded-3xl ">
        <img
          src={starx}
          alt="starx91 logo"
          class="w-20 ml-5 mt-2 max-width-full"
        />
      </div>

      {/* MID CONTAINER */}

      <div className="bg-[#161616]  w-fit mr-96 flex  my-3 rounded-3xl h-16">
        <div className="bg-[#2C2C2C] w-16 h-12 ml-8 my-1 rounded ">
          <img src={dash} alt="dashboard image" class="w-8  mx-4 mt-1" />

          <div className=" text-[#9D9D9D] text-[8px] mx-3 font-semibold">
            Dashboard
          </div>
        </div>
        <div className="bg-[#2C2C2C] ml-12 w-16 h-12 rounded mt-1">
          <img src={drone} alt="Drone Image" class="mx-4 mt-1 w-8 " />
          <div className=" text-[#9D9D9D] text-[8px] ml-5 font-semibold">
            Drone
          </div>
        </div>
        <div className="bg-[#2C2C2C] ml-12 w-16 h-12 rounded mt-1">
          <img src={control} alt="Drone Image" class="mx-4 mt-1 w-8" />
          <div className=" text-[#9D9D9D] text-[8px] ml-1 font-semibold">
            Control Center
          </div>
        </div>
        <div className="bg-[#2C2C2C] ml-12 w-16 h-12 rounded mt-1">
          <img src={group} alt="Drone Image" class="mx-4 mt-1 w-8" />
          <div className=" text-[#9D9D9D] text-[8px] ml-5 font-semibold">
            Teams
          </div>
        </div>
        <div className="bg-[#2C2C2C] ml-12 w-16 h-12 rounded mt-1">
          <img src={setting} alt="Drone Image" class="mx-4 mt-1 w-8" />
          <div className=" text-[#9D9D9D] text-[8px] mx-5 font-semibold">
            Setting
          </div>
        </div>
        <div className="bg-[#2C2C2C] ml-12 w-16 h-12 rounded mt-1">
          <img src={add} alt="Drone Image" class="mx-4 mt-1 w-8" />
          <div className=" text-[#9D9D9D] text-[8px] mx-6 font-semibold">
            Add
          </div>
        </div>
      </div>
      {/*USER PROFILE BOX */}
      <div className="bg-[#3E3E3E] rounded-full  w-10 h-12  mt-3 "></div>
    </div>
  );
};

export default Navbar;
