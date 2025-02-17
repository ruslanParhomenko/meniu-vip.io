"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function ButtonNavigationPage({ leftPage, rightPage }) {
  const locale = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const getTextPrev = () => {
    switch (pathname) {
      case `/${locale.locale}/bar`:
        return "← home";
      case `/${locale.locale}/bar-page-2`:
        return "← prev";
      case `/${locale.locale}/cusine`:
        return "← home";
      default:
        return null;
    }
  };
  const getTextNext = () => {
    switch (pathname) {
      case `/${locale.locale}/bar`:
        return "next →";
      case `/${locale.locale}/bar-page-2`:
        return "home →";
      case `/${locale.locale}/cusine`:
        return null;
      default:
        return null;
    }
  };
  return (
    <div className=" flex items-center justify-center py-4">
      <button
        onClick={() => router.push(leftPage)}
        className="text-xs absolute  left-12 "
      >
        {getTextPrev()}
      </button>
      <button
        onClick={() => router.push(rightPage)}
        className="text-xs absolute  right-12"
      >
        {getTextNext()}
      </button>
    </div>
  );
}
