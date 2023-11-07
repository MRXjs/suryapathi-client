import React from "react";
import PricingPlan from "./PricingPlan";
import { weddingServicePricingPlans } from "@/db/pricingPlans";

const packageChangePopupModel = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="z-50  bg-[rgba(0,0,0,0.5)] fixed w-screen h-screen top-0 left-0"
      onClick={onClose}
    >
      {/*container */}
      <div
        className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[350px] md:w-auto bg-white w shadow-2xl rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p
          onClick={onClose}
          className="fixed text-4xl cursor-pointer right-3 text-[#ff2a2a] hover:text-[#a33939] z-50 "
        >
          x
        </p>
        <PricingPlan
          pricingPlans={weddingServicePricingPlans}
          containerClass={
            "overflow-y-auto z-50 md:h-auto m-2 h-screen gap-5 flex  flex-col md:flex-row p-5 w-full"
          }
          pushUrl={"/proposal/membergallery"}
          closePopup={onClose}
          isClosePopup={true}
        />
      </div>
    </div>
  );
};

export default packageChangePopupModel;
