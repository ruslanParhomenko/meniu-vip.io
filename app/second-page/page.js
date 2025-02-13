"use client"; // Нужно, если используем `useRouter()`

import { useRouter } from "next/navigation";
import { useSwipeable } from "react-swipeable";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SecondPage() {
  const router = useRouter();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { Accept: "application/json" },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setData(data[1]);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  const url =
    "https://script.google.com/macros/s/AKfycbxPflSkFgJkrhYK-4u9NAmj_GF8MLsMAIRy5MHLPQ17Y8tmh2rrJxYXVnanhW2moHM/exec";

  const handlers = useSwipeable({
    onSwipedRight: () => router.push("/bar"),
  });
  return (
    <div {...handlers} className="  h-full w-full px-8 ">
      {data?.map((item, index) => (
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
    </div>
  );
}
