import Image from "next/image";
import React from "react";
import character from "@/public/character.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="w-1/2 h-full border-r-2 border-solid border-dark flex justify-center">
        <Image
          src={character}
          alt="MauricioSuescun"
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
        <h2 className="font-bold capitalize text-6xl">Hi, I'm Mauricio!</h2>
        <p className="font-medium capitalize mt-4 text-base">
          <br />I am a full stack developer with preference for Frontend
          Development
          <br />I am a software engineer with experience in the field of web
          development and mobile applications, I have worked on several projects
          for different clients, such as:
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
