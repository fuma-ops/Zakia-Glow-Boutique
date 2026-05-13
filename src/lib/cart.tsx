import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { products, type Product } from "./products";

type CartItem = { id: string; qty: number };
type CartCtx = {
  items: CartItem[];
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  detailed: { product: Product; qty: number }[];
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "zakia-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartCtx>(() => {
    const detailed = items
      .map((i) => {
        const product = products.find((p) => p.id === i.id);
        return product ? { product, qty: i.qty } : null;
      })
      .filter(Boolean) as { product: Product; qty: number }[];
    return {
      items,
      add: (id, qty = 1) =>
        setItems((curr) => {
          const f = curr.find((i) => i.id === id);
          if (f) return curr.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i));
          return [...curr, { id, qty }];
        }),
      remove: (id) => setItems((c) => c.filter((i) => i.id !== id)),
      setQty: (id, qty) =>
        setItems((c) =>
          qty <= 0 ? c.filter((i) => i.id !== id) : c.map((i) => (i.id === id ? { ...i, qty } : i)),
        ),
      clear: () => setItems([]),
      count: items.reduce((s, i) => s + i.qty, 0),
      subtotal: detailed.reduce((s, d) => s + d.product.price * d.qty, 0),
      detailed,
    };
  }, [items]);

// Livraison gratuite partout au Maroc


  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be inside CartProvider");
  return c;
};

export const formatMAD = (n: number) =>
  new Intl.NumberFormat("fr-MA", { maximumFractionDigits: 0 }).format(n) + " DH";
