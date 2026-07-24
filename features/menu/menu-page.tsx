"use client";

import { useTransition, ViewTransition } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import { useSwipeable } from "react-swipeable";
import { PAGE } from "./constants";
import { MenuDataType, MenuItem } from "./types";

export default function MenuPage({
  data,
  patch,
}: {
  data: MenuDataType | null;
  patch: string;
}) {
  const filterArray = PAGE[patch as keyof typeof PAGE];

  const [isPending] = useTransition();

  if (!data || !filterArray?.length) return null;

  return (
    <ViewTransition>
      <div
        className={`w-full h-full min-h-screen transition-opacity duration-300 ${
          isPending ? "opacity-50 pointer-events-none" : "opacity-100"
        }`}
      >
        {filterArray.map((item) => (
          <Section key={item} section={data[item]} title={item} />
        ))}
      </div>
    </ViewTransition>
  );
}

export function Row({ item }: { item: MenuItem }) {
  const t = useTranslations("menu");

  if (!item) return null;

  return (
    <div className="grid grid-cols-[2fr_1fr_auto] items-baseline text-xs tracking-wider">
      <span className="w-full px-2 text-[0.92rem] text-black">
        {t(item.name)}
      </span>

      <span className="shrink-0 whitespace-nowrap text-[#777] text-[0.8rem]">
        {item.weight}
      </span>

      {item.price != null && (
        <span className="w-10 shrink-0 text-left text-[0.92rem] font-semibold px-2">
          {item.price}
        </span>
      )}
    </div>
  );
}

export function Section({
  section,
  title,
}: {
  section: MenuItem[];
  title: string;
}) {
  const t = useTranslations("menu");

  const grouped: { [key: string]: MenuItem[] } = {};
  const unlabeled: MenuItem[] = [];

  section.forEach((item) => {
    if (item.label) {
      if (!grouped[item.label]) {
        grouped[item.label] = [];
      }
      grouped[item.label].push(item);
    } else {
      unlabeled.push(item);
    }
  });

  return (
    <div>
      <h3 className="my-3 text-center font-bold tracking-widest italic text-[1.5rem]">
        · {t(title)} ·
      </h3>

      {unlabeled.map((item, i) => (
        <Row key={`unlabeled-${i}`} item={item} />
      ))}

      {Object.entries(grouped).map(([label, items]) => (
        <div key={label}>
          <p
            className="text-center mb-1 text-xs font-bold tracking-wider text-[#1a1a1a] uppercase"
            style={{ fontSize: "0.55rem" }}
          >
            {label}
          </p>
          {items.map((item, i) => (
            <Row key={`${label}-${i}`} item={item} />
          ))}
        </div>
      ))}
    </div>
  );
}
