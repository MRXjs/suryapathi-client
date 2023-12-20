"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IconContext } from "react-icons";

const NavigateToMemberRegistration = () => {
  const router = useRouter();
  const btnHandler = () => {
    router.push("/proposal/memberregistration");
  };
  return (
    <button
      type="button"
      class=" text-2xl mt-10 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400  rounded-lg  px-5 py-2.5 text-center mr-2 mb-2 shadow-lg animate-pulse hover:animate-none"
      onClick={btnHandler}
    >
      {" අපගෙ වෙබ් පිටුවෙ ලියාපදින්චී වීමට "}
      <IconContext.Provider value={{ color: "red", className: "inline" }}>
        <div>
          <AiOutlineArrowRight size={25} />
        </div>
      </IconContext.Provider>
    </button>
  );
};

export default NavigateToMemberRegistration;
