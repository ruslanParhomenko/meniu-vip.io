"use client";

import Image from "next/image";
import LanguageSwitcher from "./button-lang-switch";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("home");
  const [isVisible, setIsVisible] = useState(false);
  const switchLanguage = () => {
    setIsVisible(!isVisible);
  };

  return (
    <footer className="flex flex-col gap-9 items-center justify-center py-7">
      <button
        className={`rounded-full border border-solid border-transparent  flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838]  h-10  w-40 ${
          !isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-y-20"
        }`}
        onClick={switchLanguage}
      >
        <Image aria-hidden src="/lang.svg" alt="lang" width={16} height={16} />
        {t("Language")}
      </button>
      <div
        className={`transform transition-all duration-700 flex justify-center items-center gap-10 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20"
        }`}
      >
        <LanguageSwitcher page={`ru`} text={`RU`} />
        <LanguageSwitcher page={`ro`} text={`RO`} />
        <LanguageSwitcher page={`en`} text={`EN`} />
        <LanguageSwitcher page={`he`} text={`HE`} />
        <LanguageSwitcher page={`tr`} text={`TR`} />
      </div>

      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://casino-nuovo.md/"
        // target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/nova-casino.svg"
          alt="casino"
          width={16}
          height={16}
        />
        go to casino.md →
      </a>
    </footer>
  );
}
