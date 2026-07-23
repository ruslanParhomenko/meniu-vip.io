import React from "react";
import HeaderLayout from "@/component/header-layout";
import FooterLayout from "@/component/footer-layout";
import { StickyOrnaments } from "@/component/ui-wrapper/ornament-border";

export default function WrapperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between h-dvh">
      <StickyOrnaments />

      <HeaderLayout />

      <div className="flex-1 overflow-y-scroll">{children}</div>

      <FooterLayout />
    </div>
  );
}
