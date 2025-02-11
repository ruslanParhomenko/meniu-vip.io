import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight:['500','700'],
  style:['normal','italic']
});



export const metadata = {
  title: "MENIU-NOVA",
  description: "meniu VIP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
