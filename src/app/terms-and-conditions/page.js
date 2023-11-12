import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { termsAndConditions } from "@/db/termsAndConditions";

const page = () => {
  return (
    <main className="w-screen min-h-screen ">
      <Navbar />
      <article className="mt-20 mb-10 lg:mt-28">
        <h1 className="mb-5 text-4xl text-center xl:text-6xl">
          නියමයන් සහ කොන්දේසි
        </h1>
        <div className="m-2">
          <div className="text-xl xl:text-2xl text-[#646464] font-bold text-center">
            සුර්යාපතී මංගල සේවය වෙත ඔබ සාදරයෙන් පිළිගනිමු.
          </div>
          <ul className="mt-5">
            {termsAndConditions.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center mt-5 "
              >
                <div className="xl:w-[65%] duration-300 rounded-lg shadow-lg sm:mt-10 md:mt-16 hover:bg-white hover:cursor-pointer p-2 m-2">
                  <div className="flex display ">
                    <span className="text-xl font-semibold mr-1 text-[#646464] xl:text-2xl">
                      {`0${index + 1}.`}
                    </span>
                    <p className="text-lg font-semibold text-[#646464] xl:text-2xl">
                      {item.title}
                    </p>
                  </div>
                  <p className="ml-5 xl:ml-8 xl:text-xl">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default page;
