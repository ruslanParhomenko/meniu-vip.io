import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-center py-8">
      <h1 className="flex items-center gap-2 text-center text-3xl font-bold  ">
        <Image
          className=" -rotate-90"
          src="/meniu.svg"
          alt="logo"
          width={20}
          height={20}
          priority
        />
        MENIU
        <Image
          className=" rotate-90"
          src="/meniu.svg"
          alt="logo"
          width={20}
          height={20}
          priority
        />
      </h1>
    </div>
  );
}
