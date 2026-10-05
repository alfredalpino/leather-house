"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data/products";
import { Button } from "@/components/ui/Button";

export function CheckoutClient() {
  const { items, subtotal, clearCart } = useCart();
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "Lucknow",
    method: "delivery",
  });

  if (done) {
    return (
      <div>
        <div className="container-editorial py-20 max-w-xl text-center">
          <p className="font-display text-4xl">Order recorded</p>
          <p className="mt-4 text-muted leading-relaxed">
            Mock checkout complete. No payment was taken and nothing was shipped.
            This screen exists to demonstrate the end-to-end UI flow.
          </p>
          <Button href="/shop" className="mt-8">
            Continue exploring
          </Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <div className="container-editorial py-20 max-w-xl text-center">
          <p className="font-display text-3xl">Nothing to check out</p>
          <p className="mt-3 text-muted">Add objects from the catalogue first.</p>
          <Button href="/shop" className="mt-8">
            Explore the House
          </Button>
        </div>
      </div>
    );
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Required";
    if (!form.email.trim() || !form.email.includes("@")) next.email = "Valid email required";
    if (!form.phone.trim()) next.phone = "Required";
    if (form.method === "delivery" && !form.address.trim())
      next.address = "Address required for delivery";
    setErrors(next);
    if (Object.keys(next).length) return;
    clearCart();
    setDone(true);
  };

  const field =
    "mt-2 w-full h-12 border border-stone bg-warm-white px-3 text-sm rounded-[var(--radius-sm)]";

  return (
    <div>
      <div className="container-editorial py-12 md:py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="font-display text-3xl md:text-4xl">Checkout</h1>
          <p className="mt-2 text-sm text-muted">Frontend mock. No real payment.</p>

          <form onSubmit={onSubmit} className="mt-10 space-y-5" noValidate>
            <fieldset className="space-y-3">
              <legend className="text-[11px] tracking-[0.18em] uppercase text-muted">
                Fulfilment
              </legend>
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="method"
                  checked={form.method === "delivery"}
                  onChange={() => setForm({ ...form, method: "delivery" })}
                />
                Delivery
              </label>
              <label className="flex items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="method"
                  checked={form.method === "pickup"}
                  onChange={() => setForm({ ...form, method: "pickup" })}
                />
                Collect from Aminabad store
              </label>
            </fieldset>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="text-[11px] tracking-[0.14em] uppercase text-muted">
                  Name
                </label>
                <input
                  id="c-name"
                  className={field}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                {errors.name && <p className="text-sm text-oxide mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="c-phone" className="text-[11px] tracking-[0.14em] uppercase text-muted">
                  Phone
                </label>
                <input
                  id="c-phone"
                  className={field}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                {errors.phone && <p className="text-sm text-oxide mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="c-email" className="text-[11px] tracking-[0.14em] uppercase text-muted">
                Email
              </label>
              <input
                id="c-email"
                type="email"
                className={field}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && <p className="text-sm text-oxide mt-1">{errors.email}</p>}
            </div>

            {form.method === "delivery" && (
              <>
                <div>
                  <label htmlFor="c-address" className="text-[11px] tracking-[0.14em] uppercase text-muted">
                    Address
                  </label>
                  <textarea
                    id="c-address"
                    rows={3}
                    className="mt-2 w-full border border-stone bg-warm-white px-3 py-3 text-sm rounded-[var(--radius-sm)]"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                  {errors.address && (
                    <p className="text-sm text-oxide mt-1">{errors.address}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="c-city" className="text-[11px] tracking-[0.14em] uppercase text-muted">
                    City
                  </label>
                  <input
                    id="c-city"
                    className={field}
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                  />
                </div>
              </>
            )}

            <Button type="submit" className="w-full md:w-auto">
              Place mock order · {formatPrice(subtotal)}
            </Button>
          </form>
        </div>

        <aside className="lg:col-span-5">
          <div className="border border-stone/60 bg-bone/40 p-6 sticky top-24">
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted">
              Order summary
            </p>
            <ul className="mt-6 space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.size}`}
                  className="grid grid-cols-[64px_1fr_auto] gap-3 items-start"
                >
                  <div className="relative aspect-[4/5] bg-warm-white overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <Link
                      href={`/product/${item.product.slug}`}
                      className="text-sm hover:text-accent"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-muted mt-1">
                      Qty {item.quantity}
                      {item.size ? ` · Size ${item.size}` : ""}
                    </p>
                  </div>
                  <p className="text-sm">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-stone flex justify-between text-sm">
              <span className="tracking-[0.1em] uppercase text-muted">Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
