"use client";
import { useRouter, usePathname } from "next/navigation";

const LanguageSwitcher = ({ page, text }) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang) => {
    // Меняем язык в URL, например: "/en/about" → "/ru/about"
    const newPath = `/${lang}${pathname.replace(/^\/[a-z]{2}/, "")}`;
    router.replace(newPath);
  };
  return (
    <button
      onClick={() => changeLanguage(page)}
      className="rounded-full border border-solid border-transparent text-[12px] p-1 text-center bg-foreground text-background  font-bold "
    >
      <p>{text}</p>
    </button>
  );
};

export default LanguageSwitcher;
