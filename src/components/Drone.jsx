import React from "react";

const Drone = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="bg-zinc-800 text-white p-4 rounded-2xl flex-grow">
          <div className="flex justify-between">
            <div className="text-zinc-400 font-semibold">Drone Performance</div>
            <div className="text-zinc-400 font-semibold cursor-pointer">
              View All
            </div>
          </div>
          <div className="bg-zinc-900 text-zinc-500  text-sm font-semibold mt-6 p-28 rounded-xl text-center">
            No Data Found
          </div>
        </div>
        <div className="bg-zinc-800 text-white p-4 rounded-2xl flex-grow">
          <div className="text-zinc-400 font-semibold">Weekly Flights</div>
          <div className="bg-zinc-900 text-zinc-500  text-sm font-semibold mt-6 p-28 rounded-xl text-center">
            No Data Found
          </div>
        </div>
      </div>
      <div className="flex flex-col h-80 md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="bg-zinc-800 text-white p-4 rounded-2xl flex-grow">
          <div className="text-zinc-400  font-semibold">Recent Flights</div>
          <div className="bg-zinc-900 text-zinc-500  text-sm font-semibold mt-6 p-28 rounded-xl text-center">
            No Data Found
          </div>
        </div>
        <div className="bg-zinc-800 text-white p-4 rounded-2xl flex-grow">
          <div className="text-zinc-400 font-semibold">Recent Plans</div>
          <div className="bg-zinc-900 text-zinc-500 text-sm font-semibold mt-6 p-28 rounded-xl text-center">
            No Data Found
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drone;
