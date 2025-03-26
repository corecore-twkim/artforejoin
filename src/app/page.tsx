"use client";

import InputFields from "./components/InputFields";
import Image from "next/image";

export default function Home() {
  const handleSubmit = (data: {
    dong: string;
    floor: string;
    nickname: string;
  }) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <main className="container mx-auto">
        <div className="relative w-full h-[200px] mb-8">
          <Image
            src="/images/sujain.jpg"
            alt="Sujain"
            fill
            className="object-cover"
            priority
          />
        </div>
        <InputFields onSubmit={handleSubmit} />
      </main>
    </div>
  );
}
