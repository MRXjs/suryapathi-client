import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const ReqContactForm = ({ formSubmit }) => {
  return (
    <form onSubmit={formSubmit}>
      <div className="mt-5">
        <div className="flex items-center justify-center ">
          <div className="shrink-0"></div>
          <BsWhatsapp size={30} color="green" />
          <span className="mb-1 font-semibold text-center text-red-700 w-80">
            ඔබගෙ WhatsApp දුරකතන අංකය ලබා දෙන්න එමගින් අපි ඔබව සම්බන්ද කරගනු
            ලැබෙ
          </span>
        </div>

        <input
          id="phoneNumber"
          type="tel"
          placeholder="දුරකතන අංකය"
          className="w-full px-2 py-1 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
        />
      </div>
      <div className="mt-5">
        <span>ඔබගෙ නම</span>
        <input
          id="name"
          type="text"
          className="w-full px-2 py-1 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
        />
      </div>
      <div className="mt-5">
        <span>විස්තරය</span>
        <textarea
          name="message"
          placeholder="Message"
          row="4"
          className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
        ></textarea>
      </div>
      <div className="mt-5">
        <span>ගෙවිම් ක්‍රමය</span>
        <select
          id="paymentMethod"
          className="w-full px-4 py-2 mt-2 rounded-md outline-none ring-1 ring-gray-300 focus:ring-2 focus:ring-teal-300"
          required
        >
          <option value={"online"}>Online</option>
          <option value={"bank transfer"}>Bank transfer</option>
        </select>
      </div>
      <div className="mt-10">
        <button
          className="w-full py-3 font-bold text-center text-white bg-green-700 rounded-lg shadow-lg hover:text-black hover:bg-green-300"
          type="submit"
        >
          සේවාව සඳහා අයදුම් කරන්න
        </button>
      </div>
    </form>
  );
};

export default ReqContactForm;
