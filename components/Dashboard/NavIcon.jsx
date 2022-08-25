import React from "react";

const NavIcon = ({ Icon, text, active, onlyDesktop }) => {
  return (
    <div
      className={`flex group flex-col gap-2 items-center duration-150 ${
        active
          ? "border-b-0 lg:border-b-2 p-1 border-gray-800 dark:border-gray-100 "
          : ""
      }${onlyDesktop ? "hidden lg:flex" : "  "}`}
    >
      <Icon
        className={`text-xl group-hover:text-gray-800 dark:group-hover:text-white lg:text-2xl ${
          active
            ? "text-gray-800 dark:text-gray-100"
            : "text-gray-500  dark:text-gray-300"
        }`}
      />
      <p
        className={`hidden lg:block text-base group-hover:text-gray-800 dark:group-hover:text-white ${
          active
            ? "text-gray-800 dark:text-gray-100  "
            : "text-gray-500  dark:text-gray-300"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default NavIcon;
