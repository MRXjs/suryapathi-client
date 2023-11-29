import React from "react";
import VideoGallery from "../components/VideoGallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-28">
        <h1 className="text-4xl lg:text-5xl font-semibold text-center text-[#646464] mb-10">
          වීඩියෝ ගැලරිය
        </h1>
        <VideoGallery />
      </div>
      <Footer />
    </>
  );
};

export default page;
