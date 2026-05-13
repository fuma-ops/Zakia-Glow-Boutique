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
      <section className="relative isolate min-h-[90vh] overflow-hidden bg-background flex items-center">
        {/* Refined merged background: Image on the right, blending into the left */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[65%] z-0">
          <img
            src="/candle-epices.jpg"
            alt="Bougie Miel & Épices"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-[center_20%] md:object-center transition-all duration-1000"
          />
          {/* Gradients for smooth merge into the text area */}
          <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-full md:w-1/4 bg-gradient-to-l from-ink/10 to-transparent pointer-events-none" />
          {/* Mobile bottom-up gradient */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/20 to-transparent md:hidden z-10" />
        </div>

        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl mx-auto md:mx-0"
          >
            <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-background/90 px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-terracotta backdrop-blur-sm shadow-sm"
              >
                <Sparkles className="h-3 w-3 text-gold" /> Nouvelle collection
              </motion.span>
              
              <h1 className="text-balance font-display text-5xl leading-[1.1] text-ink sm:text-7xl lg:text-8xl drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                La lumière douce <br/>
                <em className="font-serif italic text-terracotta-deep drop-shadow-sm">d’un instant</em> à soi.
              </h1>
              
              <p className="max-w-md text-balance text-lg font-medium text-ink/90 leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)] sm:text-xl">
                Bougies parfumées coulées à la main au Maroc, dans des contenants choisis avec amour. Cire de soja naturelle, mèches en coton, parfums d’exception.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-5 pt-4 md:justify-start">
                <Link
                  to="/boutique"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-terracotta-deep px-10 py-5 text-sm font-semibold text-white shadow-xl shadow-terracotta/20 transition-all hover:bg-terracotta hover:shadow-terracotta/30 active:scale-95 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2 tracking-wide">
                    Découvrir la boutique <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  to="/notre-histoire"
                  className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-background/40 px-10 py-5 text-sm font-semibold text-ink backdrop-blur-md transition-all hover:bg-background hover:border-terracotta/30 hover:text-terracotta"
                >
                  Notre histoire
                </Link>
              </div>
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
          className="flex flex-col items-center text-center lg:flex-row lg:items-end lg:justify-between lg:text-left gap-4"
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
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-terracotta/30 bg-background/50 px-3 py-1 text-xs uppercase tracking-[0.3em] text-terracotta backdrop-blur shadow-[0_0_10px_rgba(200,100,50,0.1)] mb-4">L’atelier</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
              Petite marque, grandes attentions.
            </h2>
            <p className="mt-5 text-foreground/80 leading-relaxed max-w-md md:max-w-none">
              Zakia Candles est née d’une passion familiale pour les rituels parfumés. Chaque
              bougie est coulée en petite série dans notre atelier à Casablanca, avec des
              ingrédients soigneusement sélectionnés.
            </p>
            <p className="mt-3 text-foreground/80 leading-relaxed max-w-md md:max-w-none">
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
