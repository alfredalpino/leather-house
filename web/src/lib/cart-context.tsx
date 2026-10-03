"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "@/lib/data/products";

export type CartItem = {
  product: Product;
  quantity: number;
  size?: string;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (product: Product, options?: { size?: string; quantity?: number }) => void;
  removeItem: (productId: string, size?: string) => void;
  updateQuantity: (productId: string, quantity: number, size?: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function sameLine(a: CartItem, productId: string, size?: string) {
  return a.product.id === productId && a.size === size;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("lh-cart");
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("lh-cart", JSON.stringify(items));
  }, [items, hydrated]);

  const addItem: CartContextValue["addItem"] = (product, options) => {
    const size = options?.size;
    const quantity = options?.quantity ?? 1;
    setItems((prev) => {
      const existing = prev.find((i) => sameLine(i, product.id, size));
      if (existing) {
        return prev.map((i) =>
          sameLine(i, product.id, size)
            ? { ...i, quantity: i.quantity + quantity }
            : i,
        );
      }
      return [...prev, { product, quantity, size }];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, size?: string) => {
    setItems((prev) => prev.filter((i) => !sameLine(i, productId, size)));
  };

  const updateQuantity = (productId: string, quantity: number, size?: string) => {
    if (quantity <= 0) {
      removeItem(productId, size);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        sameLine(i, productId, size) ? { ...i, quantity } : i,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const itemCount = items.reduce((n, i) => n + i.quantity, 0);
  const subtotal = items.reduce(
    (n, i) => n + i.product.price * i.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        subtotal,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        toggleCart: () => setIsOpen((v) => !v),
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
