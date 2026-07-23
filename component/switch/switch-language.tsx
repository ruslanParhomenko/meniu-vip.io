"use client";

import { useTransition, ViewTransition } from "react";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

const LANGUAGES = ["ru", "ro", "en", "he", "tr"];

export default function SwitchLanguage() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (value: string) => {
    if (value === locale) return;

    document.cookie = `NEXT_LOCALE_BAR=${value}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT;`;

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div
      className={cn(
        "transform flex justify-center items-center gap-8 my-1 transition-opacity duration-300",
        isPending && "opacity-60 pointer-events-none",
      )}
    >
      <ViewTransition>
        {LANGUAGES.filter((lang) => lang !== locale).map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className="text-md p-2 text-center text-black/50 font-bold hover:text-black transition-colors tracking-widest"
          >
            <p>{lang.toUpperCase()}</p>
          </button>
        ))}
      </ViewTransition>
    </div>
  );
}
