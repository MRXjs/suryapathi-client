"use client";
import React, { useState } from "react";
import ReqContactForm from "./ReqContactForm";
import { toastError } from "./toast";
import { astrologyCreate } from "../api/astrology";
import { useRouter } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

const AstrologyPopupModel = ({ open, service, onClose }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  if (!open) return null;

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      {isLoading ? <LoadingScreen /> : null}
      {/*container */}
      <div
        className="flex items-center justify-center flex-col w-screen md:w-[60%] lg:w-[50%] xl:w-[40%] h-full p-5 my-10 overflow-y-auto bg-white  "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p
          onClick={onClose}
          className="fixed bg-[#eee] text-center pb-2 px-2 rounded-lg right-[6%] top-1 sm:top-5 text-4xl cursor-pointer  text-[#a82e2e] hover:text-[#ff5454]"
        >
          x
        </p>

        <h1 className="mb-3 text-2xl font-bold tracking-tight text-center text-gray-900 mt-[500px] sm:mt-48">
          {service.title}
        </h1>

        <p className="m-2 mb-3 text-xl font-normal text-center text-gray-700 ">
          {typeof service.price == "number"
            ? `අයකිරිම රුපියල් ${service.price}`
            : service.price}
        </p>

        {typeof service.price == "number" ? (
          <div className="mx-3 my-3">
            <ReqContactForm
              astrology={true}
              formSubmit={async (data) => {
                setIsLoading(true);
                await astrologyCreate(service, data, router);
                setIsLoading(false);
              }}
            />
          </div>
        ) : (
          <div className="p-2 font-semibold text-center text-white bg-red-700">
            මිලගනන් දැනගැනිමට අපගෙ WhatsApp දුරකතන අංකයට පනිවිඩයක් යොමු කරන්න
          </div>
        )}
      </div>
    </div>
  );
};

export default AstrologyPopupModel;
