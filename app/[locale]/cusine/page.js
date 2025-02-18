"use client";

import RenderItemMeniu from "../../component/render-item-meniu";
import { useParams } from "next/navigation";

export default function CusinePage() {
  const { locale } = useParams();
  return (
    <RenderItemMeniu
      item="cusine"
      leftPage={`/${locale}`}
      rightPage={`/${locale}`}
      lang="cusine"
    />
  );
}
