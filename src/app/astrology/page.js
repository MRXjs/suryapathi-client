import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { astrologyServiceImgs } from "@/db/headerImages";
import List from "../components/List";
import { auspicious, services } from "@/db/astrologyService";

const Jothishya = () => {
  return (
    <>
      <Navbar />
      <Header images={astrologyServiceImgs} />
      <div className="flex flex-wrap  items-start justify-center">
        <List ListItems={services} listTitle={"අප සපයන සේවාවන්."} />
        <List ListItems={auspicious} listTitle={"සුබ නැකැත් ලබාදීම."} />
      </div>
      <Footer />
    </>
  );
};

export default Jothishya;
