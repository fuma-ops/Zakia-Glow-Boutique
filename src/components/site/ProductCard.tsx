import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart, formatMAD } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(200,100,50,0.3)] hover:border-terracotta/30">
      <Link
        to="/produit/$id"
        params={{ id: product.id }}
        className="relative block aspect-[4/5] overflow-hidden bg-secondary before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-background/20 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
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
