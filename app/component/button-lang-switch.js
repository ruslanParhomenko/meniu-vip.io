"use client";

// app/components/LanguageSwitcher.tsx
import Link from "next/link";

const LanguageSwitcher = ({ page, text, locale }) => {
  return (
    <button className="rounded-full border border-solid border-transparent text-[12px] p-1 text-center bg-foreground text-background  font-bold ">
      <Link href={page}>
        <p>{text}</p>
      </Link>
    </button>
  );
};

export default LanguageSwitcher;
