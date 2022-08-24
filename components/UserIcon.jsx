import React from "react";
import { BsPersonCircle } from "react-icons/bs";

const UserIcon = ({ size }) => {
  return (
    <div
      className={`bg-white flex items-center justify-center rounded-full h-${
        size + 3
      } h-${size + 3} w-${size + 3} `}
    >
      <BsPersonCircle size={size} className="text-gray-700" />
    </div>
  );
};

export default UserIcon;
