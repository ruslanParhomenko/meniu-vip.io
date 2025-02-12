"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-12 pb-10  font-[family-name:var(--font-geist-sans)] gap-16 items-center">
      <main className="flex flex-1 flex-col gap-8 row-start-2  sm:items-start">
        <div
          className={`transform transition-all duration-700 flex flex-col gap-9 mt-20 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <button>
            <Link href={"/bar"}>
              <p className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838]  h-10  w-40">
                BAR
              </p>
            </Link>
          </button>
          <button>
            <Link href={"/cusine"}>
              <p className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838]  h-10  w-40">
                CUSINE
              </p>
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}
