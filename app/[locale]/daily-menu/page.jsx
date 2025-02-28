"use client";
import ButtonNavigationPage from "../../component/button-navigation-page";
import { useData } from "../../context/data-meniu-daily";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

import { useSwipeable } from "react-swipeable";

export default function DailyMenuPage() {
  const { locale } = useParams();
  const t = useTranslations("cusine");
  const ts = useTranslations("dailyMenu");
  const router = useRouter();

  const left = `/${locale}/`;
  const right = `/${locale}/`;

  const handlers = useSwipeable({
    onSwipedLeft: () => router.push(right),
    onSwipedRight: () => router.push(left),
  });

  const { data, loading, error } = useData();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen pb-20">
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
    <div
      {...handlers}
      className="flex flex-col items-center justify-center w-full relative tracking-wider"
    >
      <ButtonNavigationPage leftPage="/" />
      <h1 className="flex justify-center items-center font-bold text-[20px] py-5 ">
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
        {t("Salds & Appetixers")}
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
      </h1>
      <div className="flex flex-col w-full justify-center items-center gap-4 text-[16px] pt-1 ">
        <ul className="list-none flex flex-col items-center justify-center">
          {data.titleSalad?.map((el, id) => (
            <li key={id} className={id % 2 === 0 ? "font-bold" : ""}>
              {id % 2 === 0 ? ts(el) : el}
            </li>
          ))}
        </ul>
      </div>
      <h1 className="flex justify-center items-center font-bold text-[20px] py-5">
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
        {t("Second Courses")}
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
      </h1>
      <div className="flex flex-col w-full justify-center items-center gap-4 text-[16px] pt-1 ">
        <ul className="list-none  flex flex-col items-center justify-center">
          {data.titleSecond?.map((el, id) => (
            <li key={id} className={id % 2 === 0 ? "font-bold" : ""}>
              {id % 2 === 0 ? ts(el) : el}
            </li>
          ))}
        </ul>
      </div>
      <h1 className="flex justify-center items-center font-bold text-[20px] py-5">
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
        {t("Soups")}
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
      </h1>
      <div className="flex flex-col w-full justify-center items-center gap-4 text-[16px] pt-1 ">
        <ul className="list-none w-1/2 flex flex-col items-center justify-center">
          {data.titleMain?.map((el, id) => (
            <li key={id} className={id % 2 === 0 ? "font-bold" : ""}>
              {id % 2 === 0 ? ts(el) : el}
            </li>
          ))}
        </ul>
      </div>
      <h1 className="flex justify-center items-center font-bold text-[20px] py-5">
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
        {t("Side Dishes")}
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
      </h1>
      <h1 className="flex justify-center items-center font-bold text-[20px] py-5">
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
        {t("Desserts")}
        <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
      </h1>
      <div className="flex flex-col w-full justify-center items-center gap-4 text-[16px] pt-1 ">
        <ul className="list-none w-1/2 flex flex-col items-center justify-center">
          {data.titleDesserts?.map((el, id) => (
            <li key={id} className={id % 2 === 0 ? "font-bold" : ""}>
              {id % 2 === 0 ? ts(el) : el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
