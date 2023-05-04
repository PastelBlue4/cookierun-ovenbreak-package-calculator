import { checkedProducts } from "@/atoms";
import Product from "@/components/Product";
import Image from "next/image";
import { useRecoilState } from "recoil";

import data from "@/data.json";
import CalculateListProduct from "@/components/CalculateListProduct";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";

export default function Home() {
  const [userInputPackagePrice, setUserInputPackagePrice] = useState(0);
  const [checkedProduct, setCheckedProduct] = useRecoilState(checkedProducts);
  const [calculateResult, setCalculateResult] = useState(0);
  const [getEfficiency, setGetEfficiency] = useState(0);

  useEffect(() => {
    setGetEfficiency(
      +((calculateResult / userInputPackagePrice) * 100).toFixed(3)
    );
  }, [calculateResult, userInputPackagePrice]);

  const resultMessage = () => {
    const message = {
      under80: "옆에서 총들고 협박해도 차마 구매 버튼 못누름",
      under90: "이거 구매하면 데브에서 감사 메일옴",
      under95: "음... 급하면 사세요",
      under100: "정가, 아쉽긴한데 기분 나쁠정도는 아닌듯",
      under110: "사두면 좋을 패키지",
      under120: "좋은데?",
      under130: "안사는게 흑우 ㄹㅇ 당장 결제",
      under140: "이정도 패키지가 있나?",
      under150: "와 반죽 깨져서 딸기잼 줄줄 흐르네 데브님 충성충성 ^^7",
      over200: "이정도 패키지가 있어? 입력 오류가 아니면 당장 구매",
    };

    if (getEfficiency < 80) return message.under80;
    if (getEfficiency < 90) return message.under90;
    if (getEfficiency < 95) return message.under95;
    if (getEfficiency < 100) return message.under100;
    if (getEfficiency < 110) return message.under110;
    if (getEfficiency < 120) return message.under120;
    if (getEfficiency < 130) return message.under130;
    if (getEfficiency < 140) return message.under140;
    if (getEfficiency < 150) return message.under150;
    if (getEfficiency > 150) return message.over200;
  };

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
                onChange={(e) => {
                  setUserInputPackagePrice(+e.currentTarget.value);
                }}
              />
              <button
                className="w-full py-2 mt-5 text-gray-100 transition-all duration-200 bg-blue-400 rounded-md hover:bg-blue-500 hover:text-gray-50 active:scale-95"
                onClick={() => {
                  const efficiencyCheck = () => {
                    setCalculateResult(
                      checkedProduct.reduce((accmulator, currentValue) => {
                        return (
                          accmulator +
                          currentValue.quantity * currentValue.price
                        );
                      }, 0)
                    );
                  };

                  efficiencyCheck();
                }}
              >
                계산하기
              </button>
            </div>
          </>
        ) : null}

        {calculateResult !== 0 ? (
          <>
            <div className="flex flex-col items-center justify-center w-full ">
              <hr className="bg-blue-200 w-11/12  h-[2px] mb-5" />
              <div className="flex flex-col items-center justify-center w-full p-10 rounded-lg gap-y-2 bg-blue-50">
                <span className="text-lg">효율 :{getEfficiency} %</span>
                <span>쿠비자 정가 : {calculateResult}원</span>
                <span>실제 가격 : {userInputPackagePrice}원 </span>
                <span className="text-sm">{resultMessage()}</span>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
