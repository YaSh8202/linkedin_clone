import Image from "next/image";
import React from "react";
import { HiSearch } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { IoMdPeople, IoIosNotifications } from "react-icons/io";
import { SiGooglemessages } from "react-icons/si";
import { IoBriefcase } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";

import SlideInput from "../../components/Input/SldeInput";
import NavIcon from "./NavIcon";
import { AuthContext } from "../../context/AuthContext";
const Nav = () => {
  const { signout } = React.useContext(AuthContext);

  return (
    <div className="dark:bg-gray-800 bg-white px-3  top-0 left-0 right-0 sticky ">
      <div className="  flex flex-row justify-between  w-full h-auto pt-1   max-w-[75rem] mx-auto ">
        <div className="flex flex-row items-center gap-5 ">
          <div className="h-10 w-10 md:h-14 md:w-14">
            <Image
              layout="responsive"
              alt="linkedin"
              height={40}
              width={40}
              src={"/linkedin-icon.svg"}
            />
          </div>
          <button>
            <HiSearch className=" text-xl text-gray-800 dark:text-gray-200 " />
          </button>
        </div>
        <div className="flex gap-5 lg:gap-7 items-center  ">
          <NavIcon Icon={AiFillHome} active={true} text="Home" />
          <NavIcon Icon={IoMdPeople} text="My Network" />
          <NavIcon Icon={IoBriefcase} text="Jobs" onlyDesktop={true} />
          <NavIcon Icon={SiGooglemessages} text="Messaging" />
          <NavIcon Icon={IoIosNotifications} text="Notifications" />
          <NavIcon Icon={BsPersonCircle} text="Me" onlyDesktop={true} />
          <NavIcon Icon={BsFillGrid3X3GapFill} text="Work" onlyDesktop={true} />
          <button
            onClick={() => {
              signout();
            }}
          >
            <NavIcon Icon={FaSignOutAlt} text="Signout" />
          </button>
          <SlideInput />
        </div>
      </div>
    </div>
  );
};

export default Nav;
