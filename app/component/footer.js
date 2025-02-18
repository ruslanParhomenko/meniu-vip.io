import Image from "next/image";
import LanguageSwitcher from "./button-lang-switch";

export default function Footer({ locale }) {
  return (
    <footer className=" flex flex-col gap-9 items-center justify-center pt-8 pb-8">
      <div className="flex justify-center items-center gap-10 mt pb-5">
        <LanguageSwitcher page={`/ru`} text={`RU`} locale={locale} />
        <LanguageSwitcher page={`/ro`} text={`RO`} locale={locale} />
        <LanguageSwitcher page={`/en`} text={`EN`} locale={locale} />
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
