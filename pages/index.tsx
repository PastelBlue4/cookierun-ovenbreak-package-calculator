import { checkedProducts } from "@/atoms";
import Product from "@/components/Product";
import Image from "next/image";
import { useRecoilState } from "recoil";

import data from "@/data.json";
import CalculateListProduct from "@/components/CalculateListProduct";
import { useState } from "react";
import Modal from "@/components/Modal";

export default function Home() {
  const [checkedProduct, setCheckedProduct] = useRecoilState(checkedProducts);
  const [isCalculateResult, setIsCalculateResult] = useState(false);

  return (
    <>
      <div className="w-full max-w-md mb-10 bg-blue-100 ">
        <div className="flex justify-center ">
          <div className="grid w-full grid-cols-2 p-10 mt-5 rounded-md gap-y-4 gap-x-8 bg-blue-50">
            {data.productData.map((product) => (
              <div key={product.name}>
                <Product
                  id={product.id}
                  price={product.price}
                  image={product.image}
                  name={product.name}
                  quantity={product.quantity}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full">
          <hr className="bg-blue-200 w-11/12  h-[2px] my-10" />
        </div>

        {checkedProduct.length > 0 ? (
          <>
            <div className="flex flex-col items-center justify-center w-full p-10 rounded-lg bg-blue-50 ">
              {checkedProduct.map((product) => {
                return (
                  <CalculateListProduct
                    key={product.id}
                    id={product.id}
                    price={product.price}
                    image={product.image}
                    name={product.name}
                    quantity={product.quantity}
                  />
                );
              })}
            </div>

            <div className="flex flex-col items-center justify-center w-full my-10 ">
              <input
                type="number"
                placeholder="패키지 가격을 입력 해주세요."
                className="w-full h-10 px-2 rounded-sm "
              />
              <button
                className="w-full py-2 mt-5 text-gray-100 transition-all duration-200 bg-blue-400 rounded-md hover:bg-blue-500 hover:text-gray-50 active:scale-95"
                onClick={() => {
                  setIsCalculateResult(true);
                }}
              >
                계산하기
              </button>
            </div>
          </>
        ) : null}

        {isCalculateResult ? (
          <>
            <div className="flex flex-col items-center justify-center w-full ">
              <hr className="bg-blue-200 w-11/12  h-[2px] mb-5" />
              <div className="flex flex-col items-center justify-center w-full p-10 rounded-lg gap-y-2 bg-blue-50">
                <span className="text-lg">효율 : 89%</span>
                <span>쿠비자 정가 : 12000원</span>
                <span>실제 가격 : 15000원 </span>
                <span className="text-sm">
                  이거 구매하면 데브에서 흑우전용 감사 메일옴
                </span>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
