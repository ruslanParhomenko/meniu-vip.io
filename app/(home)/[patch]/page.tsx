import { getDataMenu } from "@/features/menu/action";
import MenuPage from "@/features/menu/menu-page";

export default async function Page({
  params,
}: {
  params: Promise<{ patch: string }>;
}) {
  const data = await getDataMenu();

  const patchName = await params;

  return <MenuPage data={data} patch={patchName.patch} />;
}
