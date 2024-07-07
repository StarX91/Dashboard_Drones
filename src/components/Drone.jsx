import React from "react";

const Drone = () => {
  return (
    <div>
      <div className="flex-col">
        <div className="flex">
          <div className="bg-zinc-800 text-white mx-16 my-16 h-64 w-5/6 rounded-2xl">
            <div className="flex">
              <div className="mx-2 my-2 text-base text-l text-zinc-400 font-semibold">
                Drone Performance
              </div>
              <div className="flex ml-56 my-2 text-zinc-400 font-semibold">
                View All
              </div>
            </div>
            <div className="bg-zinc-900 mr-44 text-zinc-500 text-sm font-semibold ml-40 my-20 pl-3 rounded-xl">
              No Data Found
            </div>
          </div>

          <div className="bg-zinc-800 text-white mx-28 my-16 h-64  w-5/6 rounded-2xl">
            <div className="mx-2 my-2 text-base text-l text-zinc-400 font-semibold">
              Weekly Flights
            </div>
            <div className="bg-zinc-900 mr-44 text-zinc-500 text-sm font-semibold ml-40 my-20 pl-3 rounded-xl">
              No Data Found
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-zinc-800 text-white  mx-16 my-16 h-64 w-5/6 rounded-2xl">
            <div className="mx-2 my-2 text-base text-l text-zinc-400 font-semibold">
              Recent Flights
            </div>
            <div className="bg-zinc-900 mr-44 text-zinc-500 text-sm font-semibold ml-40 my-20 pl-3 rounded-xl">
              No Data Found
            </div>
          </div>
          <div className="bg-zinc-800 text-white  mx-28 my-16 h-64 w-5/6 rounded-2xl">
            <div className="mx-2 my-2 text-base text-l text-zinc-400 font-semibold">
              Recent Plans
            </div>
            <div className="bg-zinc-900 mr-44 text-zinc-500 text-sm font-semibold ml-40 my-20 pl-3 rounded-xl">
              No Data Found
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drone;
