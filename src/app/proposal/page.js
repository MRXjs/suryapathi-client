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

const page = () => {
  return (
    <div className="bg-stone-100">
      <Navbar />
      <Header images={weddingImgs} />
      <div className="flex justify-center">
        <NavigateToMemberRegistration />
      </div>
      <div className="p-2  m-2 mt-10 text-lg text-center bg-[#b1f8b7] rounded-lg lg:mx-36 lg:text-xl">
        මම ජොතිශ්‍යය වේදි සුර්යාපති ජයන්ත දිසානායක. මට ලැබෙන බොහො කේන්ද්‍රපත්
        අතර විවහා දෝෂ හා විවහා ප්‍රමාද විම්, සුදුසු සහකරුවෙකු හෝ සහාකාරියක ගලපා
        දෙන ලෙස බොහො අය ඉල්ලිම් කරති. ඊට සාදනිය පිලිතුරක් ලෙස සුර්යාපති මංගල
        සේවය ආරම්භය කලෙමි.
      </div>
      <ul className="flex flex-col items-center my-2 ">
        <li className="w-56 p-4 mb-3 text-lg text-center text-black shadow-lg hover:shadow-xl lg:w-80 lg:text-xl">
          ⭕ මංගල නැකැත් මාලාව
        </li>
        <li className="w-56 p-4 mb-3 text-lg text-center text-black shadow-lg hover:shadow-xl lg:w-80 lg:text-xl">
          ⭕ අෂ්ඨක ඇතුලු පෝරු චාරිත්‍ර
        </li>
        <li className="w-56 p-4 mb-3 text-lg text-center text-black shadow-lg hover:shadow-xl lg:w-80 lg:text-xl">
          ⭕ මංගල චාරිත්‍ර
        </li>
      </ul>
      <div className="p-2 m-2  text-lg text-center bg-[#b1f8b7] rounded-lg lg:mx-36 lg:text-xl">
        ••• සාධාරණ මිල ගනන් යටතේ අපගෙන් ඉටු කරවා ගත හැකිය •••
      </div>

      <div className="p-2 m-2 mt-5 text-lg text-center bg-[#b1f8b7] rounded-lg lg:mx-36 lg:text-xl">
        ඔබ මා කෙරෙහි තබන විශ්වාසය එලෙසින්ම ආරක්ෂාකර ඔබට ඉහල සේවයක් සැපයමින් සතුට
        පිරුණු කැදැල්ලක් දැකිම මාගේ අරමුණයි.  ඔබට ජය වේවා..
      </div>
      <MemberSlider />

      <PricingPlan
        pricingPlans={weddingServicePricingPlans}
        containerClass={
          "grid gap-12 px-4 py-20 mx-auto  lg:gap-8 lg:grid-cols-3 max-w-7xl sm:px-6 lg:px-8"
        }
        pushUrl={"/proposal/membergallery"}
        isClosePopup={false}
      />

      <div className="flex justify-center w-screen mb-10">
        <RedirectToAstroService
          btnText={"ඔබගෙ දරුවාගෙ කෙන්දර පත නිවැරදිව සකස්කරදීමට අවශ්‍ය නම්"}
          serviceIndex={0}
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
