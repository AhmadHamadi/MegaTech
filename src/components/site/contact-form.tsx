"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
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
      <div className="rounded-2xl bg-brand-teal/10 ring-1 ring-brand-teal p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-teal" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-brand-ink">
          Thanks — we got it.
        </h3>
        <p className="mt-3 text-muted-foreground">
          Our lab team will respond within 24 hours. For anything urgent, call
          us directly during business hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required placeholder="Jane Smith" />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          placeholder="(905) 208-9191"
        />
      </div>
      <Field
        label="Email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
      />

      <div>
        <label className="block text-sm font-medium text-brand-ink mb-2">
          What can we help with?
        </label>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
        >
          <option value="" disabled>
            Select a topic
          </option>
          <option value="New partner enquiry">Become a partner clinic</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Pricing & turnaround">Pricing &amp; turnaround</option>
          <option value="Other">Something else</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-brand-ink mb-2">
          Message <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your practice, the work you send out, and your timeline..."
          className="w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30 resize-none"
        />
      </div>

      {status === "error" ? (
        <div className="flex items-start gap-3 rounded-xl bg-red-50 ring-1 ring-red-200 p-4 text-sm text-red-900">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <p>
            Something went wrong sending your message. Please try again or call us at{" "}
            <a href="tel:+19052089191" className="underline font-medium">
              (905) 208-9191
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            "Sending..."
          ) : (
            <>
              Send request
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          We respond within 24 hours. Your info is kept private.
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
