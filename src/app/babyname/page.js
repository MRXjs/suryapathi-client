import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { babyNamesImgs } from "@/db/headerImages";
import RedirectToAstroService from "../components/RedirectToAstroService";
import BabyNameReqForm from "../components/BabyNameReqForm";

const BabyName = () => {
  return (
    <>
      <Navbar />
      <Header images={babyNamesImgs} />

      <div className="mt-10 mb-10 text-6xl text-center font-sinha">kï ;eîu</div>

      <div className="p-2 m-2 text-lg font-semibold text-center text-white bg-black rounded-lg lg:mx-36 lg:text-xl">
        අලුත උපන් දරුවගේ උපන් නැකතට අනුව සුබ පාදයෙන් සම්පත් හෝ සාධක හෝ මෛත්‍රී
        හෝ පරම මෛත්‍රී නැකත් වලින් නියමිත සුභ ඝන පිහිටුවා සෙත් කවියක් සේ නියමිත
        අක්ෂර මාලාවන් යොදා නියමිත අර්තයෙන් යුක්තව දරුවගේ අද්‍යාපනය ජයගෙන
        වාසනාවන්ත අනාගතයක් උදාවන පරිදි නමක් නමක් ලබාදීමට අප බැදී සිටින්නෙමු
      </div>

      <div className="p-2 m-2 mb-10 text-lg font-bold text-center text-white bg-black rounded-lg lg:mx-36 lg:text-xl">
        අප විසින් නම් 10ක් ඔබට ලබාදීමට කටයුතු කරන අතර ඉන් ඔබට කැමති නමක් තැබීමට
        හැකියාව ඇත. අයකිරිම Rs1100
      </div>

      <BabyNameReqForm />

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
