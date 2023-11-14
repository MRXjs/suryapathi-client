import Image from "next/image";
import React, { useEffect, useState } from "react";
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
      className={`flex flex-col items-center w-[330px] h-[400px] text-center mx-5 mb-5 cursor-pointer rounded-md shadow-xl hover:shadow-2xl transition duration-300 ${
        isCardSelected(person.id) ? "bg-[#fef3c7]" : "bg-white"
      } my-10 hover:scale-105`}
    >
      <Image
        className={`absolute ${!imgIsLoading ? "hidden" : ""}`}
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
        alt=""
        className="mt-5 rounded-md"
      />
      <div className="font-bold">ID : {person.id}</div>
      <div className="text-[16px] ">{getProfessions(person.job)}</div>
      <div>වයස : {calculateAge(person.birthday)}</div>

      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        onClick={() => cardClickHandler(person)}
      >
        තවත් තොරතුරු
      </button>
      <button
        id="selectBtn"
        type="button"
        class={` ${
          isCardSelected(person.id)
            ? "bg-white hover:bg-[#8f8f8f] text-black "
            : "bg-[#ca8a04] hover:bg-[#a16207] text-white"
        } focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold text-lg px-5 py-4 text-center mr-2 mb-2 w-full duration-300 `}
        onClick={() => cardSelectHandler(person)}
      >
        {`${person.gender == "ස්ත්‍රී" ? "ඇයව " : "ඔහුව"} ${
          isCardSelected(person.id) ? "තෝරා නොගන්න" : "තෝරා ගන්න "
        }`}
      </button>
    </div>
  );
};

export default MemberGalleryCard;
