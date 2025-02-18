"use client";

// app/components/LanguageSwitcher.tsx
import Link from "next/link";

const LanguageSwitcher = ({ page, text }) => {
  return (
    <button className="rounded-full border border-solid border-transparent text-[12px] p-1 text-center bg-foreground text-white  active:bg-black">
      <Link href={page}>
        <p className="">{text}</p>
      </Link>
    </button>
  );
};

export default LanguageSwitcher;
