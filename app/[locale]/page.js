"use client";
import BotonStartMeniu from "../component/botton-start-meniu";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";

export default function Home() {
  const locale = useParams();

  const t = useTranslations("home");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div
      className={`transform transition-all duration-700 
        flex flex-col  items-center gap-12 py-32 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
    >
      <BotonStartMeniu page={`/${locale.locale}/bar`} text={t("bar")} />
      <BotonStartMeniu page={`/${locale.locale}/cusine`} text={t("cusine")} />
    </div>
  );
}
