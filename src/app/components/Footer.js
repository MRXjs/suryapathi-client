"use client";
import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className="relative w-screen bg-[#000] min-h-[100px] py-[20px] px-[50px] flex justify-center items-center flex-col">
      {/* social icons */}
      <ul className="relative flex flex-wrap items-center justify-center mx-10 my-2">
        <li className="list-none">
          <a
            target="_blank"
            href={"https://web.facebook.com/profile.php?id=100094727563499"}
            className="font-[2em] text-[#fff] my-0 mx-[10px] inline-block transition duration-300 hover:-translate-y-1"
          >
            <IconContext.Provider value={{ size: "30px" }}>
              <BsFacebook />
            </IconContext.Provider>
          </a>
        </li>
        <li className="list-none">
          <a
            target="_blank"
            href={
              "https://api.whatsapp.com/send/?phone=94766251671&text&type=phone_number&app_absent=0"
            }
            className="font-[2em] text-[#fff] my-0 mx-[10px] inline-block transition duration-300 hover:-translate-y-1"
          >
            <IconContext.Provider value={{ size: "30px" }}>
              <BsWhatsapp />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
      {/* navlinks */}
      <ul className="relative flex flex-wrap items-center justify-center mx-10 my-0">
        <li className="mx-[10px]">
          <Link
            href={"/terms-and-conditions"}
            className=" text-lg text-[#fff] inline-block transition duration-300 opacity-75 hover:opacity-100"
          >
            Terms & Conditions
          </Link>
        </li>
        <li className="mx-[10px]">
          <Link
            href={"/refund-policy"}
            className=" text-lg text-[#fff] inline-block transition duration-300 opacity-75 hover:opacity-100"
          >
            Refund Policy
          </Link>
        </li>
        <li className="mx-[10px]">
          <Link
            href={"/privacy-policy"}
            className=" text-lg text-[#fff] inline-block transition duration-300 opacity-75 hover:opacity-100"
          >
            Privacy Policy
          </Link>
        </li>
      </ul>
      <p className="text-center text-white mt-[30px]  text-[1.1em] tracking-[1px]">
        &#169; Copyright 2023 Suryapathi.LK
      </p>
      <p className="text-center text-white  mb-[15px] text-[1.1em] tracking-[5px]">
        Powered By Rivonit Solutions
      </p>
    </footer>
  );
};

export default Footer;
