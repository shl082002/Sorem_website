import React from "react";
import { LuDna } from "react-icons/lu";

export default function Navbar() {
  return (
    <>
      <div className="h-[8vh] bg-white flex justify-between items-center px-[2rem]">
        {/* left-container*/}
        <div className="flex justify-center items-center ">
          <LuDna className="text-[4rem]" />
          <p className="text-[3rem] px-[1rem] font-semibold">SOREM</p>
        </div>
        {/* right-container */}
        <div className="flex justify-between items-center gap-x-[2rem] text-[1.5rem]">
          <button className="bg-black text-white px-[1rem] py-[0.5rem] rounded-[0.8rem] hover:bg-red-700 shadow-md">
            Contact
          </button>
          <button className="bg-black text-white px-[1rem] py-[0.5rem] rounded-[0.8rem] hover:bg-red-700">
            Overview
          </button>
          <button className="bg-black text-white px-[1rem] py-[0.5rem] rounded-[0.8rem] hover:bg-red-700">
            Investor Portal
          </button>
        </div>
      </div>
    </>
  );
}
