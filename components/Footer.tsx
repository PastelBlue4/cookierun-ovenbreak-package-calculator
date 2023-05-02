import React from "react";

export default function Footer() {
  return (
    <div className="w-full max-w-md py-5 bg-blue-200">
      <div className="flex items-center justify-around text-sm">
        <button>도움이 되었나요?</button>
        <button>계산 기준 확인하기</button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <span className="text-xs">버그 제보 : pastelblue0721@gmail.com</span>
      </div>
    </div>
  );
}
