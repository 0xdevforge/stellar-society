import React from "react";
import bg from "@/public/bg-2.png";
import Image from "next/image";

const Second = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative ">
      <Image
        src={bg}
        layout="fill"
        objectFit="contain"
        quality={100}
        alt="Background image"
      />
      <div className="px-72 w-full space-y-10 text-xl text-center text-[#646464]">
        <p>
          We understand the importance of creating meaningful opportunities for
          student leaders. Our platform serves as a bridge between your
          leadership experiences and valuable opportunities that can shape your
          future.
        </p>
        <p>
          Our platform is dedicated to empowering the next generation of
          leaders, providing a dynamic space for students to develop essential
          skills, build meaningful connections, and embark on a journey of
          personal and professional growth while getting rewarded with
          successful career prospects for creating a true impact.
        </p>
      </div>
    </div>
  );
};

export default Second;
