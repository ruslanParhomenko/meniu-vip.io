import { useLocale, useTranslations } from "next-intl";
import { SECTIONS } from "./constants";

function DishDisplay({
  item,
}: {
  item: { ro: string; en: string; ru: string; tr: string; he: string } | null;
}) {
  if (!item) {
    return null;
  }
  // useLocale() returns a string; narrow it to the known keys to satisfy TS
  const locale = useLocale() as keyof (typeof item & {
    ro: string;
    en: string;
    ru: string;
    tr: string;
    he: string;
  });
  return (
    <div className="text-center">
      <p className="mb-3 font-['Cormorant_Garamond'] text-[26px] leading-tight font-semibold text-[#2c1f0e]">
        {item[locale]}
      </p>
      {/* <p className="min-h-4 font-['Cormorant_Garamond'] text-[16px] font-light text-[#7a6242] italic">
        {item.en}
      </p> */}
    </div>
  );
}
export default function MenuDailySection({
  category,
  items,
}: {
  category: (typeof SECTIONS)[number] | null;
  items:
    { ro: string; en: string; ru: string; tr: string; he: string }[] | null;
}) {
  const t = useTranslations("menu");
  return (
    <div className="flex h-full flex-col justify-between pb-1">
      <p
        className="mb-8 text-center text-[12px] tracking-[0.18em] text-[#9a8060] uppercase"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        — {category ? t(category) : "Section"} —
      </p>

      {items?.map((item, idx) => (
        <DishDisplay key={idx} item={item} />
      ))}
    </div>
  );
}
