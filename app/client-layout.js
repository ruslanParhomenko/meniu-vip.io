"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={
          pathname === "/bar-page-2"
            ? { opacity: 0, x: "-100%" }
            : { opacity: 0, x: "100%" }
        }
        animate={{ opacity: 1, x: "0%" }}
        exit={
          pathname === "/bar-page-2"
            ? { opacity: 0, x: "100%" }
            : { opacity: 0, x: "-100%" }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
