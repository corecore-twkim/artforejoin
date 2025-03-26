"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

interface InputFieldsProps {
  onSubmit: (data: { dong: string; floor: string; nickname: string }) => void;
}

export default function InputFields({ onSubmit }: InputFieldsProps) {
  const [formData, setFormData] = useState({
    dong: "",
    floor: "",
    nickname: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"naver" | "kakao">("naver");

  const naverImages = [
    "/images/naver/naver1.jpeg",
    "/images/naver/naver2.jpeg",
    "/images/naver/naver3.jpeg",
    "/images/naver/naver4.jpeg",
    "/images/naver/naver5.jpeg",
  ];

  const kakaoImages = [
    "/images/kakao/kakao1.jpeg",
    "/images/kakao/kakao2.jpeg",
    "/images/kakao/kakao3.jpeg",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopy = (format: "format1" | "format2") => {
    const formattedText =
      format === "format1"
        ? `하이스토리 ${formData.dong}동 ${formData.floor}층`
        : `${formData.dong}동/${formData.floor}층/하이스토리`;

    navigator.clipboard
      .writeText(formattedText)
      .then(() => {
        alert("닉네임이 복사되었습니다!");
      })
      .catch((err) => {
        console.error("복사 실패:", err);
        alert("복사에 실패했습니다.");
      });
  };

  const handleOpenModal = (type: "naver" | "kakao") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <label htmlFor="dong" className="w-20 text-right text-lg font-medium">
            동:
          </label>
          <input
            type="text"
            id="dong"
            name="dong"
            value={formData.dong}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            placeholder="동을 입력하세요"
          />
        </div>
        <div className="flex items-center gap-4">
          <label
            htmlFor="floor"
            className="w-20 text-right text-lg font-medium"
          >
            층:
          </label>
          <input
            type="text"
            id="floor"
            name="floor"
            value={formData.floor}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            placeholder="층을 입력하세요"
          />
        </div>
        <div className="flex items-center gap-4">
          <label
            htmlFor="nickname"
            className="w-20 text-right text-lg font-medium"
          >
            닉네임:
          </label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            placeholder="닉네임을 입력하세요"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-20 text-right text-lg font-medium flex items-center justify-end gap-2">
            <Image
              src="/images/navercafe_logo.png"
              alt="네이버"
              width={20}
              height={20}
              className="h-5"
            />
          </div>
          <div className="flex-1 px-3 py-2 border rounded-md text-lg flex items-center gap-2 text-black">
            {formData.nickname} {formData.dong}동 {formData.floor}층
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleCopy("format1")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="복사하기"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            </button>
            <button
              onClick={() => handleOpenModal("naver")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="이미지 보기"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-20 text-right text-lg font-medium flex items-center justify-end gap-2">
            <Image
              src="/images/kakaotalk_logo.png"
              alt="카카오톡"
              width={20}
              height={20}
              className="h-5"
            />
          </div>
          <div className="flex-1 px-3 py-2 border rounded-md text-lg flex items-center gap-2 text-black">
            {formData.dong}동/{formData.floor}층/{formData.nickname}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handleCopy("format2")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="복사하기"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            </button>
            <button
              onClick={() => handleOpenModal("kakao")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              title="이미지 보기"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={modalType === "naver" ? naverImages : kakaoImages}
      />
    </div>
  );
}
