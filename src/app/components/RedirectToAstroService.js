"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import AstrologyPopupModel from "./AstrologyPopupModel";
import { services } from "@/db/astrologyService";

const RedirectToAstroService = ({ serviceIndex, btnText }) => {
  const [openPopupModel, setOpenPopupModel] = useState(false);
  const [currentService, setCurrentService] = useState({});
  const router = useRouter();

  useEffect(() => {
    services.map((service, index) => {
      if (index == serviceIndex) {
        setCurrentService(service);
      }
    });
  }, [serviceIndex]);

  const serviceReq = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "selectedAstrologyService",
      JSON.stringify(currentService)
    );

    if (e.target.paymentMethod.value == "online") {
      console.log("online!");
    } else {
      router.push("/payment");
    }
  };

  return (
    <div>
      <button
        href="#_"
        className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-center text-white bg-red-500 rounded-md hover:bg-red-400 sm:w-auto sm:mb-0"
        data-primary="green-400"
        data-rounded="rounded-2xl"
        onClick={() => setOpenPopupModel(true)}
      >
        {btnText}&nbsp;
        <div className="shrink">
          {" "}
          <AiOutlineArrowRight size={25} />
        </div>
      </button>
      <AstrologyPopupModel
        open={openPopupModel}
        service={currentService}
        onClose={() => {
          setOpenPopupModel(false);
        }}
        formSubmit={serviceReq}
      />
    </div>
  );
};

export default RedirectToAstroService;
