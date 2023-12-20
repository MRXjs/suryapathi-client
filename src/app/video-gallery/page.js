import React from "react";
import VideoGallery from "../components/VideoGallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-28 sm:mt-36">
        <h1 className="mb-10 text-6xl text-center font-sinha">úäfhda .e,ßh</h1>
        <VideoGallery />
      </div>
      <Footer />
    </>
  );
};

export default page;
