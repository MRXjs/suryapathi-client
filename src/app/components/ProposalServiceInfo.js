"use client";
import React from "react";
import RedirectToAstroService from "./RedirectToAstroService";

const ProposalServiceInfo = () => {
  return (
    <div>
      <div className="p-2 m-2 mt-10 text-lg text-center text-black bg-[#cfcfcfee] rounded-lg lg:mx-36 lg:text-xl">
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
      <div className="p-2 m-2 text-lg text-center text-black bg-[#cfcfcfee] rounded-lg lg:mx-36 lg:text-xl">
        ••• සාධාරණ මිල ගනන් යටතේ අපගෙන් ඉටු කරවා ගත හැකිය •••
      </div>

      <div className="p-2 m-2 mt-5 text-lg text-center text-black bg-[#cfcfcfee] rounded-lg lg:mx-36 lg:text-xl">
        ඔබ මා කෙරෙහි තබන විශ්වාසය එලෙසින්ම ආරක්ෂාකර ඔබට ඉහල සේවයක් සැපයමින් සතුට
        පිරුණු කැදැල්ලක් දැකිම මාගේ අරමුණයි.  ඔබට ජය වේවා..
      </div>
      <div className="flex items-center justify-center mt-10 mb-20">
        <RedirectToAstroService
          btnText={"ඔබට පොරොන්දන් ගැලපීම අවශ්‍ය නම්"}
          serviceIndex={1}
        />
      </div>
    </div>
  );
};

export default ProposalServiceInfo;
