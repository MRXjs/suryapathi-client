"use client";
import React from "react";

import { BsWhatsapp } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BabyNameReqForm = () => {
  const router = useRouter();
  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.birthTime.value);
    if (e.target.paymentMethod.value == "Bank Transfer") {
      router.push("/payment");
    } else {
      console.log(e.target.paymentMethod.value);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="flex items-center justify-center "
        style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
      >
        <div className="m-2 mt-20 bg-white rounded-lg shadow-lg">
          <h1 className="my-4 text-3xl text-center ">පහත තොරතුරු ලබාදෙන්න</h1>
          <form className="p-5 mt-10 " onSubmit={formHandler}>
            <div className="mt-5">
              <span>උපන් දිනය</span>
              <div className="grid grid-cols-3 gap-3">
                <input
                  id="dob"
                  type="number"
                  placeholder="අවුරුද්ද"
                  className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
                <input
                  id="dob"
                  type="number"
                  placeholder="මාසය"
                  className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
                <input
                  id="dob"
                  type="number"
                  placeholder="දිනය"
                  className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
                />
              </div>
            </div>
            <div className="mt-5">
              <span>උපන් වෙලාව</span>
              <input
                step="2"
                type="time"
                id="birthTime"
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mt-5">
              <span>උපන් ස්තානය</span>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mt-5">
              <span>ස්ත්‍රී/ පුරුශ බව</span>
              <select className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300">
                <option>ස්ත්‍රී</option>
                <option>පුරුශ</option>
              </select>
            </div>
            <div className="mt-5">
              <span>ආසන්න නගරය</span>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mt-5">
              <span>බලාපොරොත්තු වන නම්</span>
              <select className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300">
                <option>දේශීය සින්හල නම්</option>
                <option>බටහිර නම්</option>
                <option>දේශීය විදේශිය නම්</option>
              </select>
            </div>
            <h1 className="mt-8 text-xl font-semibold text-center">
              ඇමතුම් විස්තර
            </h1>
            <div className="mt-5">
              <div className="flex items-center justify-center ">
                <div className="shrink-0"></div>
                <BsWhatsapp size={30} color="green" />
                <span className="mb-1 font-semibold text-center text-red-700 w-80">
                  ඔබගෙ WhatsApp දුරකතන අංකය ලබා දෙන්න එමගින් අපි ඔබව සම්බන්ද
                  කරගනු ලැබෙ
                </span>
              </div>

              <input
                type="tel"
                placeholder="දුරකතන අංකය"
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mt-5">
              <span>ඔබගෙ නම</span>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="mt-5">
              <span>ගෙවිම් ක්‍රමය</span>
              <select
                id="paymentMethod"
                className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
              >
                <option>Online</option>
                <option>Bank Transfer</option>
              </select>
            </div>
            <div className="mt-5">
              <button
                className="w-full py-3 font-bold text-center text-white bg-purple-500 rounded-lg"
                type="submit"
              >
                ඉදිරියට යන්න
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BabyNameReqForm;
