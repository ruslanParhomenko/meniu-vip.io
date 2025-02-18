"use client";

import { useRouter } from "next/navigation";
import { useSwipeable } from "react-swipeable";

import ButtonNavigationPage from "./button-navigation-page";

import { useData } from "../context/data-meniu";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

import Image from "next/image";

export default function RenderItemMeniu({ item, leftPage, rightPage, lang }) {
  const t = useTranslations(lang);
  const { locale } = useParams();
  const left = `/${locale}${leftPage}`;
  const right = `/${locale}${rightPage}`;

  const router = useRouter();
  const handlers = useSwipeable({
    onSwipedLeft: () => router.push(right),
    onSwipedRight: () => router.push(left),
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
    <div {...handlers} className="   w-full px-4 pb-4 relative">
      <ButtonNavigationPage leftPage={left} rightPage={right} />
      {arrData?.map((item, index) => (
        <div key={index}>
          <h1 className="flex justify-center items-center font-bold text-[18px] py-5">
            <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
            {t(item.title)}
            <Image src="../dot.svg" width={16} height={16} priority alt="dot" />
          </h1>
          <div className="flex  gap-4 text-[14px] pt-1 ">
            <ul className="list-none w-1/2">
              {item.listItem?.map((item, id) => (
                <li key={id}>{item === "cusine" ? t("cusine") : item}</li>
              ))}
            </ul>
            <ul className="flex-1 list-none">
              {item.listGramm?.map((item, id) => (
                <li key={id} className="text-center">
                  {item}
                </li>
              ))}
            </ul>
            <ul className="list-none w-1/4 text-right ">
              {item.listPrice?.map((item, id) => (
                <li key={id}>
                  {item}&nbsp;&nbsp;{t("lei")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <ButtonNavigationPage leftPage={left} rightPage={right} />
    </div>
  );
}
