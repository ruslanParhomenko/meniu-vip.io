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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
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
