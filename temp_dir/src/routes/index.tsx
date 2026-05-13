import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Leaf, Sparkles, Truck } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import atelierImg from "@/assets/atelier.jpg";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Zakia Candles — Bougies artisanales du Maroc" },
      {
        name: "description",
        content:
          "Découvrez nos bougies parfumées artisanales coulées à la main à Casablanca. Cire de soja, parfums d’exception, livraison dans tout le Maroc.",
      },
    ],
  }),
});

function Home() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Bougies Zakia"
            width={1600}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="mx-auto grid max-w-7xl items-end gap-10 px-4 pb-16 pt-28 sm:px-6 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-foreground/70 backdrop-blur">
              <Sparkles className="h-3 w-3" /> Nouvelle collection
            </span>
            <h1 className="mt-5 text-balance font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              La lumière douce <em className="text-terracotta-deep">d’un instant</em> à soi.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base text-foreground/75 sm:text-lg">
              Bougies parfumées coulées à la main au Maroc, dans des contenants choisis avec amour.
              Cire de soja naturelle, mèches en coton, parfums d’exception.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/boutique"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta-deep px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:bg-foreground"
              >
                Découvrir la boutique <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/notre-histoire"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/70 px-6 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-background"
              >
                Notre histoire
              </Link>
            </div>
          </div>
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
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 bg-secondary/40 px-4 py-5 text-center text-xs font-medium text-foreground/80 sm:text-sm"
            >
              <Icon className="h-4 w-4 text-terracotta" />
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Nos coups de cœur</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
              Des parfums qui racontent.
            </h2>
          </div>
          <Link
            to="/boutique"
            className="inline-flex items-center gap-1 text-sm font-medium text-terracotta-deep hover:underline"
          >
            Voir toute la collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="bg-gradient-warm">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:gap-16 lg:px-10">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src={atelierImg}
              alt="L’atelier Zakia Candles"
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta-deep">L’atelier</p>
            <h2 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
              Petite marque, grandes attentions.
            </h2>
            <p className="mt-5 text-foreground/75">
              Zakia Candles est née d’une passion familiale pour les rituels parfumés. Chaque
              bougie est coulée en petite série dans notre atelier à Casablanca, avec des
              ingrédients soigneusement sélectionnés.
            </p>
            <p className="mt-3 text-foreground/75">
              Nous croyons aux gestes lents, aux objets qui durent, et à la beauté de l’imparfait.
            </p>
            <Link
              to="/notre-histoire"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-terracotta-deep hover:underline"
            >
              Lire notre histoire <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
        <h2 className="text-center font-display text-3xl text-ink sm:text-4xl">
          Aimées par nos clientes.
        </h2>
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
          ].map((t) => (
            <figure
              key={t.n}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <blockquote className="font-display text-lg leading-snug text-foreground">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                {t.n}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
