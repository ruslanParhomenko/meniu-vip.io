"use client";

import Footer from "./component/footer";
import FrameBotton from "./component/frame-botton";
import FrameTop from "./component/frame-top";
import Header from "./component/header";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: "0%" }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Header />
        <FrameTop />
        {children}
        <Footer />
        <FrameBotton />
      </motion.div>
    </AnimatePresence>
  );
}
