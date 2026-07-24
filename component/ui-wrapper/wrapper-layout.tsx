"use client";
import React, { useTransition } from "react";
import HeaderLayout from "@/component/header-layout";
import FooterLayout from "@/component/footer-layout";
import { StickyOrnaments } from "@/component/ui-wrapper/ornament-border";
import { useRouter } from "@/i18n/navigation";
import { useSwipeable } from "react-swipeable";
import { cn } from "@/lib/utils";

export default function WrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleSwipe = () => {
    startTransition(() => {
      router.push("/");
    });
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipe,
    onSwipedRight: handleSwipe,
    preventScrollOnSwipe: false,
    trackMouse: true,
  });
  return (
    <div className="flex flex-col justify-between h-dvh">
      <StickyOrnaments />

      <HeaderLayout />

      <div
        {...handlers}
        className={cn("flex-1 overflow-y-scroll no-scrollbar")}
      >
        {children}
      </div>

      <FooterLayout />
    </div>
  );
}
