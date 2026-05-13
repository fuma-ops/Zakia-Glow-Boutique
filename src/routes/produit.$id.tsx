import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { getProduct, products } from "@/lib/products";
import { useCart, formatMAD } from "@/lib/cart";
import { ProductCard } from "@/components/site/ProductCard";
import { toast } from "sonner";

export const Route = createFileRoute("/produit/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.product.name} — Zakia Candles` },
            { name: "description", content: loaderData.product.description },
            { property: "og:image", content: loaderData.product.image },
          ],
        }
      : {},
  component: ProductPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl">Bougie introuvable</h1>
      <Link to="/boutique" className="mt-4 inline-block text-terracotta-deep underline">
        Retour à la boutique
      </Link>
    </div>
  ),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  const others = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
      <Link
        to="/boutique"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-terracotta"
      >
        <ArrowLeft className="h-4 w-4" /> Retour à la boutique
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-3xl bg-secondary shadow-soft">
          <img
            src={product.image}
            alt={product.name}
            width={800}
            height={1000}
            referrerPolicy="no-referrer"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">{product.collection}</p>
          <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">{product.name}</h1>
          <p className="mt-1 text-foreground/70">{product.tagline}</p>

          <p className="mt-6 font-display text-3xl text-terracotta-deep">
            {formatMAD(product.price)}
          </p>

          <p className="mt-6 text-foreground/80">{product.description}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Notes</dt>
              <dd className="mt-1 font-medium">{product.notes.join(" · ")}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Durée de combustion
              </dt>
              <dd className="mt-1 font-medium">{product.burnTime}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Cire</dt>
              <dd className="mt-1 font-medium">Soja naturelle</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Fabrication
              </dt>
              <dd className="mt-1 font-medium">Casablanca, Maroc</dd>
            </div>
          </dl>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
                aria-label="Diminuer"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-secondary"
                aria-label="Augmenter"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={() => {
                add(product.id, qty);
                toast.success(`${product.name} ajoutée au panier`);
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-terracotta-deep px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground"
            >
              <ShoppingBag className="h-4 w-4" /> Ajouter au panier
            </button>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="font-display text-3xl text-ink">Vous aimerez aussi</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
