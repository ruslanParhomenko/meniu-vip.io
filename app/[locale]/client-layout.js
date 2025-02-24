"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import Footer from "../component/footer";
import FrameBotton from "../component/frame-botton";
import FrameTop from "../component/frame-top";
import Header from "../component/header";

import { DataProvider } from "../context/data-meniu-daily";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <DataProvider>
        <Header />
        <FrameTop />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
        <FrameBotton />
      </DataProvider>
    </>
  );
}
