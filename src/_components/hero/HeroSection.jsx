// @ts-nocheck
import Image from "next/image";
import React from "react";
import ProfileImage from "../../images/IMG_CM.jpg";
import { FULL_NAME } from "../../lib/config";

export const HeroSection = () => {
  return (
    <div className="relative m-auto flex max-w-5xl flex-col items-center md:flex-row md:pr-[42px]">
      <Image
        width={300}
        height={300}
        src={ProfileImage}
        alt="profile"
        className="top-[-16px ] right-[8px] rounded shadow-lg md:absolute"
      />

      <div className="flex flex-col gap-4 md:relative md:mr-64">
        <h1 className="text-6xl drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] md:text-7xl">
          I'm{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-transparent">
            {FULL_NAME}
          </span>
        </h1>
        <p className="max-w-xl text-xl dark:drop-shadow-[0_0px_5px_rgba(0,0,0,1)] ">
          <b>Apprenti React & DotNet.</b> Former accountant, I became a
          Full-Stack Web Developer, very happy to see your here. Living near
          Rennes.
        </p>
      </div>
    </div>
  );
};
