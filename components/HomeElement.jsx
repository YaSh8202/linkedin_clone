import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function HomeElement({ text }) {
  return (
    <div className="cursor-pointer w-full bg-white flex flex-row items-center h-[3.25rem] md:h-[4rem] rounded-md md:rounded-lg hover:shadow-xl hover:scale-105 duration-150  px-4 justify-between ">
      <h3 className="text-lg">{text}</h3>
      <MdOutlineArrowForwardIos size={22} className="" />
    </div>
  );
}

export default HomeElement;
