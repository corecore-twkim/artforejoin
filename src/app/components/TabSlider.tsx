"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface TabSliderProps {
  kakaoImages: string[];
  naverImages: string[];
}

export default function TabSlider({
  kakaoImages,
  naverImages,
}: TabSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTab, setCurrentTab] = useState<"kakao" | "naver">("kakao");

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-4 text-lg font-medium">
        {currentIndex + 1} /{" "}
        {currentTab === "kakao" ? kakaoImages.length : naverImages.length}
      </div>
      <div className="flex justify-center border-b mb-4">
        <button
          className={`px-6 py-2 text-lg font-medium flex items-center gap-2 ${
            currentTab === "kakao"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setCurrentTab("kakao")}
        >
          <Image
            src="/images/kakaotalk_logo.png"
            alt="Kakao Logo"
            width={24}
            height={24}
            className="object-contain"
          />
          카카오톡
        </button>
        <button
          className={`px-6 py-2 text-lg font-medium flex items-center gap-2 ${
            currentTab === "naver"
              ? "border-b-2 border-green-500 text-green-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setCurrentTab("naver")}
        >
          <Image
            src="/images/navercafe_logo.png"
            alt="Naver Logo"
            width={24}
            height={24}
            className="object-contain"
          />
          네이버
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full"
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {(currentTab === "kakao" ? kakaoImages : naverImages).map(
          (image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[600px] bg-gray-100 flex items-center justify-center">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
}
