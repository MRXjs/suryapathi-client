"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import astrologyImg from "../../../public/landing-page/astrology-service.jpg";
import babyNamesImg from "../../../public/landing-page/baby-names.jpg";
import weddingServiceImg from "../../../public/landing-page/wedding-service.jpg";
import { useRouter } from "next/navigation";
import Footer from "./Footer";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen min-h-screen mt-16 mb-5 bg-stone-100">
        <h1 className="text-6xl text-center font-sinha ">
          Tng wjYH fiajdj f;dard .kak
        </h1>
        <div>
          <div className="flex flex-wrap items-center justify-center group ">
            <Image
              onClick={() => router.push("/astrology")}
              alt=""
              src={astrologyImg}
              className="m-3 sm:m-5 rounded-xl lg:group-hover:blur-sm hover:!blur-none cursor-pointer lg:group-hover:scale-[0.85] hover:!scale-105 duration-500 w-48 sm:w-64 lg:w-80 xl:w-96 2xl:w-[450px]"
            />

            <Image
              onClick={() => router.push("/proposal")}
              alt=""
              src={weddingServiceImg}
              className="m-3 sm:m-5 rounded-xl lg:group-hover:blur-sm hover:!blur-none cursor-pointer lg:group-hover:scale-[0.85] hover:!scale-105 duration-500 w-48 sm:w-64 lg:w-80 xl:w-96 2xl:w-[450px]"
            />
            <Image
              onClick={() => router.push("/babyname")}
              alt=""
              src={babyNamesImg}
              className="m-3 sm:m-5 rounded-xl lg:group-hover:blur-sm hover:!blur-none cursor-pointer lg:group-hover:scale-[0.85] hover:!scale-105 duration-500 w-48 sm:w-64 lg:w-80 xl:w-96 2xl:w-[450px]"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
