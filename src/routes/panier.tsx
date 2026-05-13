import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, Truck, BadgeCheck, MessageCircle, Phone, MapPin, User, Home } from "lucide-react";
import { useState } from "react";
import { useCart, formatMAD } from "@/lib/cart";
import { waLink, WHATSAPP_DISPLAY } from "@/lib/products";
import { toast } from "sonner";

export const Route = createFileRoute("/panier")({
  component: Panier,
  head: () => ({
    meta: [{ title: "Panier — Zakia Candles" }],
  }),
});

type Form = { name: string; phone: string; city: string; address: string; notes: string };

function Panier() {
  const { detailed, setQty, remove, subtotal, clear } = useCart();
  const [form, setForm] = useState<Form>({ name: "", phone: "", city: "", address: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);

  // Livraison toujours gratuite partout au Maroc
  const shipping = 0;
  const total = subtotal + shipping;

  const orderText = () => {
    const lines = detailed.map(
      ({ product, qty }) => `• ${product.name} × ${qty} — ${formatMAD(product.price * qty)}`,
    );
    return [
      `🕯️ Nouvelle commande Zakia Candles`,
      orderNumber ? `N° ${orderNumber}` : "",
      ``,
      `Nom : ${form.name}`,
      `Téléphone : ${form.phone}`,
      `Ville : ${form.city}`,
      `Adresse : ${form.address}`,
      form.notes ? `Notes : ${form.notes}` : "",
      ``,
      `Articles :`,
      ...lines,
      ``,
      `Total : ${formatMAD(total)}`,
      `Livraison : Gratuite`,
      `Paiement à la livraison ✅`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  // Confirmation après commande validée
  if (orderNumber) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 sm:py-28">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-sage">
            <BadgeCheck className="h-8 w-8" />
          </div>
          <h1 className="mt-6 font-display text-4xl text-ink sm:text-5xl">Merci pour votre commande !</h1>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-terracotta">
            Commande n° {orderNumber}
          </p>
          <p className="mt-5 text-foreground/75">
            Votre commande a bien été enregistrée. Notre équipe vous contactera très prochainement
            au <strong>{form.phone}</strong> pour confirmer votre livraison à <strong>{form.city}</strong>.
          </p>

          <div className="mt-8 grid gap-3 rounded-2xl bg-secondary/60 p-5 text-left text-sm">
            <div className="flex items-start gap-3">
              <Truck className="mt-0.5 h-4 w-4 text-terracotta" />
              <p>
                <strong>Livraison gratuite</strong> partout au Maroc, sous 24 à 72h selon votre ville.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-4 w-4 text-terracotta" />
              <p>
                <strong>Paiement à la livraison</strong> en espèces auprès du livreur. Total à régler :{" "}
                <strong>{formatMAD(total)}</strong>.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(orderText())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white shadow-soft transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4" /> Confirmer sur WhatsApp
            </a>
            <Link
              to="/boutique"
              className="inline-flex rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-terracotta"
            >
              Continuer mes achats
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Une question ? Écrivez-nous au {WHATSAPP_DISPLAY}
          </p>
        </div>
      </div>
    );
  }

  const canSubmit =
    detailed.length > 0 && form.name.trim() && form.phone.trim() && form.city.trim() && form.address.trim();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      toast.error("Merci de remplir tous les champs obligatoires.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      const num = "ZC-" + Date.now().toString().slice(-6);
      setOrderNumber(num);
      clear();
      toast.success("Commande validée !");
      setSubmitting(false);
    }, 700);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-10">
      <h1 className="font-display text-5xl text-ink">Mon panier</h1>
      <p className="mt-2 text-sm text-foreground/70">
        🚚 Livraison gratuite partout au Maroc · Paiement à la livraison
      </p>

      {detailed.length === 0 ? (
        <div className="mt-10 rounded-3xl border border-dashed border-border bg-card p-16 text-center">
          <p className="text-foreground/70">Votre panier est vide pour le moment.</p>
          <Link
            to="/boutique"
            className="mt-6 inline-flex rounded-full bg-terracotta-deep px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Découvrir la boutique
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            <ul className="divide-y divide-border rounded-2xl border border-border bg-card">
              {detailed.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-4 p-4 sm:gap-6 sm:p-6">
                  <Link
                    to="/produit/$id"
                    params={{ id: product.id }}
                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-secondary sm:h-28 sm:w-28"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-display text-lg leading-tight">{product.name}</h3>
                        <p className="text-xs text-muted-foreground">{product.tagline}</p>
                      </div>
                      <p className="font-display text-base text-terracotta-deep">
                        {formatMAD(product.price * qty)}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center gap-1 rounded-full border border-border p-1">
                        <button
                          onClick={() => setQty(product.id, qty - 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-secondary"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm">{qty}</span>
                        <button
                          onClick={() => setQty(product.id, qty + 1)}
                          className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-secondary"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(product.id)}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-3.5 w-3.5" /> Retirer
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Formulaire COD */}
            <form
              onSubmit={submit}
              className="rounded-2xl border border-border bg-card p-5 shadow-card sm:p-7"
            >
              <h2 className="font-display text-2xl">Vos informations de livraison</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Paiement à la livraison — vous ne payez qu’à la réception du colis.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field icon={User} label="Nom complet *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Zakia Benali" />
                <Field icon={Phone} label="Téléphone *" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="06 12 34 56 78" type="tel" />
                <Field icon={MapPin} label="Ville *" value={form.city} onChange={(v) => setForm({ ...form, city: v })} placeholder="Casablanca, Rabat, Marrakech…" />
                <Field icon={Home} label="Adresse complète *" value={form.address} onChange={(v) => setForm({ ...form, address: v })} placeholder="Rue, immeuble, étage…" />
              </div>

              <label className="mt-4 block">
                <span className="mb-1 block text-xs font-medium text-foreground/80">
                  Notes (optionnel)
                </span>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={2}
                  placeholder="Heure de livraison préférée, message cadeau…"
                  className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-terracotta"
                />
              </label>

              <button
                disabled={submitting || !canSubmit}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta-deep px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Validation…" : `Confirmer la commande · ${formatMAD(total)}`}
              </button>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                En validant, vous acceptez d’être contacté pour confirmer la livraison.
              </p>
            </form>
          </div>

          <aside className="sticky top-32 h-fit space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h2 className="font-display text-xl">Récapitulatif</h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Sous-total</dt>
                  <dd>{formatMAD(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Livraison</dt>
                  <dd className="font-medium text-sage">Gratuite 🇲🇦</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-3 font-display text-lg">
                  <dt>Total à payer</dt>
                  <dd className="text-terracotta-deep">{formatMAD(total)}</dd>
                </div>
              </dl>
              <div className="mt-5 rounded-xl bg-secondary/70 p-4 text-xs leading-relaxed text-foreground/75">
                <p className="font-medium text-foreground">Comment ça marche ?</p>
                <ol className="mt-2 list-decimal space-y-1 pl-4">
                  <li>Validez votre commande ci-contre.</li>
                  <li>Nous vous appelons pour confirmer.</li>
                  <li>Le livreur vous remet le colis.</li>
                  <li>Vous payez en espèces à la livraison.</li>
                </ol>
              </div>
            </div>

            <a
              href={waLink("Bonjour Zakia Candles, j'ai une question sur ma commande 🌿")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-card transition-transform hover:scale-[1.01]"
            >
              <MessageCircle className="h-4 w-4" /> Commander / Question sur WhatsApp
            </a>
          </aside>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  icon: Icon,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-foreground/80">{label}</span>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2.5 transition-colors focus-within:border-terracotta">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <input
          required
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>
    </label>
  );
}
