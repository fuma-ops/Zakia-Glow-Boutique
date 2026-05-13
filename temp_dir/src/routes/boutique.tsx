import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/boutique")({
  component: Boutique,
  head: () => ({
    meta: [
      { title: "Boutique — Zakia Candles" },
      {
        name: "description",
        content:
          "Bougies sculpturales et parfumées, faites main au Maroc. Livraison gratuite, paiement à la livraison.",
      },
    ],
  }),
});

const collections = ["Toutes", "Sculpture", "Florale", "Mignonne", "Signature"] as const;

function Boutique() {
  const [filter, setFilter] = useState<(typeof collections)[number]>("Toutes");

  const filtered = useMemo(
    () => (filter === "Toutes" ? products : products.filter((p) => p.collection === filter)),
    [filter],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Boutique</p>
        <h1 className="mt-2 font-display text-5xl text-ink sm:text-6xl">Notre collection.</h1>
        <p className="mt-4 text-foreground/75">
          Bougies sculpturales et parfumées, dans des formes et couleurs uniques. Toutes à moins
          de 160 DH, avec <strong>livraison gratuite partout au Maroc</strong>.
        </p>
      </header>


      <div className="mt-10 flex flex-wrap gap-2">
        {collections.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              filter === c
                ? "border-terracotta-deep bg-terracotta-deep text-primary-foreground"
                : "border-border bg-card text-foreground/80 hover:border-terracotta"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
