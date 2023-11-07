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
      {/* <div className="inline-block w-full h-full px-2 py-10 pt-36 bg-light">
        <div className="flex items-center w-full min-h-screen text-[#000] ">
          <div className="flex flex-col items-center justify-center w-full lg:flex-row lg:justify-between">
            <div className="w-full lg:w-1/2 ">
              <Image
                alt="profile img"
                src={ProfileImg}
                className="w-full border-4  border-solid rounded-full shadow-2xl border-[#cecece] flex-wrap"
              />
            </div>
            <div className=" lg:ml-10 lg:w-1/2">
              <h1 className="text-6xl font-sinha">Oïfudayfõrlan;sOïujdß</h1>
              <p className="text-[#7c7c7c] text-xl">
                ශාස්ත්රය, ස්ථාවර තාරකා, සූර්යයා, චන්ද්රයා සහ ග්රහලෝක නිරීක්ෂණය
                කිරීම සහ අර්ථ නිරූපණය කිරීම හරහා භූමික හා මානව සිදුවීම් පුරෝකථනය
                කිරීම ඇතුළත් වන පේන කීම වර්ගයකි. පෘථිවි කටයුතු සඳහා ග්‍රහලෝක සහ
                තාරකාවල බලපෑම පිළිබඳ අවබෝධයක් පුද්ගලයන්, කණ්ඩායම් සහ ජාතීන්ගේ
                ඉරණම පුරෝකථනය කිරීමට සහ බලපෑම් කිරීමට ඉඩ සලසන බව බැතිමතුන්
                විශ්වාස කරති. ඉතිහාසය පුරාවටම බොහෝ විට විද්‍යාවක් ලෙස සැලකුවද,
                ජ්‍යෝතිඃ ශාස්ත්‍රය නූතන බටහිර විද්‍යාවේ සොයාගැනීම් සහ න්‍යායන්ට
                හාත්පසින්ම විරුද්ධ බව අද බහුලව සැලකේ.
              </p>
            </div>
          </div>
        </div>
      
        <div className="w-full">
          <h1 className="text-6xl text-center font-sinha">udOHh</h1>
          
          <div className="flex flex-wrap items-center justify-center w-full">
         
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default About;
