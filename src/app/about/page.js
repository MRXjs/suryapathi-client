import Image from "next/image";
import React from "react";
import ProfileImg from "../../../public/profile.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="flex items-center min-h-screen ">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
            {/* text */}
            <div className="flex-1 text-center font-secondary lg:text-left">
              <h1 className="text-[55px]  font-sinha leading-[0.8] lg:text-[110px]">
                iq¾hdm;s chka; Èidkdhl
              </h1>

              <p className="max-w-lg mx-auto mt-10 mb-8 lg:mx-0">
                මම ශක්තිමත්ව අභිමානවත් පදනමක සිට අභිමානවත් මෙන්ම උත්තරිතර
                විශිෂ්ට වු මෙහෙවරක යෙදෙන්නෙමි මෙය දුර්ලභ වු විෂ‍යක් ලෙසත්
                අනාගතයට රැකබලාගනිමින් දැයේ මිනිසුන්ට සෙත සලසන්නට ගෞරවයෙන් දායාද
                කරමි.
              </p>
              <div className="flex items-center mx-auto mb-12 max-w-max gap-x-6 lg:mx-0">
                <Link
                  href={"/contact"}
                  className="p-2 text-center text-white transition-all duration-300 bg-black border border-transparent border-solid rounded-md btn-link hover:bg-transparent hover:text-black hover:border-black"
                >
                  සම්බන්ද කරගන්න
                </Link>
                <Link
                  href={"/video-gallery"}
                  className="p-2 text-center text-white transition-all duration-300 bg-black border border-transparent border-solid rounded-md w-36 btn-link hover:bg-transparent hover:text-black hover:border-black"
                >
                  විඩියෝ
                </Link>
              </div>
            </div>
            {/* image */}
            <div className="flex items-center justify-center">
              <div className="flex-1 lg:flex max-w-[320px] lg:max-w-[482px] ">
                <Image src={ProfileImg} alt="profile image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
