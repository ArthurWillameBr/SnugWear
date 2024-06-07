import { api } from "@/data/api";
import { Product } from "@/data/types/products";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured");

  const products = await response.json();

  return products;
}

export default async function Home() {
  const products = await getFeaturedProducts();

  const [highlightedProduct, ...otherProducts] = products;

  return (
    <main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
       <Link
       href={`/products/${highlightedProduct.slug}`}
       className="group flex relative items-start justify-center col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden"
     >
       <Image
         className="group-hover:scale-105 transition-transform duration-500"
         src={highlightedProduct.image}
         alt=""
         width={920}
         height={920}
         quality={100}
       />
       <div className="flex items-center gap-3 max-w-[280px] border-2 border-zinc-500 bg-black/60 p-1 pl-5 rounded-full absolute bottom-28 right-28 h-12  ">
         <span className="text-sm truncate">{highlightedProduct.title}</span>
         <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
           {highlightedProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
           })}
         </span>
       </div>
     </Link>
      <Link
        href={`products/${otherProducts[0].slug}`}
        className="group relative flex items-start justify-center col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src={otherProducts[0].image}
          alt=""
          width={620}
          height={620}
          quality={100}
        />
        <div className="flex items-center gap-3 max-w-[280px] border-2 border-zinc-500 bg-black/60 p-1 pl-5 rounded-full absolute bottom-10 right-10 h-12  ">
          <span className="text-sm truncate">{otherProducts[0].title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {otherProducts[0].price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
           })}
          </span>
        </div>
      </Link>
      <Link
        href={`/products/${otherProducts[1].slug}`}
        className="group relative flex items-start justify-center col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src={otherProducts[1].image}
          alt=""
          width={620}
          height={620}
          quality={100}
        />
        <div className="flex items-center gap-3 max-w-[280px] border-2 border-zinc-500 bg-black/60 p-1 pl-5 rounded-full absolute bottom-10 right-10 h-12  ">
          <span className="text-sm truncate">{otherProducts[1].title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {otherProducts[1].price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
           })}
          </span>
        </div>
      </Link>
    </main>
  );
}
