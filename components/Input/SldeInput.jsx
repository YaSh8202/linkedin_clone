import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const SldeInput = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      if (prev == false) {
        localStorage.theme = "dark";
      } else {
        localStorage.theme = "light";
      }
      return !prev;
    });
  };

  return (
    <label className="switch">
      <input
        checked={isDark}
        onChange={() => {
          toggleDarkMode();
        }}
        type="checkbox"
      />
      <span className="slider round"></span>
      {isDark ? (
        <BsFillMoonFill className="absolute left-1.5 bottom-1.5 text-[#ffcc3c] w-3.5 h-3.5 " />
      ) : (
        <BsSunFill className="absolute right-1.5 bottom-1.5 text-[#ffcc3c] w-3.5 h-3.5 " />
      )}
    </label>
  );
};

export default SldeInput;
