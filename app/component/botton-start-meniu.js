import Link from "next/link";

export default function BotonStartMeniu({ page, text }) {
  return (
    <button>
      <Link href={page}>
        <p className="rounded-full border border-solid border-transparent  flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838]  h-10  w-40">
          {text}
        </p>
      </Link>
    </button>
  );
}
