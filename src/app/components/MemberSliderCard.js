import Image from "next/image";
import React from "react";

const MemberSliderCard = ({ person }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg w-[350px] h-[400px] flex justify-center items-center flex-col">
      <Image
        src={person.img}
        width={200}
        height={200}
        alt="Sunset in the mountains"
      />
      <div className="flex flex-col items-center justify-center w-full px-6 py-4">
        <div className="font-bold">ID : {person.id}</div>
        <div className="text-[16px] ">{person.name}</div>
        <div>වයස : {person.age}</div>
      </div>
    </div>
  );
};

export default MemberSliderCard;
