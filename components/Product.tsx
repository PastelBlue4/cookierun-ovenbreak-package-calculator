import { checkedProducts } from "@/atoms";
import { classNameHandler } from "@/utils/client";
import { spawn } from "child_process";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function Product({ name, price, image, id }: ProductInterface) {
  const [checkedProduct, setCheckedProduct] = useRecoilState(checkedProducts);
  const onCheck = () => {
    const targetProductIndex = checkedProduct.findIndex(
      (product) => product.name === name
    );

    console.log(targetProductIndex);

    if (targetProductIndex !== -1) {
      setCheckedProduct((oldProductList) => {
        return [
          ...oldProductList.slice(0, targetProductIndex),
          ...oldProductList.slice(targetProductIndex + 1),
        ];
      });
    }

    if (targetProductIndex === -1) {
      setCheckedProduct((oldProductList) => [
        ...oldProductList,
        { name, price, id, image },
      ]);
    }
  };

  return (
    <>
      <button
        onClick={onCheck}
        className={classNameHandler(
          "flex flex-col items-center justify-center gap-2 py-3 my-1 bg-blue-300 rounded-lg w-36",
          checkedProduct.findIndex((product) => {
            return product.name === name;
          }) !== -1
            ? "bg-blue-500"
            : "bg-blue-300"
        )}
      >
        <div className="relative w-11 h-11 ">
          <Image src={image} alt={name} fill object-fit="cover" priority />
        </div>
        <span className="text-sm">{name}</span>
      </button>
    </>
  );
}
