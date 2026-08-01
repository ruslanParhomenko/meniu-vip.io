import { MenuDailyDataForm } from "./action";
import { SECTIONS } from "./constants";
import MenuDailySection from "./menu-daily-section";

export default function MenuDailyPage({
  data,
}: {
  data: MenuDailyDataForm | null;
}) {
  if (!data) return null;

  return (
    <div className="flex h-full flex-col justify-between py-8">
      {SECTIONS.map((cat) => (
        <div key={cat} className="md:p-2">
          <MenuDailySection category={cat} items={data[cat]} />
        </div>
      ))}
    </div>
  );
}
