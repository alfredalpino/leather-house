"use client";

import { CartProvider } from "@/lib/cart-context";
import { UiProvider } from "@/lib/ui-context";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <UiProvider>
      <CartProvider>{children}</CartProvider>
    </UiProvider>
  );
}
