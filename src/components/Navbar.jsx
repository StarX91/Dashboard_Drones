import React from "react";
import Starx from "../assets/StarX91-Logo.svg";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex bg-black w-full h-20 ">
      <div className="flex w-36 bg-white my-4 ml-12 h-12 rounded-3xl">
        <img src={Starx} alt="starx logo" className="size-32 pb-20 pl-6" />
      </div>
      <div className="flex bg-zinc-900 ml-80  my-2 w-1/2 rounded-3xl">
        <button className="bg-zinc-800 w-16 h-14 ml-20 my-1 rounded-sm">
          <MdDashboard className="text-zinc-300 w-8 h-8 ml-4" />
          <p className="text-zinc-300 text-[12px] font-semibold">Services</p>
        </button>
        <button className=" w-16 h-14 ml-20 my-1 rounded-sm">
          <MdDashboard className="text-zinc-300 w-8 h-8 ml-5" />
          <p className="text-zinc-300  text-[12px] ml-1 my-1 font-semibold">
            Dashboard
          </p>
        </button>
        <button className=" w-16 h-14 ml-20 my-1 rounded-sm">
          <SlCalender className="text-zinc-300 w-8 h-8 ml-4" />
          <p className="text-zinc-300  text-[12px] my-1 font-semibold">
            Planner
          </p>
        </button>
        <button className=" w-16 h-14 ml-20 my-1 rounded-sm">
          <IoIosPeople className="text-zinc-300 w-8 h-8 ml-4" />
          <p className="text-zinc-300  text-[12px]  my-1 font-semibold">
            Teams
          </p>
        </button>
        <button className=" w-16 h-14 ml-20 my-1 rounded-sm">
          <IoSettingsSharp className="text-zinc-300 w-8 h-8 ml-4" />
          <p className="text-zinc-300  text-[12px]  my-1 font-semibold">
            Settings
          </p>
        </button>
        <button className=" w-16 h-14 ml-20 my-1 rounded-sm">
          <IoIosAddCircle className="text-zinc-300 w-8 h-8 ml-4" />
          <p className="text-zinc-300  text-[12px] my-1 font-semibold">Add</p>
        </button>
      </div>
      <div className="flex bg-zinc-700 w-12 my-4 ml-96 mr-4 h-12 rounded-full"></div>
    </div>
  );
};

export default Navbar;
