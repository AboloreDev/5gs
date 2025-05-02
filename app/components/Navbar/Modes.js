"use client";

import { StoreContext } from "../../context/StoreContext"; // Make sure the import path is correct
import { useContext } from "react";
import { CiDark, CiLight } from "react-icons/ci";

const Modes = () => {
  const { darkMode, setDarkMode } = useContext(StoreContext);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-primary-darkBlue text-primary-textColor px-4 py-2 rounded-md text-xl"
      >
        {darkMode ? <CiLight /> : <CiDark />}
      </button>
    </div>
  );
};

export default Modes;
