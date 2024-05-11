import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./banner.css";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { bannerData } from "../../../constant/banner";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Btn from "../../button/Btn";

export default function BannerSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="mt-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Slider start =============================================== */}
        <SwiperSlide>
          <div className=" banner1 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0  flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold   text-white text-center">
                {bannerData[0].title}
              </h2>
              d
              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                {bannerData[0].description}
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <Btn>Explore Now</Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner2 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0  flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold   text-white text-center">
                {bannerData[1].title}
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                {bannerData[1].description}
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <Btn>Explore Now</Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner3 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold  text-white text-center">
                {bannerData[2].title}
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                {bannerData[2].description}
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <Btn>Explore Now</Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner4 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0  flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold  text-white text-center">
                {bannerData[3].title}
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                {bannerData[3].description}
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <Btn>Explore Now</Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner5 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                {bannerData[4].title}
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                {bannerData[4].description}
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <Btn>Explore Now</Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner6 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                {bannerData[5].title}
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                {bannerData[5].description}
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <Btn>Explore Now</Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner7 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                {bannerData[6].title}
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                {bannerData[6].description}
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <Btn>Explore Now</Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner8 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                {bannerData[7].title}
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                {bannerData[7].description}
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <Btn>Explore Now</Btn>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider ends ====================================== */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
