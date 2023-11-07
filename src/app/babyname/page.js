import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { babyNamesImgs } from "@/db/headerImages";
import PricingPlan from "../components/PricingPlan";
import { babyNamesPricingPlans } from "@/db/pricingPlans";
import RedirectToAstroService from "../components/RedirectToAstroService";

const BabyName = () => {
  return (
    <>
      <Navbar />
      <Header images={babyNamesImgs} />
      <div className="mt-20">
        <div className="mx-2 text-2xl font-bold text-center lg:text-5xl lg:mb-10">
          නම් තැබීම
        </div>
      </div>
      <div className="p-2 m-2 text-lg text-center bg-[#b1f8b7] rounded-lg lg:mx-36 lg:text-xl">
        අලුත උපන් දරුවගේ උපන් නැකතට අනුව සුබ පාදයෙන් සම්පත් හෝ සාධක හෝ මෛත්‍රී
        හෝ පරම මෛත්‍රී නැකත් වලින් නියමිත සුභ ඝන පිහිටුවා සෙත් කවියක් සේ නියමිත
        අක්ෂර මාලාවන් යොදා නියමිත අර්තයෙන් යුක්තව දරුවගේ අද්‍යාපනය ජයගෙන
        වාසනාවන්ත අනාගතයක් උදාවන පරිදි නමක් නමක් ලබාදීමට අප බැදී සිටින්නෙමු
      </div>
      <div className="mt-5 text-xl font-bold text-center lg:text-3xl lg:mt-6">
        පහත තොරතුරු ලබාදෙන්න
      </div>
      <ul className="flex flex-col items-center my-2 ">
        <li className="w-56 p-4 mb-3 text-lg text-center text-black shadow-lg hover:shadow-xl lg:w-80 lg:text-xl">
          උපන් දිනය{" "}
        </li>
        <li className="w-56 p-4 mb-3 text-lg text-center text-black shadow-lg hover:shadow-xl lg:w-80 lg:text-xl">
          උපන් වෙලාව{" "}
        </li>
        <li className="w-56 p-4 mb-3 text-lg text-center text-black shadow-lg hover:shadow-xl lg:w-80 lg:text-xl">
          උපන් ස්තානය{" "}
        </li>
        <li className="w-56 p-4 mb-3 text-lg text-center text-black shadow-lg hover:shadow-xl lg:w-80 lg:text-xl">
          ස්ත්‍රී/ පුරුශ බව{" "}
        </li>
        <li className="w-56 p-4 mb-3 text-lg text-center text-black shadow-lg hover:shadow-xl lg:w-80 lg:text-xl">
          ආසන්න නගරය{" "}
        </li>
        <li className="w-56 p-4 mb-3 text-lg text-center text-black shadow-lg hover:shadow-xl lg:w-80 lg:text-xl">
          බලාපොරොත්තු වන නම් (දේශීය සින්හල නම් බටහිර නම් / දේශීය විදේශිය නම් ){" "}
        </li>
      </ul>

      <div className="text-center bg-[#b1f8b7] p-2 text-lg m-2 mb-10 rounded-lg lg:mx-36 lg:text-xl">
        අප විසින් නම් 10ක් ඔබට ලබාදීමට කටයුතු කරන අතර ඉන් ඔබට කැමති නමක් තැබීමට
        හැකියාව ඇත.
      </div>

      <PricingPlan
        pricingPlans={babyNamesPricingPlans}
        containerClass={
          "grid  gap-12 px-4 py-20 mx-auto  lg:gap-8 place-items-center max-w-7xl sm:px-6 lg:px-8 "
        }
        pushUrl={"/babyname/form"}
      />

      <div className="flex justify-center w-screen mb-16">
        <RedirectToAstroService
          btnText={"ඔබගෙ දරුවාගෙ කෙන්දර පත නිවැරදිව සකස්කරදීමට අවශ්‍ය නම්"}
          serviceIndex={0}
        />
      </div>

      <Footer />
    </>
  );
};

export default BabyName;
