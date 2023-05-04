import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <div className="flex flex-col items-center justify-between min-h-screen bg-blue-100">
        <Component {...pageProps} />
        <Analytics />
        <Footer />
      </div>
    </RecoilRoot>
  );
}
