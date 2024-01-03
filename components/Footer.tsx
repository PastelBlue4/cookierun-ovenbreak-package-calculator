import React from "react";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="relative bottom-0 flex flex-col items-center w-full py-3 bg-blue-200 ">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center justify-center mb-2">
            <span className="pb-2 text-sm">
              Made by
              <Link
                href="https://www.github.com/Pastelblue4"
                target="blank"
                className="ml-2 text-base font-bold hover:underline underline-offset-2"
              >
                Romuru Tempest
              </Link>
            </span>
            <span className="text-xs">
              버그 제보 : pastelblue0721@gmail.com
            </span>
          </div>

          <div className="flex items-center justify-around w-full mt-5 text-xs">
            <Link
              href="https://github.com/PastelBlue4/cookierun-ovenbreak-package-calculator"
              target="blank"
              className="font-bold hover:underline underline-offset-4"
            >
              계산 기준 확인하기(GitHub)
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
