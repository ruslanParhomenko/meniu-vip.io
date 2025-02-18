"use client";
import RenderItemMeniu from "../../component/render-item-meniu";
import { useParams } from "next/navigation";

export default function BarPage2() {
  const { locale } = useParams();
  return (
    <RenderItemMeniu
      item="bar1"
      leftPage={`/${locale}/bar`}
      rightPage={`/${locale}`}
      lang="bar"
    />
  );
}
