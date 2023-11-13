"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "@/db/data";
import MemberCard from "./MemberGalleryCard";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import MemberSliderCard from "./MemberSliderCard";
import { memberSlid } from "../api/member";

const MemberSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(4);

  // useEffect(() => {
  //   memberSlid();
  //   console.log("test");
  // }, []);

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
    <div className="mt-10 ">
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((person, personIndex) => {
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
  );
};

export default MemberSlider;
