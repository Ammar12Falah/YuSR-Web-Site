"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, wire this to an API route or third-party form service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card text-center py-12">
        <p className="heading-md">Thank you.</p>
        <p className="body-md mt-3">
          We&apos;ll be in touch within two business days.
        </p>
      </div>
    );
  }

  return (
    <div className="card max-w-xl">
      <h3 className="font-display text-xl mb-6">Send us a message</h3>
      <div className="space-y-5" role="form">
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Name
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2.5 bg-sand border border-yusr-200 rounded-sm text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-2.5 bg-sand border border-yusr-200 rounded-sm text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Company
          </label>
          <input
            type="text"
            className="w-full px-4 py-2.5 bg-sand border border-yusr-200 rounded-sm text-sm focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink mb-1.5">
            Message
          </label>
          <textarea
            rows={5}
            required
            className="w-full px-4 py-2.5 bg-sand border border-yusr-200 rounded-sm text-sm focus:outline-none focus:border-accent transition-colors resize-none"
          />
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="w-full py-3 bg-ink text-sand text-sm font-medium rounded-sm hover:bg-ink-light transition-colors"
        >
          Submit Inquiry
        </button>
      </div>
    </div>
  );
}
