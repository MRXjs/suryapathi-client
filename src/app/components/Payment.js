"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BankAccountCard from "./BankAccountCard";
import { bankAccounts } from "@/db/bankAccounts";
import { toastSuccess } from "./toast";

const Payment = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen mt-20 ">
        <div className="p-2 mt-5 text-xl font-semibold text-center text-white bg-red-700">
          පහත ගිනුමකට මුදල් බැර කොට අපගෙ WhatsApp දුරකතන අංකයට රිසිට් පත ඒවන්න{" "}
        </div>
        <div className="flex flex-col flex-wrap items-center justify-center my-10 md:flex-row">
          {bankAccounts.map((method, index) => (
            <div key={index}>
              <BankAccountCard
                method={method}
                onClose={() => {
                  setOpenPopupModel(false);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Payment;
