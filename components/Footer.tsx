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
      <div className="relative bottom-0 w-full max-w-md py-2 bg-blue-200 ">
        <div className="flex items-center justify-around text-sm">
          <button onClick={() => setIsDonationModalOpen(true)}>
            도움이 되었나요?
          </button>
          <Link
            href="https://github.com/PastelBlue4/cookierun-ovenbreak-package-calculator"
            target="blank"
          >
            계산 기준 확인하기
          </Link>
        </div>
        <div className="flex items-center justify-center mt-2">
          <span className="text-xs">버그 제보 : pastelblue0721@gmail.com</span>
        </div>
      </div>
    </>
  );
}
