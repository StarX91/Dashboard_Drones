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
    <div className="bg-black flex justify-center h-screen py-15">
      <div className="bg-zinc-900 flex  mx-28 my-16 w-10/12 rounded-3xl">
        <div className="flex-col w-1/5 ">
          <Live
            name="Flight"
            imgurl={<MdFlight className="size-12 mx-2 my-2 text-white" />}
          />
          <Live
            name="Acres"
            imgurl={<RxStack className="size-12 mx-2 my-2 text-white" />}
          />
          <Live
            name="Drones"
            imgurl={<PiDroneFill className="size-12 mx-2 my-2 text-white" />}
          />
          <Live
            name="Live"
            imgurl={<LuRadio className="size-12 mx-2 my-2 text-white" />}
          />
          <Live
            name="Pilots"
            imgurl={<CgProfile className="size-12 mx-2 my-2 text-white" />}
          />
        </div>
        <div className="w-10/12 ">
          <Drone />
        </div>
      </div>
    </div>
  );
};

export default Data;
