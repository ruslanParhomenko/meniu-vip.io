"use client";
import RenderItemMeniu from "../../component/render-item-meniu";
import { useParams } from "next/navigation";

export default function BarPage() {
  const { locale } = useParams();
  return (
    <RenderItemMeniu
      item="bar"
      leftPage={`/${locale}`}
      rightPage={`/${locale}/bar-page-2`}
    />
  );
}
