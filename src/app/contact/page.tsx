import { Hero, SectionHeading } from "@/components/Shared";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — YuSR AI",
  description: "Get in touch with YuSR for enterprise inquiries, partnerships, and demo requests.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        tag="Contact"
        title="Let&rsquo;s talk."
        subtitle="Whether you're evaluating our models for enterprise deployment, exploring a domain-specific integration, or interested in early access to Genni — we'd like to hear from you."
      />

      <section className="section-container py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading title="Get in touch." />
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-ink mb-1">
                  Enterprise Inquiries
                </h3>
                <p className="text-sm text-ink-muted">
                  Model licensing, custom fine-tuning, and on-premise deployment.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink mb-1">
                  Partnerships
                </h3>
                <p className="text-sm text-ink-muted">
                  Integration partners, research collaborations, and domain specialists.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink mb-1">
                  Research
                </h3>
                <p className="text-sm text-ink-muted">
                  Academic collaborations, dataset partnerships, and open-source contributions.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="text-sm font-semibold text-ink mb-2">
                  Open Source
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://github.com/Ammar12Falah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-accent hover:text-accent-dark transition-colors"
                  >
                    github.com/Ammar12Falah →
                  </a>
                  <a
                    href="https://huggingface.co/Ammar12Falah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-accent hover:text-accent-dark transition-colors"
                  >
                    huggingface.co/Ammar12Falah →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
