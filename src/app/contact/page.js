import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactComp from "../components/ContactComp";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" mt-20 mb-5 sm:my-0">
        <ContactComp />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
