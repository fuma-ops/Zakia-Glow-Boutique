import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/products";

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Accueil" },
    { to: "/boutique", label: "Boutique" },
    { to: "/notre-histoire", label: "Notre histoire" },
  ];

  return (
    <>
      {/* Top free-shipping bar */}
      <div className="bg-terracotta-deep py-2 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground sm:text-xs">
        ✦ Livraison gratuite partout au Maroc · Paiement à la livraison ✦
      </div>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-tight text-terracotta-deep">
              Zakia
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              candles
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-foreground/80 transition-colors hover:text-terracotta"
                activeProps={{ className: "text-terracotta font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink("Bonjour Zakia Candles, j'aurais une question 🌿")}
              target="_blank"
              rel="noopener noreferrer"
              title={`WhatsApp ${WHATSAPP_DISPLAY}`}
              className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-medium text-foreground/80 transition-colors hover:border-sage hover:text-sage sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link
              to="/panier"
              className="relative inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all hover:border-terracotta hover:shadow-card"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Panier</span>
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-terracotta text-[11px] font-semibold text-primary-foreground">
                  {count}
                </span>
              )}
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-secondary"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={waLink("Bonjour Zakia Candles 🌿")}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-sm hover:bg-secondary"
              >
                WhatsApp · {WHATSAPP_DISPLAY}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
