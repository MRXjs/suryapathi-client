"use client";
import Image from "next/image";
import React from "react";
import { calculateAge, getProfessions } from "./functions";

const MemberPopupModel = ({ open, person, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="z-50  bg-[rgba(0,0,0,0.5)] fixed w-screen h-screen top-0 left-0"
      onClick={onClose}
    >
      {/*container */}
      <div
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[350px] bg-white w shadow-2xl rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p
          onClick={onClose}
          className="fixed text-4xl cursor-pointer right-3 text-[#797777] hover:text-[#353535]"
        >
          x
        </p>
        <Image
          alt={person.full_name}
          src={person.profile_image_url}
          className="mx-auto my-10 rounded-md w-72"
          width={100}
          height={100}
        />
        {/* content */}
        <div className="flex flex-col items-center justify-center mb-5 ">
          <div>
            <div className="text-xl">
              <span className="font-bold ">ID: </span> {person.id}
            </div>
            <div className="text-xl">
              <span className="font-bold ">රැකියාව: </span>{" "}
              {getProfessions(person.job)}
            </div>
            <div className="text-xl">
              <span className="font-bold ">වයස: </span>
              {calculateAge(person.birthday)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberPopupModel;
