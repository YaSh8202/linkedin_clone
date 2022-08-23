import React from "react";

const NavIcon = ({ Icon, text, active, onlyDesktop }) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center ${
        active
          ? "border-b-0 lg:border-b-2 p-1 border-gray-800 dark:border-gray-100 "
          : ""
      }${onlyDesktop ? "hidden lg:flex" : "  "}`}
    >
      <Icon
        className={`text-xl lg:text-2xl ${
          active
            ? "text-gray-800 dark:text-gray-100"
            : "text-gray-500  dark:text-gray-300"
        }`}
      />
      <p
        className={`hidden lg:block text-base ${
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
