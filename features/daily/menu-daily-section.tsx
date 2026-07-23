import { SECTIONS } from "./constants";

function DishDisplay({ item }: { item: { ro: string; en: string } | null }) {
  if (!item) {
    return null;
  }
  return (
    <div className="text-center">
      <p className="mb-1 font-['Cormorant_Garamond'] text-[26px] leading-tight font-semibold text-[#2c1f0e]">
        {item.ro}
      </p>
      <p className="min-h-4 font-['Cormorant_Garamond'] text-[16px] font-light text-[#7a6242] italic">
        {item.en}
      </p>
    </div>
  );
}
export default function MenuDailySection({
  category,
  items,
}: {
  category: (typeof SECTIONS)[number] | null;
  items: { ro: string; en: string }[] | null;
}) {
  return (
    <div className="flex h-full flex-col justify-between pb-1">
      <p
        className="my-2 text-center text-[12px] tracking-[0.18em] text-[#9a8060] uppercase"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        — {category ? category : "Section"} —
      </p>

      {items?.map((item, idx) => (
        <DishDisplay key={idx} item={item} />
      ))}
    </div>
  );
}
