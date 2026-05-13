import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import { motion, AnimatePresence } from "motion/react";

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
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl relative z-10"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta glow-text">Boutique</p>
        <h1 className="mt-2 font-display text-5xl text-ink sm:text-6xl text-shadow-sm">Notre collection.</h1>
        <p className="mt-4 text-foreground/80 leading-relaxed">
          Bougies sculpturales et parfumées, coullée à la main avec passion.
          Toutes à moins de 160 DH, avec <strong>livraison gratuite partout au Maroc</strong>.
        </p>
      </motion.header>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-10 flex flex-wrap gap-2 relative z-10"
      >
        {collections.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
              filter === c
                ? "border-terracotta bg-terracotta-deep text-primary-foreground shadow-[0_0_15px_rgba(200,100,50,0.4)]"
                : "border-border/50 bg-card/60 backdrop-blur text-foreground/80 hover:border-terracotta/50 hover:bg-card/90"
            }`}
          >
            {c}
          </button>
        ))}
      </motion.div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={p.id}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
