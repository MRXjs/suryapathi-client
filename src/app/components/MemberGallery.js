"use client";
import React, { useEffect, useState } from "react";
import MemberGalleryCard from "./MemberGalleryCard";
import ReactPaginate from "react-paginate";
import MemberPopupModel from "./MemberPopupModel";
import { gender, nation, age, professions } from "@/db/selecterOptions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MemberGallerySubmitPopup from "./MemberGallerySubmitPopup";
import { getAllMembers } from "../api/member";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import LoadingScreen from "./LoadingScreen";
import { useRouter } from "next/navigation";

const MemberGallery = () => {
  const router = useRouter();

  const [members, setMembers] = useState([]);
  let memberPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [currentPerson, setCurrentPerson] = useState({});

  const [filterValues, setFilterValues] = useState({
    filterGender: "",
    filterNation: "",
    filterAge: "",
    filterJob: "",
  });

  const [selectedCards, setSelectedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [popups, setPopups] = useState({
    openPopupModel: false,
    openMemberGallerySubmit: false,
  });

  // fetch data
  const fetchData = async (pg) => {
    try {
      setIsLoading(true);
      const data = await getAllMembers(pg, filterValues);
      setMembers(data.rows);
      setPageCount(Math.ceil(data.count / memberPerPage));
      setIsLoading(false);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    setMembers([]);
    setCurrentPage(0);
    fetchData(1);
  }, [filterValues]);

  // navigtaion change page
  const changePage = ({ selected }) => {
    setMembers([]);
    setCurrentPage(selected);
    fetchData(selected + 1);
  };

  const filterHandleChange = (e) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
  };

  const cardClickHandler = (person) => {
    setPopups((prevPopups) => ({ ...prevPopups, openPopupModel: true }));
    setCurrentPerson(person);
  };

  const cardSelectHandler = (person) => {
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
    } else {
      // If not selected, add it to the list
      setSelectedCards([...selectedCards, person]);
    }
  };

  //  check if a card is selected
  const isCardSelected = (id) =>
    selectedCards.some((selectedPerson) => selectedPerson.id === id);

  // gallery submit
  const memberGallerySubmitHandler = () => {
    if (selectedCards.length !== 0) {
      setPopups((prevPopups) => ({
        ...prevPopups,
        openMemberGallerySubmit: true,
      }));
    } else {
      toast("ඔබ කිසිවෙකු තෝරාගෙන නැත", {
        type: "error",
      });
    }
  };

  return (
    <div className="min-h-screen ">
      {isLoading ? <LoadingScreen text={"මදක් රැදී සිටින්න"} /> : null}
      <div className="flex flex-row mt-10 lg:mx-24 lg:mt-20 ">
        {/* card  & filter */}
        <div className="flex flex-col items-center justify-center w-full mb-5">
          <div className="">
            {/* title */}
            <div className="mb-10 text-6xl text-center font-sinha">
              idudcslhka ,ehsia;=j
            </div>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row mx-36 bg-[#f9f9f9] px-10 sm:px-24 md:px-36 sm:py-10 py-5 rounded-lg">
            <select
              className="p-2 mb-5 border-2 border-solid rounded-md w-44 sm:mb-0 sm:mx-5"
              value={filterValues.filterGender}
              onChange={filterHandleChange}
              name="filterGender"
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
              value={filterValues.filterNation}
              onChange={filterHandleChange}
              name="filterNation"
            >
              {nation.map((item, index) => (
                <option key={index} value={index === 0 ? "" : index}>
                  {item.value}
                </option>
              ))}
            </select>
            {/* age */}
            <select
              className="p-2 mb-5 border-2 border-solid rounded-md w-44 sm:mb-0 sm:mx-5"
              value={filterValues.filterAge}
              onChange={filterHandleChange}
              name="filterAge"
            >
              {age.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.text}
                </option>
              ))}
            </select>
            {/* job */}
            <select
              className="p-2 mb-5 border-2 border-solid rounded-md w-44 sm:mb-0 sm:mx-5"
              value={filterValues.filterJob}
              onChange={filterHandleChange}
              name="filterJob"
            >
              {professions.map((item, index) => (
                <option key={index} value={index === 0 ? "" : index}>
                  {item.value}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap justify-center min-h-screen my-5 rounded-xl">
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
                forcePage={currentPage}
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 m-2 mt-10 mb-20 sm:gap-5">
            <button
              className="btn-blue"
              onClick={() => router.push("/proposal/memberregistration")}
            >
              අපගෙ වෙබ් පිටුවෙ ලියාපදින්චී වීමට
            </button>
            <button className="btn-red" onClick={memberGallerySubmitHandler}>
              {"තොරාගත් අයගෙ තොරතුරු ලබා ගන්න  "}
            </button>
          </div>
        </div>
      </div>
      <MemberGallerySubmitPopup
        open={popups.openMemberGallerySubmit}
        selectedMembers={selectedCards}
        onClose={() => {
          setPopups((prevPopups) => ({
            ...prevPopups,
            openMemberGallerySubmit: false,
          }));
        }}
      />
    </div>
  );
};

export default MemberGallery;
