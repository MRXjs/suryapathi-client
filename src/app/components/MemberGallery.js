"use client";
import React, { useEffect, useState } from "react";
import MemberGalleryCard from "./MemberGalleryCard";
import { BsSearch } from "react-icons/bs";
import SearchBar from "./SearchBar";
import ReactPaginate from "react-paginate";
import MemberPopupModel from "./MemberPopupModel";
import { gender, nation, age } from "@/db/selecterOptions";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import PackageChangePopupModel from "./PackageChangePopupModel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MemberGallerySubmitPopup from "./MemberGallerySubmitPopup";
import { getAllMembers } from "../api/member";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import LoadingScreen from "./LoadingScreen";

const MemberGallery = () => {
  const [members, setMembers] = useState([]);
  let memberPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [currentPerson, setCurrentPerson] = useState({});

  const [filterGender, setFilterGender] = useState("");
  const [filterNation, setFilterNation] = useState("");
  const [filterAge, setFilterAge] = useState("");

  const [isStatusOn, setIsStatusOn] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedCardCount, setSelectedCardCount] = useState(0);
  const [selectedPlanItem, setSelectedPlanItem] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [popups, setPopups] = useState({
    openPopupModel: false,
    openPackageChangePopup: false,
    openMemberGallerySubmit: false,
  });

  // fetch data
  const fetchData = async (pg) => {
    try {
      setIsLoading(true);
      const data = await getAllMembers(
        pg,
        filterAge,
        filterGender,
        filterNation
      );
      setMembers(data.rows);
      setPageCount(Math.ceil(data.count / memberPerPage));
      setIsLoading(false);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    setMembers([]);
    fetchData(1);
  }, [filterGender, filterNation, filterAge]);

  // navigtaion change page
  const changePage = ({ selected }) => {
    setMembers([]);
    fetchData(selected + 1);
  };

  const cardClickHandler = (person) => {
    setPopups((prevPopups) => ({ ...prevPopups, openPopupModel: true }));

    setCurrentPerson(person);
  };

  const cardSelectHandler = (person) => {
    setSelectedPlanItem(
      JSON.parse(localStorage.getItem("selectedPricePlan")).item
    );

    // Check if the person is already selected
    if (
      selectedCards.some((selectedPerson) => selectedPerson.id === person.id)
    ) {
      // If selected, remove it from the list
      setSelectedCards(
        selectedCards.filter(
          (selectedPerson) => selectedPerson.id !== person.id
        )
      );

      // Update the count of selected persons
      setSelectedCardCount(selectedCards.length);
    } else {
      // If not selected, add it to the list
      setSelectedCards([...selectedCards, person]);

      // Update the count of selected persons
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
  const isCardSelected = (id) =>
    selectedCards.some((selectedPerson) => selectedPerson.id === id);

  const packageChangeHandler = () => {
    setIsStatusOn(false);
    setPopups((prevPopups) => ({
      ...prevPopups,
      openPackageChangePopup: true,
    }));
  };

  const memberGallerySubmitHandler = () => {
    if (
      selectedCards.length ===
      JSON.parse(localStorage.getItem("selectedPricePlan")).item
    ) {
      setPopups((prevPopups) => ({
        ...prevPopups,
        openMemberGallerySubmit: true,
      }));

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
    <div className="min-h-screen ">
      {isLoading ? <LoadingScreen text={"මදක් රැදී සිටින්න"} /> : null}
      <div className="flex flex-row mt-20 lg:mt-40 lg:mx-24 ">
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
                <option key={index} value={index === 0 ? "" : index}>
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
                <option key={index} value={index === 0 ? "" : index}>
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
          <div className="flex flex-wrap justify-center min-h-screen my-8 rounded-xl">
            {members.map((person, personIndex) => {
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
            open={popups.openPackageChangePopup}
            onClose={() => {
              setPopups((prevPopups) => ({
                ...prevPopups,
                openPackageChangePopup: false,
              }));
              setIsStatusOn(true);
            }}
          />

          {/* popup model */}
          <div className="">
            <MemberPopupModel
              open={popups.openPopupModel}
              person={currentPerson}
              onClose={() => {
                setPopups((prevPopups) => ({
                  ...prevPopups,
                  openPopupModel: false,
                }));
              }}
            />
            {/* patination */}
            <div>
              <ReactPaginate
                breakLabel="..."
                nextLabel={<GrLinkNext size={20} />}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLabel={<GrLinkPrevious size={20} />}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"h-[50px] flex items-center "}
                pageLinkClassName={
                  "px-2 sm:px-5 py-1 sm:py-2  m-[8px] rounded-[5px] border-2 border-solid border-black hover:bg-black hover:text-white transition duration-300"
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
              className="inline-flex items-center justify-center w-full px-6 py-3 mt-3 mb-2 text-lg text-center text-white bg-blue-500 rounded-md hover:bg-blue-700 h-28 lg:h-auto sm:w-auto sm:mb-0"
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
          open={popups.openMemberGallerySubmit}
          selectedMembers={selectedCards}
          onClose={() => {
            setPopups((prevPopups) => ({
              ...prevPopups,
              openMemberGallerySubmit: false,
            })),
              setIsStatusOn(true);
          }}
        />
      </div>
    </div>
  );
};

export default MemberGallery;
