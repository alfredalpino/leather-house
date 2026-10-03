"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

type Errors = Partial<Record<"name" | "email" | "phone" | "company" | "message", string>>;

export function CorporateForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Name is required";
    if (!values.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Enter a valid email";
    if (!values.phone.trim()) next.phone = "Phone is required";
    if (!values.company.trim()) next.company = "Company is required";
    if (!values.message.trim() || values.message.trim().length < 20)
      next.message = "Tell us a little more (20+ characters)";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-stone bg-bone/60 p-8 md:p-10">
        <p className="font-display text-2xl">Enquiry received</p>
        <p className="mt-3 text-muted leading-relaxed">
          This is a frontend mock. No email was sent. In production, the house
          team would follow up on bulk and corporate requests.
        </p>
        <Button
          type="button"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setValues({
              name: "",
              email: "",
              phone: "",
              company: "",
              quantity: "",
              message: "",
            });
          }}
        >
          Send another
        </Button>
      </div>
    );
  }

  const field =
    "w-full h-12 border border-stone bg-warm-white px-3 text-sm rounded-[var(--radius-sm)] placeholder:text-muted";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-[11px] tracking-[0.14em] uppercase text-muted">
            Name
          </label>
          <input
            id="name"
            className={`${field} mt-2`}
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          {errors.name && <p className="mt-1 text-sm text-oxide">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="text-[11px] tracking-[0.14em] uppercase text-muted">
            Company
          </label>
          <input
            id="company"
            className={`${field} mt-2`}
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-oxide">{errors.company}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-[11px] tracking-[0.14em] uppercase text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`${field} mt-2`}
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          {errors.email && <p className="mt-1 text-sm text-oxide">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-[11px] tracking-[0.14em] uppercase text-muted">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={`${field} mt-2`}
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
          />
          {errors.phone && <p className="mt-1 text-sm text-oxide">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="quantity" className="text-[11px] tracking-[0.14em] uppercase text-muted">
          Approximate quantity
        </label>
        <input
          id="quantity"
          className={`${field} mt-2`}
          placeholder="e.g. 50 belts, 20 wallets"
          value={values.quantity}
          onChange={(e) => setValues({ ...values, quantity: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-[11px] tracking-[0.14em] uppercase text-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full border border-stone bg-warm-white px-3 py-3 text-sm rounded-[var(--radius-sm)] placeholder:text-muted resize-y min-h-[120px]"
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-oxide">{errors.message}</p>
        )}
      </div>

      <Button type="submit">Enquire for bulk</Button>
    </form>
  );
}
