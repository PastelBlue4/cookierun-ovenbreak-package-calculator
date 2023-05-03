import React, { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";

export default function Footer() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isDonationModalOpen}
        setIsOpen={setIsDonationModalOpen}
        title="아가 쿠키 커피사주기"
        contents={{
          text: `응애 "사줘"`,
          image: "/giveMeMore.png",
          donationLink: "https://toss.me/romuru",
        }}
      />
      <div className="relative bottom-0 flex flex-col items-center w-full py-3 bg-blue-200 ">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center justify-center mb-2">
            <span className="pb-2">
              Made by{" "}
              <Link
                href="https://www.github.com/Pastelblue4"
                target="blank"
                className="hover:underline underline-offset-2 "
              >
                Romuru
              </Link>
            </span>
            <span className="text-xs">
              버그 제보 : pastelblue0721@gmail.com
            </span>
          </div>

          <div className="flex items-center justify-around w-full my-3 text-xs">
            <button onClick={() => setIsDonationModalOpen(true)}>
              도움이 되었나요?
            </button>
            <Link
              href="https://github.com/PastelBlue4/cookierun-ovenbreak-package-calculator"
              target="blank"
              className="hover:underline underline-offset-4"
            >
              계산 기준 확인하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
