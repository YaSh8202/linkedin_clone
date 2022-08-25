import React from "react";
import { BsPersonCircle, BsFillBookmarkFill } from "react-icons/bs";
const ProfileBox = ({ email, name }) => {
  return (
    <div className="flex flex-col w-full ">
      <div className="relative flex flex-col gap-5 rounded-lg bg-white">
        <div className="relative flex flex-col">
          <div className=" bg-profile-bg w-full bg-cover rounded-t-lg  h-14"></div>
          <div className="bg-white flex items-center justify-center rounded-full w-14 h-14 absolute left-0 right-0 mx-auto top-8 ">
            <BsPersonCircle size={50} className="text-gray-700" />
          </div>
          <div className="flex flex-col items-center mt-12">
            <h3 className="text-lg font-medium capitalize  ">{name}</h3>
            <p className="text-xs">{email}</p>
          </div>
        </div>
        <div className="hidden lg:flex flex-col px-4 mt-2 gap-1">
          <div className="flex flex-row justify-between text-xs items-center ">
            <p className="text-xs font-medium">Who viewed your profile</p>
            <p className="text-blue-400 font-semibold">321</p>
          </div>
          <div className="flex flex-row justify-between text-xs items-center ">
            <p className="text-xs font-medium">Views of your post</p>
            <p className="text-blue-400 font-semibold">1,892</p>
          </div>
          <div className="mt-5">
            <p className=" font-light text-sm">
              Access exclusive tools & insights
            </p>
            <p className="font-semibold">Try premium for free</p>
          </div>
          <div className="flex items-center my-4   ">
            <BsFillBookmarkFill />
            <p>My Items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
