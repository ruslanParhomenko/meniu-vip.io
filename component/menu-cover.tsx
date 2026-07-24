"use client";

import { useTransition, ViewTransition } from "react";
import { Link, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Dot } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MenuCover() {
  const t = useTranslations("cover");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    startTransition(() => {
      router.push(href);
    });
  };

  const links = [
    { href: "/bar", label: t("bar") },
    { href: "/cuisine", label: t("cuisine") },
    { href: "/daily", label: t("dailyMenu") },
  ];

  return (
    <ViewTransition>
      <div
        className={cn(
          "flex flex-col gap-20 h-[80dvh] justify-center items-center transition-opacity duration-300",
          isPending && "opacity-50 pointer-events-none",
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavigation(e, link.href)}
            className="flex justify-center items-center gap-3 transition-transform active:scale-95"
          >
            <Image
              className=""
              src="/menu-ornament.png"
              alt="logo"
              width={16}
              height={16}
              priority
            />
            <p className="text-[1.8rem] tracking-widest text-gray-600 font-extrabold">
              {link.label}
            </p>
            <Image
              className="rotate-180"
              src="/menu-ornament.png"
              alt="logo"
              width={16}
              height={16}
              priority
            />
          </Link>
        ))}
      </div>
    </ViewTransition>
  );
}
