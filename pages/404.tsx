import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[90vh] ">
      <div className="flex flex-col items-center ">
        <h1 className="text-xl ">잘못된 경로에오</h1>

        <p className="mt-10 ">
          여러분의 잘못<span className="text-xs">일꺼같긴한데</span> 아니니 걱정
          마세오
        </p>

        <Image
          src={"/sad_mokoko.png"}
          alt="sad Mokoko"
          height={300}
          width={300}
          className="mt-4 bg-white rounded-lg"
        />

        <Link
          href="/"
          className="px-4 py-3 mt-10 bg-blue-300 rounded-md text-gray-50 hover:bg-blue-400"
        >
          메인으로 가기
        </Link>
      </div>
    </div>
  );
}
