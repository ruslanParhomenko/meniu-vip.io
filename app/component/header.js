import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("home");
  return (
    <div className="flex items-center justify-center py-8">
      <h1 className="flex items-center gap-2 text-center text-3xl font-bold  ">
        <Image
          className=" -rotate-90"
          src="/meniu.svg"
          alt="logo"
          width={20}
          height={20}
          priority
        />
        {t("menu")}
        <Image
          className=" rotate-90"
          src="/meniu.svg"
          alt="logo"
          width={20}
          height={20}
          priority
        />
      </h1>
    </div>
  );
}
