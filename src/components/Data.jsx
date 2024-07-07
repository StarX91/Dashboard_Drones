import React from "react";
import Drone from "./Drone";
import Live from "./Live";

const Data = () => {
  return (
    <div className="bg-black flex justify-center h-screen py-15">
      <div className="bg-zinc-900 flex  mx-28 my-16 w-10/12 rounded-3xl">
        <div className="flex-col w-1/5">
          <Live name="Flight" imgurl="" />
          <Live name="Acres" imgurl="" />
          <Live name="Drones" imgurl="" />
          <Live name="Live" imgurl="" />
          <Live name="Pilots" imgurl="" />
        </div>
        <div className="w-10/12 ">
          <Drone />
        </div>
      </div>
    </div>
  );
};

export default Data;
