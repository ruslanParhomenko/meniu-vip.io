import { Lora } from "next/font/google";
import Image from "next/image";
import "./globals.css";

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
    <html lang="en">
      <body className={`${lora.variable}  antialiased`}>
        <h1 className="text-center text-3xl font-bold py-10">MENIU</h1>
        {children}
        <footer className=" flex items-center justify-center pb-5">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://casino-nuovo.md/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/nova-casino.svg"
              alt="casino"
              width={16}
              height={16}
            />
            Go to casino-nova.md →
          </a>
        </footer>
      </body>
    </html>
  );
}
