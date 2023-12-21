"use client";
import React, { useEffect, useState } from "react";
import MemberGalleryCard from "./MemberGalleryCard";
import MemberPopupModel from "./MemberPopupModel";
import { gender, nation, age, professions } from "@/db/selecterOptions";
import "react-toastify/dist/ReactToastify.css";
import MemberGallerySubmitPopup from "./MemberGallerySubmitPopup";
import { getAllMembers } from "../api/member";
import LoadingScreen from "./LoadingScreen";
import { useRouter } from "next/navigation";
import { toastError } from "./toast";

const MemberGallery = () => {
  const router = useRouter();

  const [members, setMembers] = useState([]);
  const [currentPerson, setCurrentPerson] = useState({});

  const [page, setPage] = useState(1);

  const [filterValues, setFilterValues] = useState({
    filterGender: "",
    filterNation: "",
    filterAge: "",
    filterJob: "",
  });

  const [selectedCards, setSelectedCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [showButtons, setShowButtons] = useState(false);

  const [popups, setPopups] = useState({
    openPopupModel: false,
    openMemberGallerySubmit: false,
  });

  // fetch data
  const fetchData = async (pg) => {
    try {
      setIsLoading(true);
      const data = await getAllMembers(pg, filterValues);
      setMembers((prev) => [...prev, ...data.rows]);
      setIsLoading(false);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    setMembers([]);
    fetchData(1);
  }, [filterValues]);

  // infinite scroll handler
  useEffect(() => {
    fetchData(page);
  }, [page]);

  let lastScrollTop = 0;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async (e) => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setIsLoading(true);
        setPage((prev) => prev + 1);
      }
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
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
      removeSelectedCard(person.id);
    } else {
      // If not selected, add it to the list
      setSelectedCards([...selectedCards, person]);
    }
  };

  const removeSelectedCard = (id) => {
    setSelectedCards(
      selectedCards.filter((selectedPerson) => selectedPerson.id !== id)
    );
  };

  //  check if a card is selected
  const isCardSelected = (id) =>
    selectedCards.some((selectedPerson) => selectedPerson.id === id);

  // when scroll memberGallery show btn
  useEffect(() => {
    const handleScroll = () => {
      const memberSection = document.getElementById("memberGallerySection");
      const bounding = memberSection.getBoundingClientRect();
      const threshold = window.innerHeight * 0.8;
      if (bounding.top < threshold && bounding.bottom >= 0) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // gallery submit
  const memberGallerySubmitHandler = () => {
    if (selectedCards.length !== 0) {
      setPopups((prevPopups) => ({
        ...prevPopups,
        openMemberGallerySubmit: true,
      }));
    } else {
      toastError("ඔබ කිසිවෙකු තෝරාගෙන නැත");
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

          <section
            id="memberGallerySection"
            className="flex flex-wrap justify-center min-h-screen my-5 rounded-xl"
          >
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
          </section>

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
          </div>
          <div
            className={`${
              showButtons ? "fixed flex" : "hidden"
            }  z-5 top-16  items-center justify-center gap-2 p-2`}
          >
            <button
              className="h-16 text-sm btn-blue sm:text-lg"
              onClick={() => router.push("/proposal/memberregistration")}
            >
              අපගෙ වෙබ් පිටුවෙ ලියාපදින්චී වීමට
            </button>
            <button
              className="h-16 py-1 text-sm sm:text-lg btn-red animate-pulse"
              onClick={memberGallerySubmitHandler}
            >
              {"තොරාගත් අයගෙ තොරතුරු ලබා ගන්න  "}
            </button>
          </div>
        </div>
      </div>
      <MemberGallerySubmitPopup
        open={popups.openMemberGallerySubmit}
        selectedMembers={selectedCards}
        removeSelectedCard={removeSelectedCard}
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
