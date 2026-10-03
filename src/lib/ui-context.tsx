"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type UiContextValue = {
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  mobileNavOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;
};

const UiContext = createContext<UiContextValue | null>(null);

export function UiProvider({ children }: { children: ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <UiContext.Provider
      value={{
        searchOpen,
        openSearch: () => setSearchOpen(true),
        closeSearch: () => setSearchOpen(false),
        mobileNavOpen,
        openMobileNav: () => setMobileNavOpen(true),
        closeMobileNav: () => setMobileNavOpen(false),
        toggleMobileNav: () => setMobileNavOpen((v) => !v),
      }}
    >
      {children}
    </UiContext.Provider>
  );
}

export function useUi() {
  const ctx = useContext(UiContext);
  if (!ctx) throw new Error("useUi must be used within UiProvider");
  return ctx;
}
