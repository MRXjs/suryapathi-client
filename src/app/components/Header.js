"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import Image from "next/image";

const Header = ({ images }) => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="z-0 mt-16">
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image alt={img.alt} src={img.img} className="w-screen " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
