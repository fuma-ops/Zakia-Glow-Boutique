import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-terracotta-deep">Zakia</span>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              candles
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Bougies artisanales coulées à la main au Maroc, à base de cire de soja naturelle et
            d’huiles parfumées de qualité supérieure.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">
            Boutique
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/boutique" className="hover:text-terracotta">
                Toutes les bougies
              </Link>
            </li>
            <li>
              <Link to="/notre-histoire" className="hover:text-terracotta">
                Notre histoire
              </Link>
            </li>
            <li>
              <Link to="/panier" className="hover:text-terracotta">
                Panier
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> Casablanca, Maroc
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" /> hello@zakiacandles.ma
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-3.5 w-3.5" /> @zakia.candles
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-10">
          <p>© {new Date().getFullYear()} Zakia Candles — Fait avec ❤ au Maroc</p>
          <p>Livraison gratuite partout au Maroc · Paiement à la livraison</p>
        </div>
      </div>
    </footer>
  );
}
