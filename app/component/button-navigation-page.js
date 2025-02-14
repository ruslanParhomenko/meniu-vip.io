"use client";

import { usePathname } from "next/navigation";

export default function ButtonNavigationPage({ leftPage, rightPage }) {
  const pathname = usePathname();
  return (
    <div className="py-4">
      <button
        onClick={() => router.push({ leftPage })}
        className={`text-xs absolute  left-12 `}
      >
        {pathname === "/bar-page-2" ? "← prev" : "← home"}
      </button>
      <button
        onClick={() => router.push({ rightPage })}
        className={`text-xs absolute  right-12`}
      >
        next →
      </button>
    </div>
  );
}
