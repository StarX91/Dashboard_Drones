import React from "react";

const Live = ({ name, imgurl }) => {
  return (
    <div className="flex justify-between bg-stone-300 my-4 h-20 w-full rounded-2xl p-4">
      <div>
        <p className="text-zinc-700 text-lg md:text-xl font-bold">{name}</p>
        <p className="text-2xl md:text-4xl text-zinc-700 font-bold">0</p>
      </div>
      <div className="flex items-center justify-center bg-zinc-700 w-12 h-12 md:w-16 md:h-16 rounded-full">
        {imgurl}
      </div>
    </div>
  );
};

export default Live;
