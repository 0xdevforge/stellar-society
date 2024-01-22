import Image from "next/image";
import React from "react";
import left from "@/public/left.svg";
import right from "@/public/right.svg";
import Navbar from "./Navbar";
const First = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#131313] text-white flex items-center justify-center text-center">
        <header className="flex mx-72 space-y-4 flex-col items-center justify-center w-full ">
          <h1 className="text-6xl font-bold">
            It&apos;s <span className="glow">rewarding</span> being a student
            leader & creating a true impact
          </h1>
          <h2 className="text-2xl leading-9">
            Welcome to Stellar Societies, where we believe in transforming
            student leadership experiences into rewarding opportunities that
            propel youtowards achieving your career goals and boosting you
            future prospects.
          </h2>
        </header>
      </div>
      <div className="flex items-center justify-between w-full h-0">
        <Image src={left} alt="left" />
        <Image src={right} alt="right" />
      </div>
    </div>
  );
};

export default First;
