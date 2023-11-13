"use client";
import React from "react";
import ReqContactForm from "./ReqContactForm";
import { toastError } from "./toast";
import { astrologyCreate } from "../api/astrology";
import { useRouter } from "next/navigation";

const AstrologyPopupModel = ({ open, service, onClose }) => {
  const router = useRouter();
  if (!open) return null;

  return (
    <div
      className="z-50  bg-[rgba(0,0,0,0.5)] fixed w-screen h-screen top-0 left-0"
      onClick={onClose}
    >
      {/*container */}
      <div
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[350px] bg-white w shadow-2xl rounded-lg "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p
          onClick={onClose}
          className="fixed text-4xl cursor-pointer right-3 text-[#797777] hover:text-[#353535] hover:text-red-600"
        >
          x
        </p>

        <h1 className="mt-10 mb-3 text-2xl font-bold tracking-tight text-center text-gray-900">
          {service.title}
        </h1>

        <p className="m-2 mb-3 text-xl font-normal text-center text-gray-700">
          {typeof service.price == "number"
            ? `අයකිරිම රුපියල් ${service.price}`
            : service.price}
        </p>

        {typeof service.price == "number" ? (
          <div className="mx-3 my-3">
            <ReqContactForm
              formSubmit={(data) => {
                if (data.payment_method == 1) {
                  const astrologyData = {
                    service: service.id,
                    name: data.full_name,
                    phone: data.phone,
                    description: data.description,
                    payment_method: JSON.parse(data.payment_method),
                    payment_status: false,
                  };

                  astrologyCreate(astrologyData, router);
                } else {
                  toastError("දැනට ඔබට Online ක්‍රමයට ගෙවිමට නොහැක");
                }
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
