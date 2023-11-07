"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import profileAvatar from "../../../public/profile-avatar.png";
import AvatarCrop from "./AvatarCrop";

const AvatarShow = ({ selectedAvatar, outPut }) => {
  return (
    <div>
      {selectedAvatar ? (
        <AvatarCrop img={URL.createObjectURL(selectedAvatar)} />
      ) : (
        <>
          <span className="mt-3">පින්තූරයක් තෝරන්න</span>
          <Image
            alt="sample avatar"
            src={profileAvatar}
            width={500}
            height={500}
            className="rounded-md cursor-pointer"
          />
        </>
      )}
    </div>
  );
};

export default AvatarShow;
