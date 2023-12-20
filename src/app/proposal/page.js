import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { weddingImgs } from "@/db/headerImages";
import PricingPlan from "../components/PricingPlan";
import { weddingServicePricingPlans } from "@/db/pricingPlans";
import MemberSlider from "../components/MemberSlider";
import RedirectToAstroService from "../components/RedirectToAstroService";
import NavigateToMemberRegistration from "../components/NavigateToMemberRegistration";
import MemberGallery from "../components/MemberGallery";
import ProposalServiceInfo from "../components/ProposalServiceInfo";

const page = () => {
  return (
    <div className="bg-stone-100">
      <Navbar />
      <Header images={weddingImgs} />
      <MemberSlider />
      <div>
        <MemberGallery />
      </div>
      <ProposalServiceInfo />
      <div className="flex items-center justify-center mt-10 mb-20">
        <RedirectToAstroService
          btnText={"ඔබට පොරොන්දන් ගැලපීම අවශ්‍ය නම්"}
          serviceIndex={1}
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
