"use client";

import { useState } from "react";
import { Truck, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

export function PickupForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          type: "pickup",
          // Map to the fields the API validates, plus pickup extras.
          name: data.contact,
          phone: data.phone,
          email: data.email,
          service: `Pickup request — ${data.clinic || "clinic"}`,
          clinic: data.clinic,
          address: data.address,
          pickupTime: data.pickupTime,
          message: data.details,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 text-center ring-1 ring-brand-line">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-teal" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-brand-ink">
          Pickup requested.
        </h3>
        <p className="mt-3 text-muted-foreground">
          Our team has been notified and will confirm your collection shortly.
          For anything urgent, call us during business hours.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Request another pickup
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-6 md:p-8 ring-1 ring-brand-line space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Clinic / practice" name="clinic" required placeholder="Bayview Dental" />
        <Field label="Contact name" name="contact" required placeholder="Front desk / Dr." />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" required placeholder="(905) 208-9191" />
        <Field label="Email" name="email" type="email" required placeholder="office@clinic.com" />
      </div>
      <Field
        label="Pickup address"
        name="address"
        required
        placeholder="Street, city, unit/suite"
      />

      <div>
        <label htmlFor="pickupTime" className="block text-sm font-medium text-brand-ink mb-2">
          Preferred pickup<span className="text-brand-teal"> *</span>
        </label>
        <select
          id="pickupTime"
          name="pickupTime"
          required
          defaultValue=""
          className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
        >
          <option value="" disabled>
            Select a time
          </option>
          <option value="ASAP">As soon as possible</option>
          <option value="Today — morning">Today — morning</option>
          <option value="Today — afternoon">Today — afternoon</option>
          <option value="Tomorrow">Tomorrow</option>
          <option value="Next scheduled run">Next scheduled run is fine</option>
        </select>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-brand-ink mb-2">
          Case details <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="details"
          name="details"
          rows={3}
          placeholder="How many cases, type of work, or anything our driver should know..."
          className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30 resize-none"
        />
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 ring-1 ring-red-200 p-4 text-sm text-red-900">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <p>
            Something went wrong sending your request. Please try again or call us at{" "}
            <a href={siteConfig.phoneHref} className="underline font-medium">
              {siteConfig.phone}
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
        <Button type="submit" variant="accent" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            "Sending..."
          ) : (
            <>
              Request pickup
              <Truck className="h-4 w-4" />
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          Notifies our lab instantly. No login required.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-ink mb-2">
        {label}
        {required ? <span className="text-brand-teal"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
      />
    </div>
  );
}
