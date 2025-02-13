"use client";

import { useRouter } from "next/navigation";
import { useSwipeable } from "react-swipeable";

import { useData } from "../context/data-meniu";

import Image from "next/image";

export default function RenderItemMeniu({ item, leftPage, rightPage }) {
  const router = useRouter();
  const handlers = useSwipeable({
    onSwipedLeft: () => router.push(rightPage),
    onSwipedRight: () => router.push(leftPage),
  });

  const selectArr = {
    bar: 0,
    bar1: 1,
    cusine: 2,
  };

  const { data, loading, error } = useData();
  const arrData = data?.[selectArr[item]];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Загрузка...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen pb-4">
        Произошла ошибка: {error.message}
      </div>
    );
  }

  return (
    <div {...handlers} className="  h-full w-full px-4 pb-6 relative">
      {arrData?.map((item, index) => (
        <div key={index}>
          <h1 className="flex justify-center items-center font-bold text-[18px] pt-4">
            <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
            {item.title}
            <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
          </h1>
          <div className="flex  gap-4 text-[14px] ">
            <ul className="list-none w-1/2">
              {item.listItem?.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
            <ul className="flex-1 list-none">
              {item.listGramm?.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
            <ul className="list-none w-1/4 text-right ">
              {item.listPrice?.map((item, id) => (
                <li key={id}>{item}&nbsp;lei</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <button
        onClick={() => router.push(leftPage)}
        className="text-xs absolute -bottom-2 left-12"
      >
        ← prev
      </button>
      <button
        onClick={() => router.push(rightPage)}
        className="text-xs absolute -bottom-2 right-12"
      >
        next →
      </button>
    </div>
  );
}
