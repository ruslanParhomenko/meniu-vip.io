import { Lora } from "next/font/google";
import Image from "next/image";
import "./globals.css";

import { DataProvider } from "./context/data-meniu";

import Footer from "./component/footer";
import FrameBotton from "./component/frame-botton";
import FrameTop from "./component/frame-top";
import Header from "./component/header";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["500", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "MENIU-NOVA",
  description: "meniu VIP",
};

export default function RootLayout({ children }) {
  return (
    <DataProvider>
      <html lang="en">
        <body
          className={`${lora.variable}  antialiased h-full max-w-[430px] relative mx-auto px-2`}
        >
          <Header />
          <FrameTop />
          {children}
          <Footer />
          <FrameBotton />
        </body>
      </html>
    </DataProvider>
  );
}
