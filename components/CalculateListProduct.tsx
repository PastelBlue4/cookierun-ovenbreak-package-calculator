import React from "react";
import data from "@/data.json";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { checkedProducts } from "@/atoms";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function CalculateListProduct({
  id,
  name,
  price,
  image,
  quantity,
}: ProductInterface) {
  const [productQuantitiy, setProductQuantitiy] =
    useRecoilState(checkedProducts);

  const onQuantityUpdate = (quantity: number) => {
    console.log(productQuantitiy);
    console.log(id);

    const targetProductIndex = productQuantitiy.findIndex(
      (product) => product.name === name
    );

    setProductQuantitiy((prevQuantity) => {
      return [...prevQuantity];
    });
  };

  return (
    <div className="w-full ">
      <div className="flex px-4 py-3 my-4 bg-blue-100 rounded-md">
        <div className="flex flex-col items-center justify-center bg-blue-200 w-14 ">
          <div className="relative w-7 h-7">
            <Image src={image} alt={name} fill object-fit="cover" />
          </div>
        </div>
        <div className="flex flex-col p-2 text-xs text-gray-800 gap-y-3 ">
          <div className="flex items-start justify-center gap-2">
            <button
              onClick={() => {
                onQuantityUpdate(100);
              }}
              className="bg-blue-300 quntityButton "
            >
              + 100
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(1000);
              }}
              className="bg-blue-200 quntityButton"
            >
              + 1000
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(10000);
              }}
              className="bg-blue-300 quntityButton"
            >
              + 10000
            </button>
          </div>

          <div className="flex items-start justify-center gap-2">
            <button
              onClick={() => {
                onQuantityUpdate(-100);
              }}
              className="bg-red-300 quntityButton"
            >
              - 100
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(-1000);
              }}
              className="bg-red-200 quntityButton"
            >
              - 1000
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(-10000);
              }}
              className="bg-red-300 quntityButton"
            >
              - 10000
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-24 ">
          <span className="text-sm ">{quantity}개</span>
        </div>
      </div>
    </div>
  );
}
