import Image from "next/image";
import React from "react";
import ProfileImg from "../../../public/profile.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import videos from "@/db/video";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="w-screen min-h-screen py-10 mt-10 lg:py-20 bg-stone-100 font-poppins">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                  <span className="text-sm text-gray-600 uppercase ">
                    මම කවුද?
                  </span>
                  <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl font-sinha ">
                    Oïfudayfõrlan;sOïujdß
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 ">
                  මම ශක්තිමත්ව අභිමානවත් පදනමක සිට අභිමානවත් මෙන්ම උත්තරිතර
                  විශිෂ්ට වු මෙහෙවරක යෙදෙන්නෙමි මෙය දුර්ලභ වු විෂ‍යක් ලෙසත්
                  අනාගතයට රැකබලාගනිමින් දැයේ මිනිසුන්ට සෙත සලසන්නට ගෞරවයෙන්
                  දායාද කරමි.
                </p>
                <div className="flex flex-wrap items-center">
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6"
                    >
                      {video.iframe}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative z-0 w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <Image
                src={ProfileImg}
                alt=""
                className="relative z-40 object-cover w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
