import { checkedProducts } from "@/atoms";
import Product from "@/components/Product";
import Image from "next/image";
import { useRecoilState } from "recoil";

import data from "@/data.json";
import CalculateListProduct from "@/components/CalculateListProduct";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const [userInputPackagePrice, setUserInputPackagePrice] = useState(0);
  const [checkedProduct, setCheckedProduct] = useRecoilState(checkedProducts);
  const [calculateResult, setCalculateResult] = useState(0);
  const [getEfficiency, setGetEfficiency] = useState(0);
  const [getResultMessage, setGetResultMesseage] = useState("");
  const [isUserInputOpen, setIsUserInputOpen] = useState(true);

  const router = useRouter();

  useEffect(() => {
    setGetEfficiency(
      +((calculateResult / userInputPackagePrice) * 100).toFixed(3)
    );

    setGetResultMesseage(() => {
      return resultMessage();
    });
  }, [calculateResult, userInputPackagePrice, getEfficiency]);

  const resultMessage = () => {
    const message = {
      under75: "옆에서 총들고 협박해도 차마 구매 버튼 못누름",
      under85: "이거 구매하면 데브에서 감사 메일옴",
      under90: "음... 급하면 사세요",
      under100: "아쉽긴한데 기분 나쁠정도는 아닌듯",
      under110: "정가. 낫밷",
      under120: "좋은데?",
      under130: "안사는게 흑우 ㄹㅇ 당장 결제",
      under140: "와 반죽 깨져서 딸기잼 줄줄 흐르네 데브님 충성충성 ^^7",
      over200: "입력 오류가 아니면 섭종인가?",
    };

    if (getEfficiency < 75) return message.under75;
    if (getEfficiency < 85) return message.under85;
    if (getEfficiency < 90) return message.under90;
    if (getEfficiency < 100) return message.under100;
    if (getEfficiency < 110) return message.under110;
    if (getEfficiency < 120) return message.under120;
    if (getEfficiency < 130) return message.under130;
    if (getEfficiency < 140) return message.under140;
    if (getEfficiency > 200) {
      return message.over200;
    } else {
      return "입력값이 올바르지 않습니다.";
    }
  };

  return (
    <>
      <Head>
        <title>쿠키런 현질 효율 계산기</title>
        <meta name="description" content="쿠키런 현질 효율 계산기" />
        <meta
          name="keyword"
          content="쿠키런, 쿠키런 오븐브레이크, 쿠키런 현질, 쿠키런 패키지, 쿠오븐,  쿠오븐 가성비, 오븐브레이크 크리스탈,"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/giveMeMore.png" />
        <meta
          property="og:url"
          content="https://co-oven-package-calculator.vercel.app/"
        />
        <meta property="og:title" content="쿠오븐 현질 효율 계산기" />
        <meta
          property="og:description"
          content="마녀의 상술로 부터 쿠키들의 지갑을 지키는 페이지"
        />
        <meta property="og:type" content="blog" />
        <meta
          property="og:image"
          content={`https://co-oven-package-calculator.vercel.app/balck_malang_cow.jpeg`}
        />
        <meta
          property="og:image:alt"
          content="마녀의 상술로 부터 쿠키들의 지갑을 지키는 페이지"
        />
        <meta property="og:site_name" content="쿠키런 현질 효율 계산기" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="쿠키런 현질 효율 계산기" />
        <meta
          name="twitter:description"
          content="마녀의 상술로 부터 쿠키들의 지갑을 지키는 페이지"
        />
        <meta
          name="twitter:image"
          content="https://co-oven-package-calculator.vercel.app/balck_malang_cow.jpeg"
        />
      </Head>

      <div className="flex flex-col items-center w-full max-w-md mt-5 mb-10 bg-blue-100">
        <div className="flex justify-center w-11/12 rounded-md bg-blue-50">
          <div className="grid grid-cols-2 px-3 py-5 gap-y-4 gap-x-4 ">
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
        <div className="flex justify-center w-full"></div>

        {checkedProduct.length > 0 && isUserInputOpen ? (
          <div className="flex flex-col items-center w-full">
            <hr className="bg-blue-200 w-11/12  h-[2px] my-10" />
            <div className="flex flex-col items-center justify-center w-11/12 px-4 rounded-lg bg-blue-50 ">
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
                placeholder="패키지 가격을 입력 해용."
                className="w-11/12 h-10 px-2 rounded-sm "
                onChange={(e) => {
                  setUserInputPackagePrice(+e.currentTarget.value);
                }}
              />
              <button
                className="w-11/12 py-2 mt-5 text-gray-100 transition-all duration-200 bg-blue-400 rounded-md hover:bg-blue-500 hover:text-gray-50 active:scale-95"
                onClick={() => {
                  if (!userInputPackagePrice) return;

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

                  setIsUserInputOpen(false);

                  efficiencyCheck();
                }}
              >
                계산하기
              </button>
            </div>
          </div>
        ) : null}

        {calculateResult !== 0 ? (
          <>
            <hr className="bg-blue-200 w-11/12  h-[2px] my-10" />
            <div className="flex flex-col items-center justify-center w-full ">
              <div className="flex flex-col items-center justify-center w-11/12 p-10 rounded-lg gap-y-2 bg-blue-50">
                <span className="text-lg ">
                  효율 :
                  <span className="text-orange-600"> {getEfficiency}%</span>
                </span>
                <span className="text-sm text-gray-600">
                  쿠비자 정가 : {calculateResult}원
                </span>
                <span className="text-sm text-gray-600">
                  실제 가격 : {userInputPackagePrice}원{" "}
                </span>
                <span className="flex justify-center w-full px-2 py-6 mt-2 text-sm bg-blue-100 rounded-md">
                  {getResultMessage}
                </span>
              </div>

              <button
                className="w-11/12 p-2 transition-all duration-300 bg-red-300 rounded-lg mt-7 text-gray-50 active:scale-95"
                onClick={() => router.reload()}
              >
                다시하기
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
