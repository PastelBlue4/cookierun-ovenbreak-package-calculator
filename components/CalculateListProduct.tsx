import React from "react";
import data from "@/data.json";
import Image from "next/image";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function CalculateListProduct({
  id,
  name,
  price,
  image,
}: ProductInterface) {
  return (
    <>
      <div className="flex mx-3 mt-2 bg-blue-50">
        <div className="flex flex-col items-center justify-center w-12 py-2 bg-blue-200 ">
          <div className="relative w-7 h-7">
            <Image src={image} alt={name} fill object-fit="cover" />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2 text-xs text-gray-800 ">
          <div className="flex items-start justify-center gap-3">
            <button className="bg-blue-200 quntityButton"> + 100 </button>
            <button className="bg-blue-300 quntityButton"> + 1000 </button>
            <button className="bg-blue-200 quntityButton"> + 10000 </button>
          </div>

          <div className="flex items-start justify-center gap-3">
            <button className="bg-red-300 quntityButton"> - 100 </button>
            <button className="bg-red-300 quntityButton"> - 1000 </button>
            <button className="bg-red-300 quntityButton"> - 10000 </button>
          </div>
        </div>
      </div>
    </>
  );
}
