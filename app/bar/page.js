"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BarPage() {
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
        setData(data);
      } catch (error) {
        console.error("Ошибка:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  const url =
    "https://script.google.com/macros/s/AKfycbwhcIjiopHNY30RlHec7crMF_zp9eoqtroPbPF9oGv5kXZGjnMOAfOjZV6l1RYdMDfAIw/exec";
  return (
    <>
      <div className="  h-screen w-screen px-6 ">
        {data?.map((item, index) => (
          <div key={index}>
            <h1 className="flex justify-center items-center gap-1 font-bold text-[18px]">
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

            <div className="flex  gap-4 text-[14px] px-10">
              <p></p>
              <p className="flex-1">1/40</p>
              <p>95 lei</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
