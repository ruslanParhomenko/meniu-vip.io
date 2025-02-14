import { Lora } from "next/font/google";
import "./globals.css";

import Footer from "./component/footer";
import FrameBotton from "./component/frame-botton";
import FrameTop from "./component/frame-top";
import Header from "./component/header";

import { DataProvider } from "./context/data-meniu";

import ClientLayout from "./client-layout";

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
          className={`${lora.variable}  antialiased min-h-screen max-w-[430px] relative mx-auto px-2`}
        >
          <Header />
          <FrameTop />
          <ClientLayout>{children}</ClientLayout>
          <Footer />
          <FrameBotton />
        </body>
      </html>
    </DataProvider>
  );
}
