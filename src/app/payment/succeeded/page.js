import React from "react";
import { FcApproval } from "react-icons/fc";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const page = () => {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col items-center justify-center w-screen min-h-screen">
        <div className="flex flex-col items-center gap-1 ">
          <div className="shrink-0">
            <FcApproval size={150} />
          </div>
          <div className="text-2xl md:text-4xl xl:text-6xl">
            මුදල් ගෙවීම සාර්ථකයි!
          </div>
        </div>
        <p className="mt-10 text-lg font-semibold text-center md:text-2xl xl:text-4xl xl:text-[#4e4e4e]">
          අපි හැකි ඉක්මනින් WhatsApp හරහා ඔබව සම්බන්ධ කර ගන්නෙමු.
        </p>
        <ul className="flex flex-wrap items-center justify-center mx-10 my-2 mt-10 ">
          <li className="list-none">
            <a
              target="_blank"
              href={"https://web.facebook.com/profile.php?id=100094727563499"}
              className="font-[2em] text-[#fff] my-0 mx-[10px] inline-block transition duration-300 hover:-translate-y-1 animate-pulse"
            >
              <BsFacebook size={70} color="#1877F2" />
            </a>
          </li>
          <li className="list-none">
            <a
              target="_blank"
              href={
                "https://api.whatsapp.com/send/?phone=94766251671&text&type=phone_number&app_absent=0"
              }
              className="font-[2em] text-[#fff] my-0 mx-[10px] inline-block transition duration-300 hover:-translate-y-1 animate-pulse"
            >
              <BsWhatsapp size={70} color="#25D366" />
            </a>
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  );
};

export default page;
