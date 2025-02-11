import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-12 pb-10  font-[family-name:var(--font-geist-sans)] gap-16 items-center
">
      <main className="flex flex-1 flex-col gap-8 row-start-2  sm:items-start">
        <h1 className="text-center text-3xl font-bold ">MENIU</h1>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            BAR
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
            CUSINE
          </a>

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://casino-nuovo.md/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/nova-casino.svg"
            alt="casino"
            width={16}
            height={16}
          />
          Go to casino-nova.md →
        </a>
      </footer>
    </div>
  );
}
