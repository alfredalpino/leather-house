"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Package,
  MapPin,
  Smartphone,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  Download,
  CheckCircle2,
  Clock,
  ExternalLink,
  ChevronRight,
  Wifi,
  Bell,
  RefreshCw,
} from "lucide-react";
import { usePwa } from "@/lib/pwa-context";

interface OrderItem {
  id: string;
  name: string;
  variant: string;
  price: string;
  status: "In Workshop" | "Dispatched" | "Delivered";
  trackingNumber: string;
  date: string;
  estimatedDelivery: string;
}

const mockOrders: OrderItem[] = [
  {
    id: "LH-9182",
    name: "Aminabad Belt (Tobacco) & Evening Cologne",
    variant: "34 / 50ml Extrait",
    price: "₹6,480",
    status: "Dispatched",
    trackingNumber: "BD-LKO-498218",
    date: "4 Oct 2026",
    estimatedDelivery: "Arriving Today, Aminabad Express",
  },
  {
    id: "LH-8471",
    name: "House Biker Jacket in Obsidian Calfskin",
    variant: "Size M · Brass Hardware",
    price: "₹24,900",
    status: "Delivered",
    trackingNumber: "BD-LKO-310924",
    date: "18 Sep 2026",
    estimatedDelivery: "Delivered to Aminabad, Lucknow",
  },
];

export function AccountClient() {
  const { isOnline, isStandalone, canInstall, isIOS, promptInstall } = usePwa();
  const [activeTab, setActiveTab] = useState<"orders" | "address" | "pwa" | "concierge">("orders");
  const [installSuccess, setInstallSuccess] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [showIosModal, setShowIosModal] = useState(false);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIosModal(true);
      return;
    }
    const installed = await promptInstall();
    if (installed) {
      setInstallSuccess(true);
    }
  };

  return (
    <div className="container-catalogue py-8 sm:py-12">
      {/* Header Profile Summary */}
      <div className="border border-line bg-paper/50 p-6 sm:p-8 mb-8 shadow-[0_4px_24px_rgba(20,19,18,0.03)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-ink text-warm-white flex items-center justify-center font-display text-2xl font-medium border border-brass/50 shrink-0">
              LH
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-display text-2xl sm:text-3xl text-ink font-medium tracking-tight">
                  Patron of Leather House
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium tracking-[0.1em] uppercase bg-bone px-2.5 py-0.5 border border-line text-tobacco">
                  <ShieldCheck size={12} />
                  Guild Member
                </span>
              </div>
              <p className="text-xs text-muted mt-1">
                Aminabad, Lucknow · Member #LH-4029 · Lifetime Care Active
              </p>
            </div>
          </div>

          {/* Standalone status badge */}
          <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-start pt-3 sm:pt-0 border-t sm:border-t-0 border-line/60">
            <div className="flex items-center gap-1.5 text-xs text-ink bg-warm-white border border-line px-3 py-1.5 rounded-sm">
              <span className={`w-2 h-2 rounded-full ${isOnline ? "bg-emerald-600" : "bg-amber-600 animate-pulse"}`} />
              <span className="text-[11px] font-medium tracking-[0.06em]">
                {isStandalone ? "PWA Standalone App" : isOnline ? "Online & Synced" : "Offline Mode"}
              </span>
            </div>
            {!isStandalone && (
              <button
                type="button"
                onClick={handleInstallClick}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.08em] uppercase bg-ink text-warm-white px-3 py-1.5 hover:bg-charcoal transition-colors rounded-sm"
              >
                <Smartphone size={13} />
                Install App
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-line mb-8 overflow-x-auto scrollbar-thin">
        <button
          type="button"
          onClick={() => setActiveTab("orders")}
          className={`flex items-center gap-2 pb-3.5 px-4 text-xs font-medium tracking-[0.1em] uppercase transition-colors shrink-0 border-b-2 -mb-px ${
            activeTab === "orders"
              ? "border-ink text-ink font-semibold"
              : "border-transparent text-muted hover:text-ink"
          }`}
        >
          <Package size={15} />
          Orders & Dispatches
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("address")}
          className={`flex items-center gap-2 pb-3.5 px-4 text-xs font-medium tracking-[0.1em] uppercase transition-colors shrink-0 border-b-2 -mb-px ${
            activeTab === "address"
              ? "border-ink text-ink font-semibold"
              : "border-transparent text-muted hover:text-ink"
          }`}
        >
          <MapPin size={15} />
          Saved Addresses
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("pwa")}
          className={`flex items-center gap-2 pb-3.5 px-4 text-xs font-medium tracking-[0.1em] uppercase transition-colors shrink-0 border-b-2 -mb-px ${
            activeTab === "pwa"
              ? "border-ink text-ink font-semibold"
              : "border-transparent text-muted hover:text-ink"
          }`}
        >
          <Smartphone size={15} />
          App & Offline Settings
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("concierge")}
          className={`flex items-center gap-2 pb-3.5 px-4 text-xs font-medium tracking-[0.1em] uppercase transition-colors shrink-0 border-b-2 -mb-px ${
            activeTab === "concierge"
              ? "border-ink text-ink font-semibold"
              : "border-transparent text-muted hover:text-ink"
          }`}
        >
          <MessageSquare size={15} />
          Bespoke Concierge
        </button>
      </div>

      {/* Tab 1: Orders */}
      {activeTab === "orders" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl sm:text-2xl text-ink font-medium">
              Recent Dispatches & Purchases
            </h2>
            <span className="text-xs text-muted">2 Orders Recorded</span>
          </div>

          <div className="grid gap-5">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="border border-line bg-warm-white p-5 sm:p-6 transition-all hover:border-ink/40 shadow-[0_2px_12px_rgba(20,19,18,0.02)]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-line/60">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-wider uppercase text-ink">
                      Order {order.id}
                    </span>
                    <span className="text-xs text-muted">· Placed {order.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-medium tracking-[0.06em] rounded-sm ${
                        order.status === "Delivered"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-amber-50 text-amber-900 border border-amber-200"
                      }`}
                    >
                      {order.status === "Delivered" ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <Clock size={12} className="animate-spin" />
                      )}
                      {order.status}
                    </span>
                    <span className="text-xs font-medium text-ink sm:ml-4">
                      {order.price}
                    </span>
                  </div>
                </div>

                <div className="py-4">
                  <p className="text-sm font-medium text-ink">{order.name}</p>
                  <p className="text-xs text-muted mt-0.5">{order.variant}</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-tobacco font-medium bg-paper/80 px-3 py-2 border border-line/60">
                    <Package size={14} />
                    <span>{order.estimatedDelivery}</span>
                    <span className="text-muted ml-auto font-mono text-[11px]">
                      Tracking: {order.trackingNumber}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-line/60 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => alert(`Tracking dispatched order #${order.id} on Blue Dart Lucknow hub.`)}
                    className="text-xs font-medium tracking-[0.08em] uppercase text-ink hover:text-accent flex items-center gap-1"
                  >
                    Track Shipment <ExternalLink size={12} />
                  </button>
                  <span className="text-line">|</span>
                  <Link
                    href="/journal/leather-care-basics"
                    className="text-xs font-medium tracking-[0.08em] uppercase text-muted hover:text-ink"
                  >
                    Care & Conditioning Guide
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Addresses */}
      {activeTab === "address" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl sm:text-2xl text-ink font-medium">
              Delivery Addresses
            </h2>
            <button
              type="button"
              onClick={() => alert("New address sheet opened")}
              className="text-xs font-medium tracking-[0.1em] uppercase text-tobacco hover:underline"
            >
              + Add Address
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="border border-ink bg-warm-white p-5 relative shadow-[0_2px_8px_rgba(20,19,18,0.03)]">
              <span className="absolute top-4 right-4 text-[10px] font-medium tracking-[0.1em] uppercase bg-ink text-warm-white px-2 py-0.5">
                Default
              </span>
              <p className="text-xs font-semibold text-ink tracking-wide uppercase mb-1">
                Lucknow Residence
              </p>
              <p className="text-sm font-medium text-ink">Ubaid Khan</p>
              <p className="text-xs text-muted leading-relaxed mt-1">
                Near Gadbadjhala Market, Aminabad<br />
                Lucknow, Uttar Pradesh 226018<br />
                Ph: +91 98390 12345
              </p>
              <div className="mt-4 pt-3 border-t border-line flex items-center gap-3 text-xs">
                <button type="button" className="text-ink hover:underline font-medium">Edit</button>
              </div>
            </div>

            <div className="border border-line bg-paper/50 p-5">
              <p className="text-xs font-semibold text-ink tracking-wide uppercase mb-1">
                Office / Studio
              </p>
              <p className="text-sm font-medium text-ink">Ubaid Khan</p>
              <p className="text-xs text-muted leading-relaxed mt-1">
                Hazratganj Main Corridor<br />
                Lucknow, Uttar Pradesh 226001<br />
                Ph: +91 98390 12345
              </p>
              <div className="mt-4 pt-3 border-t border-line flex items-center gap-3 text-xs">
                <button type="button" className="text-ink hover:underline font-medium">Set as Default</button>
                <span className="text-line">|</span>
                <button type="button" className="text-ink hover:underline font-medium">Edit</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: PWA & Device Settings */}
      {activeTab === "pwa" && (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-xl sm:text-2xl text-ink font-medium">
              Progressive Web App & Offline Controls
            </h2>
            <p className="text-xs text-muted mt-1">
              Configure your Leather House offline storage, service worker cache, and home screen installation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {/* Install card */}
            <div className="border border-line bg-warm-white p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-ink text-warm-white flex items-center justify-center mb-3">
                  <Smartphone size={20} />
                </div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wide">
                  Home Screen Installation
                </h3>
                <p className="text-xs text-muted leading-relaxed mt-1.5">
                  Install Leather House to your phone or desktop for instant loading, full-screen view, and offline catalogue browsing.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line">
                {isStandalone ? (
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5">
                    <CheckCircle2 size={14} />
                    <span>Application Installed & Active</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleInstallClick}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium tracking-[0.1em] uppercase bg-ink text-warm-white hover:bg-charcoal transition-colors"
                  >
                    <Download size={14} />
                    {isIOS ? "How to Install on iOS" : "Install App to Device"}
                  </button>
                )}
              </div>
            </div>

            {/* Offline Cache status */}
            <div className="border border-line bg-warm-white p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-paper text-ink flex items-center justify-center mb-3 border border-line">
                  <Wifi size={20} />
                </div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wide">
                  Offline Readiness
                </h3>
                <p className="text-xs text-muted leading-relaxed mt-1.5">
                  The Service Worker caches key product imagery, catalogue items, and attar descriptions so you can browse even inside underground bazaars or spotty networks.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                <span className="text-xs text-muted">Cache: Active (v1.0)</span>
                <button
                  type="button"
                  onClick={() => {
                    if ("caches" in window) {
                      caches.keys().then((names) => {
                        Promise.all(names.map((name) => caches.delete(name))).then(() => {
                          alert("PWA cache refreshed. Reloading...");
                          window.location.reload();
                        });
                      });
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs text-tobacco hover:underline font-medium"
                >
                  <RefreshCw size={12} />
                  Purge & Re-sync
                </button>
              </div>
            </div>

            {/* Notification Toggle */}
            <div className="border border-line bg-warm-white p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-paper text-ink flex items-center justify-center mb-3 border border-line">
                  <Bell size={20} />
                </div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wide">
                  Workshop Dispatch Notifications
                </h3>
                <p className="text-xs text-muted leading-relaxed mt-1.5">
                  Receive live alerts when your order enters the Aminabad leather workshop or departs for local courier delivery.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                <span className="text-xs text-muted">
                  {notificationsEnabled ? "Alerts Enabled" : "Alerts Paused"}
                </span>
                <button
                  type="button"
                  onClick={() => setNotificationsEnabled((v) => !v)}
                  className={`text-xs font-semibold px-3 py-1 border transition-colors ${
                    notificationsEnabled
                      ? "border-ink bg-ink text-warm-white"
                      : "border-line text-muted hover:text-ink"
                  }`}
                >
                  {notificationsEnabled ? "Enabled" : "Disabled"}
                </button>
              </div>
            </div>

            {/* PWA Manifest info */}
            <div className="border border-line bg-warm-white p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-sm bg-paper text-ink flex items-center justify-center mb-3 border border-line">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wide">
                  Web App Manifest & Security
                </h3>
                <p className="text-xs text-muted leading-relaxed mt-1.5">
                  Fully compliant with W3C Web App Manifest specification, HTTPS TLS transport security, and mobile viewport safe-area guidelines.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted">manifest.webmanifest</span>
                <Link
                  href="/manifest.webmanifest"
                  target="_blank"
                  className="text-xs text-tobacco hover:underline font-medium"
                >
                  Inspect Manifest
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Bespoke Concierge */}
      {activeTab === "concierge" && (
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-xl sm:text-2xl text-ink font-medium">
              Bespoke Services & Master Artisan
            </h2>
            <p className="text-xs text-muted mt-1">
              Every piece of leather at our Aminabad house can be customized, monogrammed, or tailored to your specifications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-line bg-paper/50 p-6 space-y-4">
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-tobacco">
                Direct WhatsApp Channel
              </span>
              <h3 className="font-display text-xl text-ink font-medium">
                Talk to Master Craftsman in Aminabad
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Send photos, request leather swatch samples, inquire about custom belt hole adjustments, or consult on attar profiles directly with our store team.
              </p>
              <a
                href="https://wa.me/919839012345?text=Hello%20Leather%20House%20Aminabad,%20I%20am%20a%20patron%20inquiring%20about%20bespoke%20crafting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium tracking-[0.1em] uppercase bg-ink text-warm-white hover:bg-charcoal transition-colors"
              >
                <MessageSquare size={14} />
                Message WhatsApp Concierge
              </a>
            </div>

            <div className="border border-line bg-warm-white p-6 space-y-4">
              <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-muted">
                Physical Consultation
              </span>
              <h3 className="font-display text-xl text-ink font-medium">
                Visit Aminabad Flagship Boutique
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Enjoy a cup of warm tea while our leather specialists measure your fit, condition your worn shoes, or introduce you to raw attar distillations.
              </p>
              <Link
                href="/store"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium tracking-[0.1em] uppercase border border-line hover:border-ink transition-colors text-ink"
              >
                Store Hours & Directions
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* iOS Install Instruction Modal */}
      {showIosModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm">
          <div className="bg-warm-white border border-line p-6 max-w-sm w-full shadow-2xl relative">
            <h3 className="font-display text-xl text-ink font-medium mb-2">
              Install on iPhone or iPad
            </h3>
            <p className="text-xs text-muted leading-relaxed mb-4">
              Safari on iOS lets you add Leather House directly to your Home Screen in 2 simple taps:
            </p>
            <ol className="text-xs text-ink space-y-2.5 mb-6 pl-4 list-decimal leading-relaxed">
              <li>Tap the <strong>Share</strong> button (box with upward arrow) at the bottom of Safari.</li>
              <li>Scroll down and tap <strong>Add to Home Screen</strong>.</li>
              <li>Tap <strong>Add</strong> in the top-right corner to complete.</li>
            </ol>
            <button
              type="button"
              onClick={() => setShowIosModal(false)}
              className="w-full py-2.5 bg-ink text-warm-white text-xs font-medium tracking-[0.1em] uppercase hover:bg-charcoal transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
