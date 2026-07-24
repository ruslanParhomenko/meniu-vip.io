"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const TITLE_BY_PATH = {
  bar: "bar",
  cuisine: "cuisine",
  daily: "dailyMenu",
};

export default function HeaderLayout() {
  const t = useTranslations("cover");
  const router = useRouter();
  const path = usePathname().split("/")[1];

  console.log(path);

  const handleClick = () => {
    router.push("/");
  };

  const title = TITLE_BY_PATH[path as keyof typeof TITLE_BY_PATH] || "menu";

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
      <p className="text-gray-500 tracking-widest font-extrabold">{t(title)}</p>
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
