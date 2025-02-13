"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import { useData } from "../context/data-meniu";

import Image from "next/image";

export default function CusinePage() {
  const { data, loading, error } = useData();
  const dataCusine = data?.[2];

  const router = useRouter();

  const handlers = useSwipeable({
    onSwipedLeft: () => router.push("/"), // Свайп влево → переход на вторую страницу
    onSwipedRight: () => router.push("/"),
  });

  // Индикатор загрузки
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Загрузка...
      </div>
    );
  }

  // Индикатор ошибки
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen pb-4">
        Произошла ошибка: {error.message}
      </div>
    );
  }

  return (
    <div {...handlers} className="  h-full w-full px-8 pb-6 relative">
      {dataCusine?.map((item, index) => (
        <div key={index}>
          <h1 className="flex justify-center items-center font-bold text-[18px] pt-4">
            <Image
              // ria-hidden
              src="../dot.svg"
              alt="casino"
              width={16}
              height={16}
            />
            {item.title}
            <Image
              // ria-hidden
              src="../dot.svg"
              alt="casino"
              width={16}
              height={16}
            />
          </h1>
          <div className="flex  gap-4 text-[14px] px-5">
            <ul className="list-none w-1/2">
              {item.listItem3?.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
            <ul className="flex-1 list-none">
              {item.listGramm3?.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
            <ul className="list-none w-1/4 text-right ">
              {item.listPrice3?.map((item, id) => (
                <li key={id}>{item}&nbsp;lei</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <button
        onClick={() => router.push("/")}
        className="text-xs absolute -bottom-2 left-12 "
      >
        ← go to home
      </button>
    </div>
  );
}
