"use client";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { useRouter } from "next/navigation";

const PricingPlan = ({
  pricingPlans,
  containerClass,
  pushUrl,
  closePopup,
  isClosePopup,
}) => {
  const router = useRouter();

  const pricePlanClickHandler = (plan) => {
    localStorage.setItem("selectedPricePlan", JSON.stringify(plan));
    if (isClosePopup) {
      closePopup();
    }
    router.push(pushUrl);
  };

  return (
    <div className="relative">
      {/* background decoration */}
      <div className="absolute inset-0 flex flex-col">
        <div className="flex-1"></div>
        <div className="flex-1 bg-slate-50"></div>
      </div>
      <div className={`${containerClass}`}>
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="relative flex flex-col p-8 bg-white border shadow-lg border-slate-200 rounded-2xl"
          >
            <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
            {plan.mostPopular && (
              <p className="absolute top-0 px-3 text-white bg-cyan-500 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md -translate-y-1/2">
                Most Popular
              </p>
            )}
            <p className="mt-4 text-sm leading-6 text-slate-700">
              {plan.description}
            </p>
            <div className="p-6 mt-4 -mx-6 rounded-lg bg-slate-50">
              <p className="flex items-center text-sm font-semibold text-slate-500">
                <span className="text-xl">{plan.currency}</span>
                <span className="ml-3 text-4xl text-slate-900">
                  {plan.price}
                </span>
              </p>
            </div>
            <ul className="flex-1 mt-6 space-y-4">
              {plan.feachers.map((feacher) => (
                <li
                  key={feacher}
                  className="flex text-sm leading-6 text-slate-700"
                >
                  <div className="shrink-0">
                    {" "}
                    <AiOutlineCheck color="#06b6d4" size={"20"} />
                  </div>
                  {feacher}
                </li>
              ))}
            </ul>
            {/* call to action */}
            <button
              className={`block w-full px-6 py-4 mt-8 text-sm font-semibold leading-4 text-center  rounded-lg    ${
                plan.mostPopular
                  ? "text-white bg-cyan-500 hover:bg-cyan-600 shadow-md"
                  : "text-cyan-700 bg-cyan-50 hover:bg-cyan-100"
              }`}
              onClick={() => pricePlanClickHandler(plan)}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
