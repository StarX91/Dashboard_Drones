import React from "react";

const Live = ({ name, imgurl }) => {
  return (
    <div className="flex bg-stone-300 mx-4 my-16 h-20 w-10/12 rounded-2xl">
      <div>
        <p className="text-zinc-700 text-xl mx-5 py-1 font-bold ">{name}</p>
        <p className="text-4xl text-zinc-700 font-bold mx-5">0</p>
      </div>
      <div className="flex bg-zinc-700 my-2 w-1/4 ml-20 ">{imgurl}</div>
    </div>
  );
};

export default Live;
