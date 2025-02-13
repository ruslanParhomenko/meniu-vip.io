"use client"; // Нужно, если используем `useRouter()`

import { useRouter } from "next/navigation";
import { useSwipeable } from "react-swipeable";

import Image from "next/image";
import { useData } from "../context/data-meniu";

export default function SecondPage() {
  const router = useRouter();

  const { data, loading, error } = useData();
  const dataBar2 = data?.[1];

  const handlers = useSwipeable({
    onSwipedRight: () => router.push("/bar"),
    onSwipedLeft: () => router.push("/"),
  });

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
      <div className="flex justify-center items-center h-screen">
        Произошла ошибка: {error.message}
      </div>
    );
  }

  return (
    <div {...handlers} className="  h-full w-full px-8 relative">
      {dataBar2?.map((item, index) => (
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
              {item.listItem2?.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
            <ul className="flex-1 list-none">
              {item.listGramm2?.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
            <ul className="list-none w-1/4 text-right ">
              {item.listPrice2?.map((item, id) => (
                <li key={id}>{item}&nbsp;lei</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <span className="text-xs absolute -bottom-2 left-12">
        ← go to previous page
      </span>
      <span className="text-xs absolute -bottom-2 right-12">go to home →</span>
    </div>
  );
}
