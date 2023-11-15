import Image from "next/image";
import React, { useState } from "react";
import { calculateAge } from "./functions";
import avatarLoading from "../../../public/avatrLoading.gif";

const MemberSliderCard = ({ person }) => {
  const [imgIsLoading, setImgIsLoading] = useState(true);
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg w-[350px] h-[400px] flex justify-center items-center flex-col">
      <Image
        className={`absolute top-24 ${!imgIsLoading ? "hidden" : ""}`}
        src={avatarLoading}
        width={200}
        height={200}
        alt="avatar loading"
      />
      <Image
        onLoad={() => {
          setImgIsLoading(false);
        }}
        loading="lazy"
        src={person.profile_image_url}
        width={200}
        height={200}
        alt="Sunset in the mountains"
      />
      <div className="flex flex-col items-center justify-center w-full px-6 py-4">
        <div className="font-bold">ID : {person.id}</div>
        <div className="text-[16px] ">{person.full_name}</div>
        <div>වයස : {calculateAge(person.birthday)}</div>
      </div>
    </div>
  );
};

export default MemberSliderCard;
