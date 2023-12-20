"use client";
import BankAccountCard from "./BankAccountCard";
import { bankAccounts } from "@/db/bankAccounts";
import { BsWhatsapp } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";

const contactData = [
  { icon: <BsWhatsapp />, mobileNumber: "+94 766251671" },
  { icon: <BsWhatsapp />, mobileNumber: "+94 766008689" },
  { icon: <IoCallSharp />, mobileNumber: "+94 715831684" },
];

const Payment = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen mt-20 ">
        <div className="p-2 mt-5 text-xl font-semibold text-center text-white bg-red-700">
          පහත ගිනුමකට මුදල් බැර කොට අපගෙ WhatsApp දුරකතන අංකයට රිසිට් පත ඒවන්න{" "}
        </div>
        <div className="flex flex-col gap-5 mt-20 md:flex-row md:gap-6">
          {contactData.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center justify-center gap-1 text-2xl font-bold"
            >
              <div className=" animate-pulse">{item.icon}</div>
              <span>{item.mobileNumber}</span>
            </div>
          ))}
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
