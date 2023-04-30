import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className="flex flex-col items-center justify-center bg-blue-100 ">
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}
