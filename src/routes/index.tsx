import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Leaf, Sparkles, Truck } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[85vh] overflow-hidden flex items-center">
        {/* Full-width merged background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/candle-epices.jpg"
            alt="Bougie Miel & Épices"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-center lg:object-[65%_center]"
          />
          {/* Advanced gradient for merging and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent lg:via-background/40" />
          <div className="absolute inset-0 bg-ink/10 mix-blend-multiply" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-background/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-terracotta backdrop-blur shadow-[0_0_15px_rgba(255,160,122,0.3)]">
              <Sparkles className="h-3 w-3 text-gold" /> Miel & Épices
            </span>
            <h1 className="mt-5 text-balance font-display text-5xl leading-[1.05] text-ink drop-shadow-sm sm:text-6xl lg:text-7xl">
              Chaleur <em className="text-terracotta-deep glow-text italic">orientale</em> <br/> pour vos soirées.
            </h1>
            <p className="mt-6 max-w-lg text-balance text-base font-medium text-ink/90 drop-shadow-sm sm:text-xl leading-relaxed">
              Plongez dans l'univers envoûtant de notre bougie signature. Cannelle, anis étoilé et miel d’oranger pour une ambiance réconfortante.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/produit/miel-epices"
                className="group relative inline-flex items-center gap-2 rounded-full bg-terracotta-deep px-8 py-4 text-sm font-medium text-white transition-all hover:bg-terracotta glow-box overflow-hidden"
              >
                <div className="absolute inset-0 z-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-full" />
                <span className="z-10 relative flex items-center gap-2">Acheter maintenant <ArrowRight className="h-4 w-4" /></span>
              </Link>
              <Link
                to="/boutique"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-background/60 px-8 py-4 text-sm font-medium backdrop-blur transition-all hover:bg-white hover:text-ink hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              >
                Tout découvrir
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee values */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            { icon: Leaf, label: "Cire de soja 100% naturelle" },
            { icon: Flame, label: "Coulé à la main au Maroc" },
            { icon: Truck, label: "Livraison gratuite partout au Maroc" },
            { icon: Sparkles, label: "Paiement à la livraison" },
          ].map(({ icon: Icon, label }, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={label}
              className="group flex flex-col items-center justify-center gap-3 bg-secondary/40 px-4 py-8 text-center text-xs font-medium text-foreground/80 sm:text-sm hover:bg-secondary/60 transition-colors"
            >
              <div className="p-3 rounded-full bg-background/80 shadow-[0_0_15px_rgba(200,100,50,0.15)] group-hover:shadow-[0_0_20px_rgba(200,100,50,0.3)] transition-all">
                <Icon className="h-5 w-5 text-terracotta" />
              </div>
              {label}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta glow-text">Nos coups de cœur</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
              Des parfums qui racontent.
            </h2>
          </div>
          <Link
            to="/boutique"
            className="inline-flex items-center gap-1 text-sm font-medium text-terracotta-deep hover:text-terracotta transition-colors hover:shadow-[0_0_10px_rgba(200,100,50,0.2)] rounded-full px-4 py-2"
          >
            Voir toute la collection <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] mix-blend-overlay"></div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-3xl shadow-[0_20px_50px_-10px_rgba(200,100,50,0.4)] relative group"
          >
            <div className="absolute inset-0 bg-terracotta/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <img
              src="/atelier.jpg"
              alt="L’atelier Zakia Candles"
              loading="lazy"
              width={1200}
              height={900}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-background/50 px-3 py-1 text-xs uppercase tracking-[0.3em] text-terracotta backdrop-blur shadow-[0_0_10px_rgba(200,100,50,0.1)] mb-4">L’atelier</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
              Petite marque, grandes attentions.
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed">
              Zakia Candles est née d’une passion familiale pour les rituels parfumés. Chaque
              bougie est coulée en petite série dans notre atelier à Casablanca, avec des
              ingrédients soigneusement sélectionnés.
            </p>
            <p className="mt-3 text-foreground/80 leading-relaxed">
              Nous croyons aux gestes lents, aux objets qui durent, et à la beauté de l’imparfait.
            </p>
            <Link
              to="/notre-histoire"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:text-terracotta-deep transition-all group"
            >
              <span className="border-b border-transparent group-hover:border-terracotta pb-0.5">Lire notre histoire</span> <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl text-ink sm:text-4xl"
        >
          Aimées par nos clientes.
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              q: "Le parfum est divin et le packaging tellement soigné. Une vraie pépite marocaine !",
              n: "Salma — Rabat",
            },
            {
              q: "Ma bougie Oud & Amber embaume tout le salon. Je recommande les yeux fermés.",
              n: "Yasmine — Marrakech",
            },
            {
              q: "Livraison rapide à Tanger et qualité au top. J’ai déjà recommandé !",
              n: "Inès — Tanger",
            },
          ].map((t, i) => (
            <motion.figure
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              key={t.n}
              className="group rounded-2xl border border-border bg-card/60 backdrop-blur p-6 shadow-soft hover:shadow-[0_15px_30px_-10px_rgba(200,100,50,0.2)] hover:border-terracotta/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-terracotta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <blockquote className="font-display text-lg leading-snug text-foreground relative z-10">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-terracotta relative z-10">
                {t.n}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </>
  );
}
