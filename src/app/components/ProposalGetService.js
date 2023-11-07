"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const ProposalGetService = () => {
  const router = useRouter();
  const formHandler = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    router.push("/payment");
  };

  return (
    <>
      <Navbar />
      <div
        className="flex items-center justify-center w-screen min-h-screen"
        style={{ backgroundImage: "linear-gradient(115deg, #9F7AEA, #FEE2FE)" }}
      >
        <div className="m-2 mt-20 bg-white rounded-lg shadow-lg">
          <h1 className="my-4 text-3xl text-center">පහත තොරතුරු ලබාදෙන්න</h1>
          <form className="m-10" onSubmit={formHandler}>
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
                className="w-full px-2 py-1 border border-gray-400"
              />
            </div>
            <div className="mt-5">
              <span>නම</span>
              <input
                id="name"
                type="text"
                className="w-full px-2 py-1 border border-gray-400"
              />
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

export default ProposalGetService;
