import React from "react";
import Drone from "./Drone";
import Live from "./Live";
import { MdFlight } from "react-icons/md";
import { PiDroneFill } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { RxStack } from "react-icons/rx";
import { LuRadio } from "react-icons/lu";

const Data = () => {
  return (
    <div className="bg-black flex justify-center min-h-screen py-15">
      <div className="bg-zinc-900 flex flex-col md:flex-row mx-4 md:mx-28 my-8 md:my-16 w-full md:w-10/12 rounded-3xl p-4">
        <div className="flex flex-col w-full md:w-1/5 space-y-4">
          <Live
            name="Flight"
            imgurl={<MdFlight className="w-6 h-6 md:w-12 md:h-12 text-white" />}
          />
          <Live
            name="Acres"
            imgurl={<RxStack className="w-6 h-6 md:w-12 md:h-12 text-white" />}
          />
          <Live
            name="Drones"
            imgurl={
              <PiDroneFill className="w-6 h-6 md:w-12 md:h-12 text-white" />
            }
          />
          <Live
            name="Live"
            imgurl={<LuRadio className="w-6 h-6 md:w-12 md:h-12 text-white" />}
          />
          <Live
            name="Pilots"
            imgurl={
              <CgProfile className="w-6 h-6 md:w-12 md:h-12 text-white" />
            }
          />
        </div>
        <div className="w-full md:w-10/12 mt-4 ml-4 md:mt-0">
          <Drone />
        </div>
      </div>
    </div>
  );
};

export default Data;
