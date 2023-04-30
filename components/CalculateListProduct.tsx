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
      <div className="flex flex-col w-40 ml-2">
        <div className="relative ml-2 w-11 h-11">
          <Image src={image} alt={name} fill object-fit="cover" />
        </div>
        <span className="">{name}</span>
      </div>
    </>
  );
}
