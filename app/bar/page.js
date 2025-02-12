"use client";

import Image from "next/image";

export default function BarPage() {
  return (
    <>
      <div className="flex gap-8 h-screen w-screen px-6 pt-10 pb-10">
        <div className="h-full w-full">
          <div className="flex flex-col justify-center ">
            <h1 className="flex items-center gap-2 font-bold text-[18px]">
              <Image
                ria-hidden
                src="../dot.svg"
                alt="casino"
                width={16}
                height={16}
              />
              Bitter & Vermut
              <Image
                ria-hidden
                src="../dot.svg"
                alt="casino"
                width={16}
                height={16}
              />
            </h1>
            <div className="flex gap-4 text-[14px]">
              <p className="flex-1">Campari</p>
              <p>1/40</p>
              <p>95 lei</p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="flex flex-col justify-center ">
            <h1 className="flex items-center gap-2 font-bold text-[18px]">
              <Image
                ria-hidden
                src="../dot.svg"
                alt="casino"
                width={16}
                height={16}
              />
              Bitter & Vermut
              <Image
                ria-hidden
                src="../dot.svg"
                alt="casino"
                width={16}
                height={16}
              />
            </h1>
            <div className="flex gap-4 text-[14px]">
              <p className="flex-1">Campari</p>
              <p>1/40</p>
              <p>95 lei</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
