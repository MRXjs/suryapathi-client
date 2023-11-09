"use client";
import Image from "next/image";
import ReqContactForm from "./ReqContactForm";
import data from "@/db/data";
import { useRouter } from "next/navigation";

const MemberGallerySubmitPopup = ({ open, selectedMembers, onClose }) => {
  const router = useRouter();
  if (!open) return null;

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div className="flex items-center justify-center w-screen md:w-[60%] lg:w-[50%] xl:w-[40%] h-full p-5 my-10 overflow-y-auto bg-white">
        <div
          className=""
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <p
            onClick={onClose}
            className="fixed bg-[#eee] text-center pb-2 px-2 rounded-lg right-[6%] top-1 sm:top-5 text-4xl cursor-pointer  text-[#a82e2e] hover:text-[#ff5454]"
          >
            x
          </p>

          <h1 className="text-xl text-center mt-96 sm:mt-3">ඔබ තෝරාගත් අය</h1>
          <div className="flex flex-row flex-wrap items-center justify-center gap-3 ">
            {data.map((person) => {
              return selectedMembers.map((selectedMember) => {
                if (person.id == selectedMember) {
                  return (
                    <div
                      key={person.id}
                      className="flex items-center justify-center p-4 shadow-xl cursor-pointer"
                    >
                      <Image
                        src={person.img}
                        alt={person.name}
                        className="w-16 rounded-full"
                      />
                    </div>
                  );
                }
              });
            })}
          </div>

          {/* content */}
          <div className="flex flex-col items-center justify-center gap-3 mb-5 ">
            <ReqContactForm
              formSubmit={(e) => {
                e.preventDefault();
                if (e.target.paymentMethod.value == "bank transfer") {
                  router.push("/payment");
                } else {
                  console.log(e.target.paymentMethod.value);
                }
              }}
            />
            <button
              type="button"
              class="w-full sm:w-80 py-3 font-bold text-center text-white bg-[#c22727] rounded-lg shadow-lg hover:text-black hover:bg-[#ff5151]   "
              onClick={onClose}
            >
              අවලංගු කරන්න
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberGallerySubmitPopup;