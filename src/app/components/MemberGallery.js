"use client";
import React, { useEffect, useState } from "react";
import MemberGalleryCard from "./MemberGalleryCard";
import data from "@/db/data";
import { BsSearch } from "react-icons/bs";
import SearchBar from "./SearchBar";
import ReactPaginate from "react-paginate";
import MemberPopupModel from "./MemberPopupModel";
import { gender, nation, age } from "@/db/selecterOptions";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import PackageChangePopupModel from "./PackageChangePopupModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import MemberGallerySubmitPopup from "./MemberGallerySubmitPopup";

const MemberGallery = () => {
  const router = useRouter();
  const [members, setMembers] = useState(data);
  const [pageNumber, setPageNumber] = useState(0);
  const memberPerPage = 8;
  const pagesVisited = pageNumber * memberPerPage;
  const pageCount = Math.ceil(members.length / memberPerPage);
  const [openPopupModel, setOpenPopupModel] = useState(false);
  const [currentPerson, setCurrentPerson] = useState({});

  const [filterGender, setFilterGender] = useState("");
  const [filterNation, setFilterNation] = useState("");
  const [filterAge, setFilterAge] = useState("");
  const [isStatusOn, setIsStatusOn] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardCount, setSelectedCardCount] = useState(0);
  const [openPackageChangePopup, setOpenPackageChangePopup] = useState(false);
  const [openMemberGallerySubmit, setOpenMemberGallerySubmit] = useState(false);
  const [selectedPlanItem, setSelectedPlanItem] = useState(0);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // filterHandler
  const filterHandler = () => {
    setMembers(
      data.filter((member) => {
        const matchesGender = !filterGender || member.gender === filterGender;
        const matchesNation = !filterNation || member.nation === filterNation;
        const matchesAge =
          !filterAge || (member.age > filterAge - 10 && member.age < filterAge);

        return matchesGender && matchesNation && matchesAge;
      })
    );
  };

  useEffect(filterHandler, [filterGender, filterNation, filterAge]);

  const cardClickHandler = (person) => {
    setOpenPopupModel(true);
    setCurrentPerson(person);
  };

  const cardSelectHandler = (id) => {
    setSelectedPlanItem(
      JSON.parse(localStorage.getItem("selectedPricePlan")).item
    );
    // Check if the card is already selected
    if (selectedCards.includes(id)) {
      // If selected, remove it from the list
      setSelectedCards(selectedCards.filter((cardId) => cardId !== id));

      const indexToRemove = selectedCards.indexOf(id);
      if (indexToRemove !== -1) {
        selectedCards.splice(indexToRemove, 1);
      }
      setSelectedCardCount(selectedCards.length);
    } else {
      // If not selected, add it to the list
      setSelectedCards([...selectedCards, id]);

      setSelectedCardCount(selectedCards.length + 1);
    }
  };

  useEffect(() => {
    if (selectedPlanItem < selectedCards.length) {
      toast(
        "ඔබ තෝරාගත් package එක ප්‍රමානයට වඩා තෝරාගත නොහැක. ඔබට වැඩි ප්‍රමානයක් තොරාගැනිමට අවශ්‍ය නම් පැකෙජය මාරු කරන්න.✔✔",
        {
          type: "error",
        }
      );
      setSelectedCards([]);
      setSelectedCardCount(0);
    }
  }, [selectedCards, selectedCardCount, selectedPlanItem]);

  // Define a function to check if a card is selected
  const isCardSelected = (id) => selectedCards.includes(id);

  const packageChangeHandler = () => {
    setIsStatusOn(false);
    setOpenPackageChangePopup(true);
  };

  const memberGallerySubmitHandler = () => {
    if (
      selectedCards.length ===
      JSON.parse(localStorage.getItem("selectedPricePlan")).item
    ) {
      setOpenMemberGallerySubmit(true);
      setIsStatusOn(false);
    } else {
      toast(
        "ඔබ තෝරාගත් පැකෙජයෙ ප්‍රමානයට වඩා අඩුවෙන් තෝරා ගත නොහැක. ඔබට වෙනත් ප්‍රමානයක් තෝරාගැනිමට අව්ශ්‍ය නම් පැකෙජය මාරු කරන්න.✔✔",
        {
          type: "error",
        }
      );
    }
  };

  return (
    <div className="flex flex-row mt-20 lg:mt-40 lg:mx-24 ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* card  & filter */}
      <div className="flex flex-col items-center justify-center w-full mb-5">
        <div className="">
          {/* title */}
          <div className="mb-10 text-6xl text-center font-sinha">
            idudcslhka ,ehsia;=j
          </div>
        </div>
        {/* filter container */}
        <div className="flex flex-col items-center justify-center sm:flex-row mx-36 bg-[#f9f9f9] px-24 md:px-36 py-10 rounded-lg">
          {/* search form  */}
          {/* <SearchBar /> */}
          {/* gender */}
          <select
            className="p-2 mb-5 border-2 border-solid rounded-md w-44 sm:mb-0 sm:mx-5"
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            id="gender"
          >
            {gender.map((item, index) => (
              <option key={index} value={index === 0 ? "" : item.value}>
                {item.value}
              </option>
            ))}
          </select>
          {/* nation */}
          <select
            className="p-2 mb-5 border-2 border-solid rounded-md sm:mx-5 sm:mb-0 w-44"
            value={filterNation}
            onChange={(e) => setFilterNation(e.target.value)}
            id="nation"
          >
            {nation.map((item, index) => (
              <option key={index} value={index === 0 ? "" : item.value}>
                {item.value}
              </option>
            ))}
          </select>
          {/* age */}
          <select
            className="p-2 mb-5 border-2 border-solid rounded-md sm:mb-0 w-44"
            value={filterAge}
            onChange={(e) => setFilterAge(e.target.value)}
            id="age"
          >
            {age.map((item, index) => (
              <option key={index} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
        </div>
        {/* gallery status */}
        {isStatusOn ? (
          <div
            className={`fixed z-50 opacity-75 top-36 p-3 right-8 bg-[#eee] duration-300 rounded-md`}
          >
            <div>
              <div className="flex flex-col items-center text-4xl ">
                <span className="text-black rounded-full ">
                  {selectedCardCount}
                </span>
                <div className="w-10 h-[1px] bg-black"></div>
                <span className="text-black rounded-full ">
                  {selectedPlanItem}
                </span>
              </div>
            </div>
          </div>
        ) : null}
        <div className="flex flex-wrap justify-center my-8 rounded-xl ">
          {members
            .slice(pagesVisited, pagesVisited + memberPerPage)
            .map((person, personIndex) => {
              return (
                <div key={personIndex}>
                  <MemberGalleryCard
                    key={personIndex}
                    person={person}
                    cardClickHandler={cardClickHandler}
                    cardSelectHandler={cardSelectHandler}
                    isCardSelected={isCardSelected}
                  />
                </div>
              );
            })}
        </div>

        {/* package change popup */}
        <PackageChangePopupModel
          open={openPackageChangePopup}
          onClose={() => {
            setOpenPackageChangePopup(false);
            setIsStatusOn(true);
          }}
        />

        {/* popup model */}
        <div className="">
          <MemberPopupModel
            open={openPopupModel}
            person={currentPerson}
            onClose={() => {
              setOpenPopupModel(false);
            }}
          />
          {/* patination */}
          <div>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next >"
              pageRangeDisplayed={5}
              previousLabel="< Prev"
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"h-[50px] flex items-center "}
              pageLinkClassName={
                "px-5 py-2  m-[8px] rounded-[5px] border-2 border-solid border-black hover:bg-black hover:text-white transition duration-300"
              }
              activeClassName={
                "bg-black text-white  py-3  m-[8px] rounded-[5px]"
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mx-5 ">
          <button
            type="button"
            class="  bg-blue-500 rounded-md hover:bg-blue-700 inline-flex items-center mt-3 justify-center w-full px-6 py-3 mb-2 h-28 lg:h-auto text-lg text-white   sm:w-auto sm:mb-0 text-center "
            onClick={packageChangeHandler}
          >
            පැකේජය මාරු කරන්න
          </button>
          <button
            className="inline-flex items-center justify-center px-6 py-3 mt-3 mb-2 text-lg text-center text-white bg-red-500 rounded-md h-28 lg:h-auto hover:bg-red-700 sm:w-auto sm:mb-0"
            onClick={memberGallerySubmitHandler}
          >
            {"තොරාගත් අයගෙ තොරතුරු ලබා ගන්න >>"}
          </button>
        </div>
      </div>
      <MemberGallerySubmitPopup
        open={openMemberGallerySubmit}
        selectedMembers={selectedCards}
        onClose={() => {
          setOpenMemberGallerySubmit(false), setIsStatusOn(true);
        }}
      />
    </div>
  );
};

export default MemberGallery;
