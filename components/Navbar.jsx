import React from "react";

import { IoMdCompass, IoMdPeople } from "react-icons/io";
import { IoBriefcase } from "react-icons/io5";
import { MdOutlineSmartDisplay } from "react-icons/md";
import LinkedinLogo from "./LinkedinLogo";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="flex  flex-row items-center w-[86%] max-w-[70rem] mx-auto justify-between ">
      <LinkedinLogo />
      <div className="flex flex-row items-center">
        <div className="hidden md:flex duration-150 text-gray-500 flex-row items-center gap-7 border-r-[0.2px]  px-3 border-gray-300 ">
          <div className="flex flex-col hover:text-gray-800 cursor-pointer items-center  ">
            <IoMdCompass size={25} className="" />
            <p className="text-xs mt-[2px] ">Discover</p>
          </div>
          <div className="flex flex-col hover:text-gray-800 cursor-pointer items-center  ">
            <IoMdPeople size={25} className="" />
            <p className="text-xs mt-[2px] ">People</p>
          </div>
          <div className="flex flex-col hover:text-gray-800 cursor-pointer items-center">
            <MdOutlineSmartDisplay size={25} className="" />
            <p className="text-xs mt-[2px] ">Learning</p>
          </div>
          <div className="flex flex-col hover:text-gray-800 cursor-pointer items-center ">
            <IoBriefcase size={25} className="" />
            <p className="text-xs mt-[2px] ">Jobs</p>
          </div>
        </div>
        <button
          onClick={() => router.push("/signin")}
          className="ml-3.5 px-5 py-2 rounded-full border-LinkedinBlue border font-medium text-LinkedinBlue text-base hover:bg-LinkedinBlue/10 "
        >
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
