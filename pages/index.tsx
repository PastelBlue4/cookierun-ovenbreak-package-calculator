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
          <div className="grid grid-cols-2 p-2 mt-5 gap-y-4 gap-x-8 ">
            {data.productData.map((product) => (
              <div key={product.name}>
                <Product
                  id={product.id}
                  price={product.price}
                  image={product.image}
                  name={product.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-4 ">
          {checkedProduct.map((product) => {
            return (
              <CalculateListProduct
                key={product.id}
                id={product.id}
                price={product.price}
                image={product.image}
                name={product.name}
              />
            );
          })}
        </div>

        {checkedProduct.length > 0 ? (
          <div className="flex flex-col items-center justify-center w-full my-10 ">
            <input
              type="number"
              placeholder="패키지 가격을 입력 해주세요."
              className="w-11/12 h-10 px-2"
            />
            <button
              className="w-11/12 py-2 mt-5 text-gray-100 bg-blue-400 rounded-md"
              onClick={() => {
                setIsCalculateResult(true);
              }}
            >
              계산하기
            </button>
          </div>
        ) : null}

        {isCalculateResult ? (
          <>
            <div className="flex flex-col items-center justify-center w-full ">
              <hr className="bg-blue-500 w-11/12  h-[2px] mb-5" />
              <div className="flex flex-col items-center justify-center gap-y-2">
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
