import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group flex relative items-start justify-center col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-never-stop-learning.png"
          alt=""
          width={920}
          height={920}
          quality={100}
        />
        <div className="flex items-center gap-3 max-w-[280px] border-2 border-zinc-500 bg-black/60 p-1 pl-5 rounded-full absolute bottom-28 right-28 h-12  ">
          <span className="text-sm truncate">Moleton never stop</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 99,99
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative flex items-start justify-center col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/moletom-ia-p-devs.png"
          alt=""
          width={620}
          height={620}
          quality={100}
        />
        <div className="flex items-center gap-3 max-w-[280px] border-2 border-zinc-500 bg-black/60 p-1 pl-5 rounded-full absolute bottom-10 right-10 h-12  ">
          <span className="text-sm truncate">Moleton never stop</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 99,99
          </span>
        </div>
      </Link>
      <Link
        href="/"
        className="group relative flex items-start justify-center col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src="/camiseta-dowhile-2022.png"
          alt=""
          width={620}
          height={620}
          quality={100}
        />
        <div className="flex items-center gap-3 max-w-[280px] border-2 border-zinc-500 bg-black/60 p-1 pl-5 rounded-full absolute bottom-10 right-10 h-12  ">
          <span className="text-sm truncate">Moleton never stop</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$ 99,99
          </span>
        </div>
      </Link>
    </main>
  );
}
