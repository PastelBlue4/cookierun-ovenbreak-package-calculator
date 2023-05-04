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

  const onQuantityUpdate = (changeQuantity: number) => {
    if (quantity + changeQuantity < 0) return;

    const targetProductIndex = productQuantitiy.findIndex(
      (product) => product.name === name
    );

    setProductQuantitiy((prevQuantity) => {
      const updateQuantity = {
        id,
        name,
        price,
        image,
        quantity: quantity + changeQuantity,
      };

      return [
        ...prevQuantity.slice(0, targetProductIndex),
        updateQuantity,
        ...prevQuantity.slice(targetProductIndex + 1),
      ];
    });
  };

  return (
    <div className="w-full px-2 py-3 my-4 bg-blue-100 rounded-md ">
      <div className="flex flex-col items-center w-full gap-y-2">
        <div className="flex items-center justify-center w-full ">
          <div className="relative mb-1 w-11 h-11">
            <Image src={image} alt={name} fill object-fit="cover" />
          </div>
        </div>
        <div className="flex flex-col w-full py-1 text-xs text-gray-800 gap-y-3 ">
          <div className="flex items-start justify-center gap-2 w-f">
            <button
              onClick={() => {
                onQuantityUpdate(1);
              }}
              className="w-16 bg-blue-200 quntityButton "
            >
              + 1
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(10);
              }}
              className="w-16 bg-blue-300 quntityButton "
            >
              + 10
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(100);
              }}
              className="w-16 bg-blue-200 quntityButton "
            >
              + 100
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(1000);
              }}
              className="w-16 bg-blue-300 quntityButton "
            >
              + 1000
            </button>
          </div>

          <div className="flex items-start justify-center gap-2">
            <button
              onClick={() => {
                onQuantityUpdate(-1);
              }}
              className="w-16 bg-red-200 quntityButton "
            >
              - 1
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(-10);
              }}
              className="w-16 bg-red-300 quntityButton "
            >
              - 10
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(-100);
              }}
              className="w-16 bg-red-200 quntityButton "
            >
              - 100
            </button>
            <button
              onClick={() => {
                onQuantityUpdate(-1000);
              }}
              className="w-16 bg-red-300 quntityButton "
            >
              - 1000
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center w-24">
          <span className="text-gray-700">{quantity}개</span>
        </div>
      </div>
    </div>
  );
}
