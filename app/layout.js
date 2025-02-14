import { Lora } from "next/font/google";
import "./globals.css";

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
          <ClientLayout>{children}</ClientLayout>
        </body>
      </html>
    </DataProvider>
  );
}
