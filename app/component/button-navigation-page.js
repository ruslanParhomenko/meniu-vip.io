"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ButtonNavigationPage({ leftPage, rightPage }) {
  const router = useRouter();
  const pathname = usePathname();

  const getTextPrev = () => {
    switch (pathname) {
      case "/bar":
        return "← home";
      case "/bar-page-2":
        return "← prev";
      case "/cusine":
        return "← home";
      default:
        return null;
    }
  };
  const getTextNext = () => {
    switch (pathname) {
      case "/bar":
        return "next →";
      case "/bar-page-2":
        return "home →";
      case "/cusine":
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
