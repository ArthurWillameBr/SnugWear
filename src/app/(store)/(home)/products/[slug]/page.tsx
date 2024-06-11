import Image from "next/image";

export default function ProductPage() {
  return (
    <main className="relative grid grid-cols-3 max-h-[860px]">
      <div className="col-span-2 overflow-hidden">
        <Image
          src="/camiseta-dowhile-2022.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          Camiseta dowhile 2022
        </h1>
        <p className="leading-relaxed mt-2 text-zinc-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in
          consectetur odio. Sed nec orci in odio. Nulla facilisi. Nullam
          elementum, nunc in scelerisque.
        </p>
        <div className="flex items-center mt-8 gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            R$129.90
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x s/ juros de R$10.75
          </span>
        </div>
        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

            <button
                type="button"
                className=" flex items-center justify-center mt-8 w-full h-14 rounded-full bg-emerald-500 text-white font-semibold"
            >
                Adicionar ao carrinho
            </button>
      </div>
    </main>
  );
}
