import { Cormorant_Garamond } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import "./globals.css";
import WrapperLayout from "@/component/ui-wrapper/wrapper-layout";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "MENU-NOVA",
  description: "menu VIP",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`${cormorant.className} antialiased md:max-w-107.5 md:mx-auto`}
      >
        <NextIntlClientProvider>
          <WrapperLayout>{children}</WrapperLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
