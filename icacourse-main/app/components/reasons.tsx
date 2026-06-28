"use client";

import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

export default function Card({ image, title, description }: CardProps) {
  return (
    <div className="block">
      <div className="bg-white rounded-xl shadow-lg transition overflow-hidden">
        <div className="relative w-25 h-25 rounded-3xl overflow-hidden bg-[#E6E7E7] mt-5 ml-5">
          <Image
            src={image}
            alt={title}
            fill
            sizes="20vw"
            className="object-contain p-5"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
