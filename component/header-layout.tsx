"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";

export default function HeaderLayout() {
  const t = useTranslations("cover");
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <button
      className="flex items-center gap-4 my-3 justify-center text-2xl"
      onClick={handleClick}
    >
      <Image
        className=""
        src="/menu-ornament.png"
        alt="logo"
        width={20}
        height={20}
        priority
      />
      <p
        className="text-gray-500 tracking-widest"
        style={{ fontFamily: "var(--font-lobster)" }}
      >
        {t("menu")}
      </p>
      <Image
        className="rotate-180"
        src="/menu-ornament.png"
        alt="logo"
        width={20}
        height={20}
        priority
      />
    </button>
  );
}
