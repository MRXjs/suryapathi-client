"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import AstrologyPopupModel from "./AstrologyPopupModel";

const List = ({ ListItems, listTitle }) => {
  const [openPopupModel, setOpenPopupModel] = useState(false);
  const [currentService, setCurrentService] = useState({});

  const itemClickHandler = (service) => {
    setOpenPopupModel(true);
    setCurrentService(service);
  };

  const router = useRouter();

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
    <div className="h-full mt-16 lg:mx-20 lg:mt-20">
      <h1 className="mb-10 text-6xl text-center font-sinha">{listTitle}</h1>
      <div className="flex flex-wrap justify-center">
        {ListItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#cfcfcfee] text-center p-5 rounded-md m-5 hover:bg-[#333] hover:text-white duration-300 cursor-pointer hover:scale-105"
            onClick={() => itemClickHandler(item)}
          >
            <span>{item.title}</span>
          </div>
        ))}
      </div>
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

export default List;
