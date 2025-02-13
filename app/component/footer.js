import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" flex items-center justify-center pt-8 pb-8">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://casino-nuovo.md/"
        // target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/nova-casino.svg"
          alt="casino"
          width={16}
          height={16}
        />
        go to casino.md →
      </a>
    </footer>
  );
}
