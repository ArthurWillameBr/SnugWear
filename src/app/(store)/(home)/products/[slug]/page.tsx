import { api } from "@/data/api";
import { Product } from "@/data/types/products";
import Image from "next/image";

interface ProductPros {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string): Promise<Product> {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1hour
    },
  });

  const product = await response.json();

  return product;
}

export default async function ProductPage({params}: ProductPros) {
  const product = await getProduct(params.slug);

  return (
    <main className="relative grid grid-cols-3 max-h-[860px]">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">
          {product.title}
        </h1>
        <p className="leading-relaxed mt-2 text-zinc-400">
        {product.description}
        </p>
        <div className="flex items-center mt-8 gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
            }
          </span>
          <span className="text-sm text-zinc-400">
          {(product.price / 12).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
            }
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
