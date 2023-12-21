import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { weddingImgs } from "@/db/headerImages";
import MemberSlider from "../components/MemberSlider";
import MemberGallery from "../components/MemberGallery";
import ProposalServiceInfo from "../components/ProposalServiceInfo";

const page = () => {
  return (
    <div className="bg-stone-100">
      <Navbar />
      <Header images={weddingImgs} />
      <MemberSlider />
      <ProposalServiceInfo />
      <div>
        <MemberGallery />
      </div>
    </div>
  );
};

export default page;
