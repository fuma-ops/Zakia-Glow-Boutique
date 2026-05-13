import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart, formatMAD } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-soft">
      <Link
        to="/produit/$id"
        params={{ id: product.id }}
        className="relative block aspect-[4/5] overflow-hidden bg-secondary"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/80 backdrop-blur">
          {product.collection}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg leading-tight">{product.name}</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">{product.tagline}</p>
          </div>
          <p className="whitespace-nowrap font-display text-base text-terracotta-deep">
            {formatMAD(product.price)}
          </p>
        </div>

        <button
          onClick={() => {
            add(product.id);
            toast.success(`${product.name} ajoutée au panier`);
          }}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:bg-terracotta-deep"
        >
          <ShoppingBag className="h-4 w-4" /> Ajouter
        </button>
      </div>
    </article>
  );
}
