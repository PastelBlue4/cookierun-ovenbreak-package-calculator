import React from "react";
import data from "@/data.json";
import Image from "next/image";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CalculationDataInterface {
  products: {
    product: ProductInterface;
    quantity: number;
  };
}

export default function CalculateListProduct({
  id,
  name,
  price,
  image,
}: ProductInterface) {
  return (
    <>
      <div className="flex mx-2 mt-2 bg-blue-50">
        <div className="flex flex-col items-center justify-center py-2 bg-blue-200 w-14 ">
          <div className="relative w-7 h-7">
            <Image src={image} alt={name} fill object-fit="cover" />
          </div>
        </div>
        <div className="flex flex-col p-2 text-xs text-gray-800 gap-y-3 ">
          <div className="flex items-start justify-center gap-2">
            <button className="bg-blue-300 quntityButton">+ 100</button>
            <button className="bg-blue-200 quntityButton">+ 1000</button>
            <button className="bg-blue-300 quntityButton">+ 10000</button>
          </div>

          <div className="flex items-start justify-center gap-2">
            <button className="bg-red-300 quntityButton">- 100</button>
            <button className="bg-red-200 quntityButton">- 1000</button>
            <button className="bg-red-300 quntityButton">- 10000</button>
          </div>
        </div>

        <div className="flex items-center justify-center w-24 ">
          <span className="text-sm ">10000 개</span>
        </div>
      </div>
    </>
  );
}
