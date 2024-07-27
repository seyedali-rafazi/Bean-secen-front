import React from "react";
import SwiperLayout from "./Swiper";
import { SwiperSlide } from "swiper/react";

function GeneralSwiper() {
  return (
    <SwiperLayout>
      <SwiperSlide>
        <div className="bg-cover bg-home-slide-one bg-center w-full h-80 flex justify-center items-center">
          <div className="flex flex-col gap-6 w-full justify-center items-center my-auto">
            <h1 className="font-bold text-sm md:text-2xl text-secondery-50">
              We’ve got your morning covered with Coffee
            </h1>
            <button className="bg-primary w-fit text-secondery-50 rounded-lg px-5 py-2">
              Order Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-cover bg-home-slide-two bg-center h-80 w-full flex justify-center items-center">
          <div className="flex flex-col gap-6 w-full justify-center items-center my-auto">
            <h1 className="font-bold text-sm md:text-2xl text-secondery-50">
              Wake up and smell the possibility!
            </h1>
            <button className="bg-primary w-fit text-secondery-50 rounded-lg px-5 py-2">
              Order Now
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-cover  bg-home-slide-three bg-center h-80 w-full flex justify-center items-center">
          <div className="flex flex-col gap-6 w-full justify-center items-center my-auto">
            <h1 className="font-bold text-sm md:text-2xl text-secondery-50">
              Awaken your senses. Savor life's brew.
            </h1>
            <button className="bg-primary w-fit text-secondery-50 rounded-lg px-5 py-2">
              Order Now
            </button>
          </div>
        </div>
      </SwiperSlide>
    </SwiperLayout>
  );
}

export default GeneralSwiper;
