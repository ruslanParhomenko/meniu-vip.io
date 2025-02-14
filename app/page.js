"use client";
import BotonStartMeniu from "./component/botton-start-meniu";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div
      className={`transform transition-all duration-700 
        flex flex-col  items-center gap-12 py-32 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
    >
      <BotonStartMeniu page="/bar" text="BAR" />
      <BotonStartMeniu page="/cusine" text="CUSINE" />
    </div>
  );
}
