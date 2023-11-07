import Footer from "@/app/components/Footer";
import LoadingScreen from "@/app/components/LoadingScreen";
import Navbar from "@/app/components/Navbar";
import ProposalMemberRegForm from "@/app/components/proposal/ProposalMemberRegForm";
import React from "react";

const page = () => {
  return (
    <main className="w-screen ">
      <Navbar />
      <ProposalMemberRegForm />
      <Footer />
    </main>
  );
};

export default page;
