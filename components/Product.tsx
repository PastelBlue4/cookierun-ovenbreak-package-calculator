import { checkedProducts } from "@/atoms";
import { classNameHandler } from "@/utils/client";
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
          "flex flex-col items-center justify-center py-4  bg-blue-300 rounded-lg w-40 transition-all duration-100",
          checkedProduct.findIndex((product) => {
            return product.name === name;
          }) !== -1
            ? "bg-blue-400 scale-95"
            : "bg-blue-300"
        )}
      >
        <div
          className={classNameHandler(
            checkedProduct.findIndex((product) => {
              return product.name === name;
            }) !== -1
              ? ""
              : "",
            "relative w-10 h-10 "
          )}
        >
          <Image src={image} alt={name} fill object-fit="cover" key={id} />
        </div>
        <span
          className={classNameHandler(
            checkedProduct.findIndex((product) => {
              return product.name === name;
            }) !== -1
              ? "text-gray-200"
              : "text-gray-100",
            "text-sm mt-[2px]"
          )}
        >
          {name}
        </span>
      </button>
    </>
  );
}
