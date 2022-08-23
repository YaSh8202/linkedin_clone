import React from "react";
import { BsPlus } from "react-icons/bs";

const Discover = ({ className }) => {
  return (
    <div
      className={`${className} rounded-lg bg-white px-2 py-3 flex flex-col gap-3 `}
    >
      <p className="text-blue-500 font-semibold ">Groups</p>
      <div className="flex flex-row items-center justify-between">
        <p className="text-blue-500 font-semibold ">Events</p>
        <BsPlus size={24} />
      </div>
      <p className=" text-blue-500 font-semibold ">Followed Hashtags</p>
      <p className="text-gray-500 font-medium text-center text-lg mt-3">
        Discover More
      </p>
    </div>
  );
};

export default Discover;
