import { getMenuDailyData } from "@/features/daily/action";
import MenuDailyPage from "@/features/daily/menu-daily-page";

export default async function MenuDaily() {
  const data = await getMenuDailyData();
  return <MenuDailyPage data={data} />;
}
