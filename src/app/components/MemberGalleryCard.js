import Image from "next/image";
import React, { useState } from "react";
import { calculateAge, getProfessions } from "./functions";
import avatarLoading from "../../../public/avatrLoading.gif";

const MemberGalleryCard = ({
  person,
  cardClickHandler,
  cardSelectHandler,
  isCardSelected,
}) => {
  const [imgIsLoading, setImgIsLoading] = useState(true);

  return (
    <div
      className={`flex flex-col items-center sm:w-[330px] sm:h-[400px] w-[150px] h-[285px] text-center sm:mx-5 sm:mb-5 mx-3 mt cursor-pointer rounded-md shadow-xl hover:shadow-2xl transition duration-300 ${
        isCardSelected(person.id) ? "bg-[#fef3c7]" : "bg-white"
      } my-10 hover:scale-105 sm:py-8`}
    >
      <Image
        className={`absolute ${!imgIsLoading ? "hidden" : ""} `}
        src={avatarLoading}
        width={200}
        height={200}
        alt="loading"
      />

      <Image
        src={person.profile_image_url}
        onLoad={() => {
          setImgIsLoading(false);
        }}
        loading="lazy"
        width={200}
        height={200}
        onClick={() => cardClickHandler(person)}
        alt=""
        className="rounded-md "
      />
      <div className="text-sm font-bold">ID : {person.id}</div>
      <div className="text-[16px] text-sm ">{getProfessions(person.job)}</div>
      <div className="text-sm">වයස : {calculateAge(person.birthday)}</div>
      <button
        id="selectBtn"
        type="button"
        className={` ${
          isCardSelected(person.id)
            ? "bg-white hover:bg-[#8f8f8f] text-black "
            : "bg-[#ca8a04] hover:bg-[#a16207] text-white"
        } focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold text-sm sm:text-lg px-5 py-4 text-center  w-full duration-300 `}
        onClick={() => cardSelectHandler(person)}
      >
        {`${person.gender == "1" ? "ඇයව " : "ඔහුව"} ${
          isCardSelected(person.id) ? "තෝරා නොගන්න" : "තෝරා ගන්න "
        }`}
      </button>
    </div>
  );
};

export default MemberGalleryCard;
