import { ProductInterface } from "@/atoms";
import {
  changeLocalStorgeTitle,
  classNameHandler,
  getLocalStoage,
  removeLocalStoage,
} from "@/utils/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface CalculateHistoryProps {
  calculatedProducts: ProductInterface[];
  id: number;
  totalprice: number;
  packageEfficiency: number;
  date: string;
  title: string;
}

export default function CalculateHistory({}) {
  const [calculatedHistory, setCalculatedHistory] =
    useState<CalculateHistoryProps[]>();

  const [changeTitleTarget, setChangeTitleTarget] = useState<null | number>(
    null
  );

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setCalculatedHistory(getLocalStoage());
  }, []);

  return (
    <>
      {calculatedHistory && calculatedHistory.length > 0 ? (
        <div className="flex flex-col w-full">
          <div className="w-full px-3 pt-5 space-y-8 ">
            {calculatedHistory.map((data, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="relative flex flex-col items-center px-2 pt-16 pb-5 bg-blue-200 rounded-md md:pt-6"
                  >
                    <div className="flex items-center">
                      {changeTitleTarget && data.id === changeTitleTarget ? (
                        <form
                          onSubmit={handleSubmit((formData) => {
                            changeLocalStorgeTitle(formData.changeTitle, data);
                            setChangeTitleTarget(null);
                            setCalculatedHistory(getLocalStoage());
                          })}
                        >
                          <input
                            className="p-2 h-7"
                            {...register("changeTitle")}
                          />
                          <button className="p-2 ml-[2px] transition-all rounded-md hover:bg-blue-50">
                            <svg
                              id="Layer_1"
                              version="1.1"
                              viewBox="0 0 24 24"
                              className="w-4 h-4 "
                            >
                              <path
                                className="st0"
                                d="M21.4,6L16,0.6l-14,14V20h5.4L21.4,6z M4,18v-2.6l12-12L18.6,6l-12,12H4z M2,22v2h20v-2H2z"
                              />
                            </svg>
                          </button>
                        </form>
                      ) : (
                        <>
                          <h3 className="text-base font-bold ">{data.title}</h3>

                          <button
                            onClick={() => {
                              setChangeTitleTarget(data.id);
                            }}
                            className="p-2 ml-[2px] transition-all rounded-md hover:bg-blue-50"
                          >
                            <svg
                              id="Layer_1"
                              version="1.1"
                              viewBox="0 0 24 24"
                              className="w-4 h-4 "
                            >
                              <path
                                className="st0"
                                d="M21.4,6L16,0.6l-14,14V20h5.4L21.4,6z M4,18v-2.6l12-12L18.6,6l-12,12H4z M2,22v2h20v-2H2z"
                              />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                    <span className="text-xs text-gray-600 ">{data.date}</span>

                    <button
                      onClick={() => {
                        removeLocalStoage(data.id);
                        setCalculatedHistory(getLocalStoage());
                      }}
                      className="absolute p-1 transition-all rounded-md right-3 top-2 hover:bg-blue-300"
                    >
                      <svg
                        className="text-white"
                        fill="none"
                        height="32"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line x1="18" x2="6" y1="6" y2="18" />
                        <line x1="6" x2="18" y1="6" y2="18" />
                      </svg>
                    </button>

                    <hr className="w-10/12 h-[1px] border-gray-200 my-7 " />

                    <div className="flex mb-6 space-x-6 text-lg">
                      <div>
                        <span className="mr-2">가격 : </span>
                        <span className="font-bold ">
                          {data.totalprice.toLocaleString()}원
                        </span>
                      </div>

                      <div>
                        <span className="mr-2">효율 :</span>
                        <span className="font-bold text-red-400">
                          {data.packageEfficiency}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center w-full ">
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 justify-items-center md:w-11/12">
                        {data.calculatedProducts.map(
                          (productData, productIndex) => {
                            return (
                              <div
                                key={productIndex}
                                className="flex flex-col items-center justify-between px-1 py-4 bg-blue-100 rounded-md w-36 md:w-40 "
                              >
                                <div className="flex flex-col items-center ">
                                  <div className="relative w-9 h-9 mb-[2px]">
                                    <Image
                                      src={productData.image}
                                      alt={productData.name}
                                      fill
                                      object-fit="cover"
                                    />
                                  </div>
                                  <span className="mb-2 text-[13px] text-center text-gray-500 break-keep">
                                    {productData.name}
                                  </span>
                                </div>
                                <span className="text-base text-gray-900">
                                  {productData.quantity.toLocaleString()}개
                                </span>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                  <hr className="w-full border-gray-200 " />
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center w-full p-4">
            <div className="mb-4 text-sm">아무것도 엄서용</div>
            <div className="relative bg-white w-52 h-52 rounded-2xl">
              <Image fill alt="없서용" src={"/idk.png"} />
            </div>
          </div>
        </>
      )}
    </>
  );
}
