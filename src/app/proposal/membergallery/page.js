import Footer from "@/app/components/Footer";
import MemberGallery from "@/app/components/MemberGallery";
import Navbar from "@/app/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <MemberGallery />
      <Footer />
    </div>
  );
};

export default page;
