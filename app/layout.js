import { Lora } from "next/font/google";
import Image from "next/image";
import "./globals.css";

import { DataProvider } from "./context/data-meniu";

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
          className={`${lora.variable}  antialiased h-full max-w-[430px] relative mx-auto`}
        >
          <Image
            className="absolute top-0.5 right-0.5"
            // ria-hidden
            src="../2.svg"
            alt="2"
            width={80}
            height={80}
          />
          <Image
            className="absolute top-0.5 left-0.5 -rotate-90 "
            // ria-hidden
            src="../2.svg"
            alt="2"
            width={80}
            height={80}
          />
          <h1 className="text-center text-3xl font-bold py-5">MENIU</h1>
          {children}
          <footer className=" flex items-center justify-center pt-8 pb-4">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://casino-nuovo.md/"
              // target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/nova-casino.svg"
                alt="casino"
                width={16}
                height={16}
              />
              go to casino.md →
            </a>
          </footer>
          <Image
            className="absolute bottom-0 right-0 rotate-90"
            // ria-hidden
            src="../2.svg"
            alt="2"
            width={80}
            height={80}
          />
          <Image
            className="absolute bottom-0.5 left-0.5 rotate-180"
            // ria-hidden
            src="../2.svg"
            alt="2"
            width={80}
            height={80}
          />
        </body>
      </html>
    </DataProvider>
  );
}
