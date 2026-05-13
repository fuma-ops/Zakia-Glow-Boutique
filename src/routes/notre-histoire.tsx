import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/notre-histoire")({
  component: Histoire,
  head: () => ({
    meta: [
      { title: "Notre histoire — Zakia Candles" },
      {
        name: "description",
        content:
          "L’histoire de Zakia Candles, marque marocaine de bougies artisanales coulées à la main à Casablanca.",
      },
    ],
  }),
});

function Histoire() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">Notre histoire</p>
          <h1 className="mt-2 font-display text-5xl text-ink sm:text-6xl">
            Une histoire de <em className="text-terracotta-deep">famille</em> et de parfums.
          </h1>
          <p className="mt-6 text-foreground/80">
            Zakia Candles est née à Casablanca, dans la cuisine d’une grand-mère qui aimait
            parfumer la maison avec des bougies artisanales. Aujourd’hui, nous perpétuons cette
            tradition en y ajoutant une touche contemporaine.
          </p>
          <p className="mt-4 text-foreground/80">
            Chaque bougie est coulée à la main, en petite série, avec de la cire de soja 100%
            naturelle, des mèches en coton non blanchi, et des huiles parfumées d’exception
            inspirées du patrimoine marocain.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl shadow-soft">
          <img
            src="/atelier.jpg"
            alt="Atelier Zakia Candles"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-10">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">Nos engagements.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "100% naturel",
                d: "Cire de soja, mèches en coton, parfums sans phtalates ni paraffine.",
              },
              {
                t: "Made in Morocco",
                d: "Coulée à la main dans notre atelier à Casablanca, en petites séries.",
              },
              {
                t: "Éco-responsable",
                d: "Contenants réutilisables, packaging recyclable, circuit court.",
              },
            ].map((e) => (
              <div key={e.t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-xl text-terracotta-deep">{e.t}</h3>
                <p className="mt-2 text-sm text-foreground/75">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-10">
        <h2 className="font-display text-4xl text-ink">Prête à allumer la vôtre ?</h2>
        <Link
          to="/boutique"
          className="mt-8 inline-flex rounded-full bg-terracotta-deep px-8 py-4 text-sm font-medium text-primary-foreground shadow-soft transition-colors hover:bg-foreground"
        >
          Découvrir la boutique
        </Link>
      </section>
    </>
  );
}
