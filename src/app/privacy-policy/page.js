import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { RxDotFilled } from "react-icons/rx";

const page = () => {
  return (
    <main className="w-screen min-h-screen ">
      <Navbar />
      <article className="mt-20 mb-10 lg:mt-28">
        <h1 className="mb-5 text-5xl text-center xl:text-6xl">
          රහස්‍යතා ප්‍රතිපත්තිය
        </h1>
        <div className="flex flex-col items-center justify-center m-2 lg:m-10">
          <div className="text-xl xl:text-2xl text-[#646464]  text-center xl:w-[75%] ">
            ඔබ අපගේ සේවාව භාවිතා කරන විට පුද්ගලික දත්ත එකතු කිරීම, භාවිතා කිරීම
            සහ හෙළිදරව් කිරීම සම්බන්ධයෙන් අපගේ ප්‍රතිපත්ති සහ එම දත්ත සමඟ ඔබ
            සම්බන්ධ කර ඇති තේරීම් පිළිබඳව මෙම පිටුව ඔබට දන්වයි. සේවාව සැපයීමට සහ
            වැඩිදියුණු කිරීමට අපි ඔබේ දත්ත භාවිතා කරමු. සේවාව භාවිතා කිරීමෙන්,
            ඔබ මෙම ප්‍රතිපත්තියට අනුකූලව තොරතුරු රැස් කිරීම සහ භාවිතයට එකඟ වේ.
            මෙම රහස්‍යතා ප්‍රතිපත්තියේ වෙනත් ආකාරයකින් නිර්වචනය කර නොමැති නම්,
            මෙම රහස්‍යතා ප්‍රතිපත්තියේ භාවිතා වන නියමයන් අපගේ නියම සහ කොන්දේසි
            වල ඇති අර්ථයන්ම ඇත.
          </div>
          <ul className="mt-10 xl:w-[65%] ">
            <li className="my-10">
              <div className="p-5 rounded-lg shadow-lg cursor-pointer hover:bg-white">
                <div className="flex items-start ">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl xl:text-2xl font-semibold text-[#646464]">
                    තොරතුරු රැස් කිරීම සහ භාවිතය
                  </h3>
                </div>
                <p className="ml-6 xl:text-lg">
                  ඔබට අපගේ සේවාව සැපයීමට සහ වැඩිදියුණු කිරීමට අපි විවිධ අරමුණු
                  සඳහා විවිධ තොරතුරු වර්ග කිහිපයක් එකතු කරමු.
                </p>
              </div>
            </li>
            <li className="my-10">
              <div className="p-5 shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    එකතු කරන ලද දත්ත වර්ග
                  </h3>
                </div>
                <div className="mt-5 ml-6">
                  <h4 className="my-1 text-lg xl:text-xl font-semibold text-[#646464]">
                    පෞද්ගලික දත්ත
                  </h4>
                  <p className="xl:text-lg">
                    අපගේ සේවාව භාවිතා කරන අතරතුර, ඔබව සම්බන්ධ කර ගැනීමට හෝ හඳුනා
                    ගැනීමට (පුද්ගලික දත්ත) භාවිතා කළ හැකි ඇතැම් පුද්ගලිකව
                    හඳුනාගත හැකි තොරතුරු ලබා දෙන ලෙස අපි ඔබෙන් ඉල්ලා සිටිය හැක.
                    පුද්ගලිකව හඳුනාගත හැකි තොරතුරුවලට ඇතුළත් විය හැකි නමුත් ඒවාට
                    සීමා නොවේ.
                  </p>
                  <ul className="flex flex-col justify-center mt-5 mb-3">
                    <li className="flex items-start">
                      <RxDotFilled size={24} />
                      <p className="xl:text-lg">දුරකථන අංකය</p>
                    </li>
                    <li className="flex items-start">
                      {" "}
                      <RxDotFilled size={24} />
                      <p className="xl:text-lg">ජාතික හැඳුනුම්පත් විස්තර</p>
                    </li>
                    <li className="flex items-start">
                      {" "}
                      <RxDotFilled size={24} />
                      <p className="xl:text-lg">ඡායා රූප</p>
                    </li>
                  </ul>
                </div>
                <div className="mt-5 ml-6">
                  <h4 className="my-1 text-lg xl:text-xl font-semibold text-[#646464]">
                    භාවිත දත්ත
                  </h4>
                  <p className="mt-2 xl:text-lg">
                    ඔබ අපගේ සේවාවට පිවිසෙන විට හෝ ඔබ ජංගම උපාංගයක් මගින් හෝ
                    සේවාව වෙත ප්‍රවේශ වන විට (භාවිත දත්ත) ඔබගේ බ්‍රවුසරය එවන
                    තොරතුරු ද අපි රැස් කළ හැක.
                  </p>
                  <p className="mt-2 xl:text-lg">
                    මෙම භාවිත දත්තවලට ඔබේ පරිගණකයේ අන්තර්ජාල කෙටුම්පත් ලිපිනය
                    (උදා: IP ලිපිනය), බ්‍රවුසර වර්ගය, බ්‍රවුසර අනුවාදය, ඔබ
                    පිවිසෙන අපගේ සේවාවේ පිටු, ඔබ පැමිණි වේලාව සහ දිනය, එම පිටු
                    සඳහා ගත කළ කාලය, අනන්‍ය වැනි තොරතුරු ඇතුළත් විය හැක. උපාංග
                    හඳුනාගැනීම් සහ අනෙකුත් රෝග විනිශ්චය දත්ත.
                  </p>
                  <p className="mt-2 xl:text-lg">
                    ඔබ ජංගම උපාංගයක් මඟින් හෝ හරහා සේවාවට ප්‍රවේශ වූ විට, මෙම
                    භාවිත දත්තවලට ඔබ භාවිත කරන ජංගම උපාංගයේ වර්ගය, ඔබේ ජංගම
                    උපාංගයේ අනන්‍ය ID, ඔබේ ජංගම උපාංගයේ IP ලිපිනය, ඔබේ ජංගම
                    මෙහෙයුම් පද්ධතිය, වර්ගය වැනි තොරතුරු ඇතුළත් විය හැක. ඔබ
                    භාවිතා කරන ජංගම අන්තර්ජාල බ්‍රවුසරය, අද්විතීය උපාංග
                    හඳුනාගැනීම් සහ වෙනත් රෝග විනිශ්චය දත්ත.
                  </p>
                </div>
                <div className="mt-5 ml-6 xl:text-lg">
                  <h4 className="my-1 text-lg font-semibold text-[#646464]">
                    ලුහුබැඳීම සහ කුකීස් දත්ත
                  </h4>
                  <p className="mt-2 xl:text-lg">
                    අපගේ සේවාවේ ක්‍රියාකාරකම් නිරීක්ෂණය කිරීමට සහ ඇතැම් තොරතුරු
                    රඳවා ගැනීමට අපි කුකීස් සහ ඒ හා සමාන ලුහුබැඳීමේ තාක්ෂණයන්
                    භාවිතා කරමු.
                  </p>
                  <p className="mt-2 xl:text-lg">
                    කුකීස් යනු නිර්නාමික අනන්‍ය හඳුනාගැනීමක් ඇතුළත් කුඩා දත්ත
                    ප්‍රමාණයක් සහිත ගොනු වේ. කුකීස් වෙබ් අඩවියකින් ඔබගේ
                    බ්‍රවුසරයට යවා ඔබගේ උපාංගයේ ගබඩා කර ඇත. තොරතුරු රැස් කිරීමට
                    සහ ලුහුබැඳීමට සහ අපගේ සේවාව වැඩිදියුණු කිරීමට සහ විශ්ලේෂණය
                    කිරීමට බීකන්ස්, ටැග් සහ ස්ක්‍රිප්ට් ද භාවිතා කරන ලුහුබැඳීමේ
                    තාක්ෂණයන් වේ.
                  </p>
                  <p className="mt-2 xl:text-lg">
                    ඔබට ඔබගේ බ්‍රවුසරයට සියලුම කුකීස් ප්‍රතික්ෂේප කිරීමට හෝ
                    කුකියක් යවන විට සඳහන් කිරීමට උපදෙස් දිය හැක. කෙසේ වෙතත්, ඔබ
                    කුකීස් පිළිගන්නේ නැතිනම්, ඔබට අපගේ සේවාවේ සමහර කොටස් භාවිතා
                    කිරීමට නොහැකි විය හැක.
                  </p>
                </div>
              </div>
            </li>
            <li className="my-10">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    දත්ත භාවිතය
                  </h3>
                </div>

                <ul className="xl:ml-8">
                  <li className="flex mt-2 ">
                    <RxDotFilled size={24} className="shrink-0" />
                    <p className="xl:text-lg"> සේවාව සැපයීම සහ නඩත්තු කිරීම</p>
                  </li>
                  <li className="flex mt-2">
                    <RxDotFilled size={24} className="shrink-0" />
                    <p className="xl:text-lg">
                      අපගේ සේවාවේ වෙනස්කම් පිළිබඳව ඔබට දැනුම් දීමට
                    </p>
                  </li>
                  <li className="flex mt-2">
                    <RxDotFilled size={24} className="shrink-0" />
                    <p className="xl:text-lg">
                      ඔබ එසේ කිරීමට තෝරා ගන්නා විට අපගේ සේවාවේ අන්තර්ක්‍රියාකාරී
                      විශේෂාංගවලට සහභාගී වීමට ඔබට ඉඩ සැලසීමට
                    </p>
                  </li>
                  <li className="flex mt-2">
                    <RxDotFilled size={24} className="shrink-0" />
                    <p className="xl:text-lg">
                      පාරිභෝගික රැකවරණය සහ සහාය ලබා දීම සඳහා
                    </p>
                  </li>
                  <li className="flex mt-2">
                    <RxDotFilled size={24} className="shrink-0" />
                    <p className="xl:text-lg">
                      අපට සේවාව වැඩිදියුණු කළ හැකි වන පරිදි විශ්ලේෂණය හෝ වටිනා
                      තොරතුරු සැපයීමට
                    </p>
                  </li>
                  <li className="flex mt-2">
                    <RxDotFilled size={25} className="shrink-0" />
                    <p className="xl:text-lg">
                      {" "}
                      සේවාවේ භාවිතය නිරීක්ෂණය කිරීමට
                    </p>
                  </li>
                  <li className="flex mt-2">
                    <RxDotFilled size={25} className=" shrink-0" />
                    <p className="xl:text-lg">
                      තාක්ෂණික ගැටළු හඳුනා ගැනීම, වැළැක්වීම සහ විසඳීම
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="my-5">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    දත්ත මාරු කිරීම
                  </h3>
                </div>
                <p className="mt-2 ml-6 xl:text-lg">
                  පුද්ගලික දත්ත ඇතුළුව ඔබේ තොරතුරු, ඔබේ ප්‍රාන්තයෙන්, පළාතෙන්,
                  රටෙන් හෝ වෙනත් රාජ්‍ය බල ප්‍රදේශයෙන් පිටත පිහිටි පරිගණක වෙත
                  මාරු කළ හැකිය - සහ පවත්වාගෙන යනු ලැබේ - දත්ත ආරක්ෂණ නීති ඔබේ
                  බල ප්‍රදේශයට වඩා වෙනස් විය හැකිය.
                </p>
                <p className="mt-2 ml-6 xl:text-lg">
                  ඔබ ශ්‍රී ලංකාවෙන් පිටත පිහිටා ඇති අතර අපට තොරතුරු සැපයීමට තෝරා
                  ගන්නේ නම්, අපි පුද්ගලික දත්ත ඇතුළු දත්ත ශ්‍රී ලංකාවට මාරු කර
                  එහි ක්‍රියා කරන බව කරුණාවෙන් සලකන්න.
                </p>
                <p className="mt-2 ml-6 xl:text-lg">
                  පුද්ගලික දත්ත ඇතුළුව ඔබේ තොරතුරු, ඔබේ ප්‍රාන්තයෙන්, පළාතෙන්,
                  රටෙන් හෝ වෙනත් රාජ්‍ය බල ප්‍රදේශයෙන් පිටත පිහිටි පරිගණක වෙත
                  මාරු කළ හැකිය - සහ පවත්වාගෙන යනු ලැබේ - දත්ත ආරක්ෂණ නීති ඔබේ
                  බල ප්‍රදේශයට වඩා වෙනස් විය හැකිය.
                </p>
                <p className="mt-2 ml-6 xl:text-lg">
                  ඔබේ දත්ත සුරක්ෂිතව සහ මෙම රහස්‍යතා ප්‍රතිපත්තියට අනුකූලව සලකන
                  බව සහතික කිරීමට අවශ්‍ය සියලු පියවර සාධාරණ ලෙස ගනු ලබන අතර ඔබේ
                  පුද්ගලික දත්ත කිසිදු සංවිධානයකට හෝ රටකට පැවරීම සිදු නොවේ. ඔබගේ
                  දත්ත සහ අනෙකුත් පුද්ගලික තොරතුරු වල ආරක්ෂාව ඇතුළුව ප්‍රමාණවත්
                  පාලනයක් ඇත.
                </p>
              </div>
            </li>
            <li className="my-5">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    දත්ත හෙළිදරව් කිරීම
                  </h3>
                </div>

                <ul className="ml-6">
                  <li className="flex justify-start mt-2">
                    <RxDotFilled size={24} />
                    <p className="xl:text-lg">නීතිමය වගකීමකට අනුකූල වීම සඳහා</p>
                  </li>
                  <li className="flex justify-start mt-2">
                    <div className=" shrink-0">
                      <RxDotFilled size={24} />
                    </div>
                    <p className="xl:text-lg">
                      Suryapathi හි අයිතිවාසිකම් හෝ දේපළ ආරක්ෂා කිරීම සහ ආරක්ෂා
                      කිරීම
                    </p>
                  </li>
                  <li className="flex justify-start mt-2">
                    <div className="shrink-0">
                      <RxDotFilled size={24} />
                    </div>
                    <p className="xl:text-lg">
                      සේවාව භාවිතා කරන්නන්ගේ හෝ මහජනතාවගේ පුද්ගලික ආරක්ෂාව
                      ආරක්ෂා කිරීම
                    </p>
                  </li>
                  <li className="flex justify-start mt-2">
                    <div className="shrink-0">
                      <RxDotFilled size={25} />
                    </div>
                    <p className="xl:text-lg">
                      නීතිමය වගකීම් වලින් ආරක්ෂා වීමට
                    </p>
                  </li>
                </ul>
              </div>
            </li>
            <li className="my-5">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    දත්ත ආරක්ෂාව
                  </h3>
                </div>
                <p className="mt-2 ml-6 xl:text-lg">
                  ඔබගේ පුද්ගලික තොරතුරු අපට ලබා දීමේ ඔබගේ විශ්වාසය අපි අගය කරමු,
                  එබැවින් අපි එය ආරක්ෂා කිරීම සඳහා වාණිජමය වශයෙන් පිළිගත හැකි
                  ක්‍රම භාවිතා කිරීමට උත්සාහ කරමු. නමුත් අන්තර්ජාලය හරහා
                  සම්ප්‍රේෂණය කිරීමේ කිසිදු ක්‍රමයක් හෝ ඉලෙක්ට්‍රොනික ගබඩා
                  කිරීමේ ක්‍රමයක් 100% ආරක්ෂිත සහ විශ්වාසදායක නොවන බව මතක තබා
                  ගන්න, අපට එහි නිරපේක්ෂ ආරක්ෂාව සහතික කළ නොහැක.
                </p>
              </div>
            </li>
            <li className="my-5">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    දත්ත මකා දැමීම
                  </h3>
                </div>
                <p className="mt-2 ml-6 xl:text-lg">
                  සේවාවේ නියමයන් සහ කොන්දේසි වලට අනුකූලව ඔබේ ගිණුමේ ඡායාරූපය,
                  දුරකථන අංකය, ලිපිනය සහ හැඳුනුම්පත් විස්තර පාරිභෝගික ආරක්ෂාව
                  සැලකිල්ලට ගනිමින් ඔබේ ගිණුම ආපසු ගැනීම සඳහා අයදුම් කළ දින සිට
                  දින 180 කට පසු ඔබේ ගිණුමෙන් ඉවත් කරනු ලැබේ. එම දින 180 තුළ ඔබේ
                  ගිණුම යෝජනා ලෙස නොපෙන්වන බව කරුණාවෙන් සලකන්න.
                </p>
              </div>
            </li>
            <li className="my-5">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    සේවා සපයන්නන්
                  </h3>
                </div>
                <p className="mt-2 ml-6 xl:text-lg">
                  පහත හේතූන් නිසා අපි තුන්වන පාර්ශ්ව සමාගම් සහ පුද්ගලයන් සේවයේ
                  යෙදවිය හැක:
                </p>
                <ul className="mt-4 ml-6">
                  <li className="flex mt-2">
                    <RxDotFilled size={24} />
                    <p className="xl:text-lg">අපගේ සේවාව පහසු කිරීම සඳහා</p>
                  </li>
                  <li className="flex mt-2">
                    <RxDotFilled size={24} />
                    <p className="xl:text-lg">අප වෙනුවෙන් සේවාව සැපයීමට</p>
                  </li>
                  <li className="flex mt-2">
                    <RxDotFilled size={24} />
                    <p className="xl:text-lg">
                      සේවා සම්බන්ධ සේවාවන් ඉටු කිරීම සඳහා; හෝ
                    </p>
                  </li>
                  <li className="flex mt-2">
                    <div className=" shrink-0">
                      <RxDotFilled size={24} />
                    </div>
                    <p className="xl:text-lg">
                      අපගේ සේවාව භාවිතා කරන ආකාරය විශ්ලේෂණය කිරීමට අපට සහාය
                      වීමට.
                    </p>
                  </li>
                </ul>
                <p className="mt-2 ml-6 xl:text-lg">
                  මෙම තෙවන පාර්ශවයන්ට ඔබගේ පුද්ගලික තොරතුරු වෙත ප්‍රවේශය ඇති බව
                  මෙම සේවාව භාවිතා කරන්නන්ට දැනුම් දීමට අපට අවශ්‍යය. හේතුව ඔවුන්
                  වෙත පැවරී ඇති කාර්යයන් අප වෙනුවෙන් ඉටු කිරීමයි. කෙසේ වෙතත්,
                  තොරතුරු හෙළි නොකිරීමට හෝ වෙනත් අරමුණක් සඳහා භාවිතා නොකිරීමට
                  ඔවුන් බැඳී සිටී.
                </p>
              </div>
            </li>
            <li className="my-5">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    වෙනත් අඩවි වෙත සබැඳි
                  </h3>
                </div>
                <p className="mt-2 ml-6 xl:text-lg">
                  අපගේ සේවාව අප විසින් ක්‍රියාත්මක නොකරන වෙනත් වෙබ් අඩවි වෙත
                  සබැඳි අඩංගු විය හැක. ඔබ තෙවන පාර්ශවීය සබැඳියක් ක්ලික් කළහොත්,
                  ඔබව එම තෙවන පාර්ශවයේ වෙබ් අඩවියට යොමු කරනු ඇත. ඔබ පිවිසෙන සෑම
                  වෙබ් අඩවියකම රහස්‍යතා ප්‍රතිපත්තිය සමාලෝචනය කරන ලෙස අපි ඔබට
                  තරයේ අවවාද කරමු.
                </p>
                <p className="mt-2 ml-6 xl:text-lg">
                  අපට කිසිදු තෙවන පාර්ශවීය වෙබ් අඩවියක හෝ සේවාවන්හි අන්තර්ගතය,
                  රහස්‍යතා ප්‍රතිපත්ති හෝ භාවිතයන් පිළිබඳව කිසිදු පාලනයක් නොමැති
                  අතර වගකීමක් භාර නොගනිමු.
                </p>
              </div>
            </li>
            <li className="my-5">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    ළමා පෞද්ගලිකත්වය
                  </h3>
                </div>
                <p className="mt-2 ml-6 xl:text-lg">
                  අපගේ සේවාව වයස අවුරුදු 18ට අඩු (ළමයින්) කිසිවකුට ආමන්ත්‍රණය
                  නොකරයි.
                </p>
                <p className="mt-2 ml-6 xl:text-lg">
                  අපි දැනුවත්ව වයස අවුරුදු 18ට අඩු කිසිවකුගෙන් පුද්ගලිකව හඳුනාගත
                  හැකි තොරතුරු රැස් නොකරමු. ඔබ දෙමාපියෙකු හෝ භාරකරුවෙකු නම් සහ
                  ඔබේ දරුවන් අපට පුද්ගලික දත්ත ලබා දී ඇති බව ඔබ දන්නේ නම්,
                  කරුණාකර අප හා සම්බන්ධ වන්න. දෙමව්පියන්ගේ කැමැත්ත තහවුරු
                  කිරීමකින් තොරව අපි දරුවන්ගෙන් පුද්ගලික දත්ත එකතු කර ඇති බව අප
                  දැනුවත් වුවහොත්, එම තොරතුරු අපගේ සේවාදායකයන්ගෙන් ඉවත් කිරීමට
                  අපි පියවර ගනිමු.
                </p>
              </div>
            </li>
            <li className="my-5">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    මෙම රහස්‍යතා ප්‍රතිපත්තියට වෙනස්කම්
                  </h3>
                </div>
                <p className="mt-2 ml-6 xl:text-lg">
                  අපි අපගේ රහස්‍යතා ප්‍රතිපත්තිය කලින් කලට යාවත්කාලීන කළ හැක. මේ
                  අනුව, කිසියම් වෙනසක් සඳහා මෙම පිටුව වරින් වර සමාලෝචනය කිරීමට
                  ඔබට උපදෙස් දෙනු ලැබේ. මෙම පිටුවේ නව රහස්‍යතා ප්‍රතිපත්තිය පළ
                  කිරීමෙන් අපි ඔබට කිසියම් වෙනස්කමක් දන්වන්නෙමු. මෙම වෙනස්කම්
                  මෙම පිටුවේ පළ කළ වහාම ක්‍රියාත්මක වේ.
                </p>
              </div>
            </li>
            <li className="my-5">
              <div className="p-2 rounded-lg shadow-lg hover:bg-white">
                <div className="flex items-center">
                  <RxDotFilled size={25} />
                  <h3 className="text-xl font-semibold text-[#646464] xl:text-2xl">
                    අපව අමතන්න
                  </h3>
                </div>
                <p className="mt-2 ml-6 xl:text-lg">
                  අපගේ රහස්‍යතා ප්‍රතිපත්තිය පිළිබඳව ඔබට කිසියම් ප්‍රශ්නයක් හෝ
                  යෝජනා තිබේ නම් අප හා සම්බන්ධ වීමට පසුබට නොවන්න.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default page;
