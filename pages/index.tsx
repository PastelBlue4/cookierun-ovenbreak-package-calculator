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
      under80: "마녀의 사악한 상술",
      over80: "그 돈으로 치킨을 시켜먹어 그냥",
      over90: "이거 구매하면 데브에서 감사 메일옴",
      over100: "구대기, 한정 스킨 아니면 ㄴㄴ",
      over110: "급하거나 한정 스킨 아니면 비추",
      over120: "꼭 필요한거 아니면 딱히",
      over140: "나름 ㄱㅊ",
      over150: "효율 나오는 패키지",
      over160: "괜찮음 구매 추천",
      over180: "오 굿굿",
      over250: "와 반죽 깨져서 딸기잼 줄줄 흐르네 데브님 충성충성 ^^7",
      over300: "신의... 은총인가..?",
      over800: "입력값이 올바르지 않은가..?",
    };
    if (getEfficiency < 80) return message.under80;
    if (getEfficiency < 89) return message.over80;
    if (getEfficiency < 99) return message.over90;
    if (getEfficiency < 109) return message.over100;
    if (getEfficiency < 119) return message.over110;
    if (getEfficiency < 129) return message.over120;
    if (getEfficiency < 149) return message.over140;
    if (getEfficiency < 159) return message.over150;
    if (getEfficiency < 169) return message.over160;
    if (getEfficiency < 259) return message.over250;
    if (getEfficiency < 309) return message.over300;
    if (getEfficiency < 799) {
      return message.over300;
    } else {
      return message.over800;
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
          content="마녀의 상술로부터 쿠키들의 지갑을 지키는 페이지"
        />
        <meta property="og:type" content="blog" />
        <meta
          property="og:image"
          content={`https://co-oven-package-calculator.vercel.app/balck_malang_cow.jpeg`}
        />
        <meta
          property="og:image:alt"
          content="마녀의 상술로부터 쿠키들의 지갑을 지키는 페이지"
        />
        <meta property="og:site_name" content="쿠키런 현질 효율 계산기" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content="쿠오븐 현질 효율 계산기" />
        <meta
          name="twitter:description"
          content="마녀의 상술로부터 쿠키들의 지갑을 지키는 페이지"
        />
        <meta
          name="twitter:image"
          content={`https://co-oven-package-calculator.vercel.app/balck_malang_cow.jpeg`}
        />
      </Head>

      <div className="flex flex-col items-center w-full max-w-screen-md mt-5 mb-10 bg-blue-100">
        <div className="flex justify-center w-11/12 rounded-md bg-blue-50">
          <div className="grid grid-cols-2 px-3 py-5 gap-y-4 gap-x-4 md:grid-cols-3 md:gap-x-1">
            {data.productData.map((product) => (
              <div key={product.name}>
                <Product
                  id={product.id}
                  price={product.price}
                  image={product.image}
                  name={product.name}
                  quantity={product.quantity}
                  quantitySpacing={product.quantitySpacing}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-full"></div>

        {checkedProduct.length > 0 && isUserInputOpen ? (
          <div className="flex flex-col items-center w-full">
            <hr className="bg-blue-200 w-11/12  h-[2px] my-10" />
            <div className="flex flex-col items-center justify-center gap-2 px-4 rounded-lg bg-blue-50 md:grid md:grid-cols-2">
              {checkedProduct.map((product) => {
                return (
                  <CalculateListProduct
                    key={product.id}
                    id={product.id}
                    price={product.price}
                    image={product.image}
                    name={product.name}
                    quantity={product.quantity}
                    quantitySpacing={product.quantitySpacing}
                  />
                );
              })}
            </div>

            <div className="flex flex-col items-center justify-center w-full max-w-md my-10">
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
