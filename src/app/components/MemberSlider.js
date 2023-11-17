"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import MemberSliderCard from "./MemberSliderCard";
import { memberSlid } from "../api/member";
import LoadingScreen from "./LoadingScreen";

const MemberSlider = () => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(4);

  // fetchData
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await memberSlid();
      setMembers(data);
      setIsLoading(false);
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Calculate the number of slides to display based on screen width
    const screenWidth = window.innerWidth;
    if (screenWidth < 420) {
      setSlidesPerView(1);
    } else if (screenWidth < 760) {
      setSlidesPerView(2);
    } else if (screenWidth < 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }

    // Update the number of slides whenever the window is resized
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      if (newScreenWidth !== screenWidth) {
        if (newScreenWidth < 420) {
          setSlidesPerView(1);
        } else if (newScreenWidth < 760) {
          setSlidesPerView(2);
        } else if (newScreenWidth < 1200) {
          setSlidesPerView(3);
        } else {
          setSlidesPerView(4);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isLoading ? <LoadingScreen /> : null}
      <div className="mt-10 ">
        <Swiper
          loop={true}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          navigation={true}
          modules={[Navigation]}
          autoplay={{ delay: 2500 }}
        >
          {members.map((person, personIndex) => {
            return (
              <SwiperSlide key={personIndex}>
                <div className="flex items-center justify-center mt-10">
                  <MemberSliderCard person={person} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default MemberSlider;
