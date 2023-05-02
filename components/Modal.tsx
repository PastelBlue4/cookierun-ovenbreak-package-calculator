import { classNameHandler } from "@/utils/client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  title: string;
  contents: {
    image?: string;
    text: string;
    donationLink?: string;
  };
  anwserContents?: string;
}

export default function Modal({
  isOpen,
  title,
  contents,
  setIsOpen,
  anwserContents = "닫기",
}: ModalProps) {
  return (
    <>
      <div className={classNameHandler("modal", isOpen ? "modal-open" : "")}>
        <div className="modal-box">
          <div className="flex justify-between">
            <h3 className="text-lg font-bold">{title}</h3>
            <button
              className=""
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {anwserContents}
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-2 mt-7">
            {contents.image ? (
              <div className="relative w-36 h-36 ">
                <Image src={contents.image} alt="modalImage" fill />
              </div>
            ) : null}
            <p className="mt-4">{contents.text}</p>
            {contents.donationLink ? (
              <Link
                href={contents.donationLink}
                target="blank"
                className="w-full mt-4 bg-blue-500 border-0 text-gray-50 btn hover:bg-blue-600"
              >
                토스로 송금하기
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
