import type { Metadata } from "next";
import { AccountClient } from "@/components/account/AccountClient";

export const metadata: Metadata = {
  title: "Patron Profile & Orders",
  description:
    "Manage your Leather House patron orders, saved addresses, offline settings, and bespoke artisan inquiries.",
};

export default function AccountPage() {
  return <AccountClient />;
}
